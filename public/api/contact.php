<?php
/**
 * ONE DESIGN Contact API (JSON)
 * Cloudflare Pages (front) -> Xserver PHP (this file)
 * Returns JSON: { ok: true } / { ok: false, message: "..." }
 */

header("Content-Type: application/json; charset=utf-8");

// ====== CORS ======
$allowedOrigins = [
  "https://onedesign-new.pages.dev",
  "https://one-design.xyz",
  "https://www.one-design.xyz",
  // "https://onedesign.xyz", // カスタムドメインに移行したら追加
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: " . $origin);
  header("Vary: Origin");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Headers: Content-Type");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  http_response_code(405);
  echo json_encode(["ok" => false, "message" => "Method not allowed"], JSON_UNESCAPED_UNICODE);
  exit;
}

// ====== 設定 ======
$to   = "info@one-design.xyz";
$from = "info@one-design.xyz"; // 送信元は設置ドメイン推奨
$siteName = "ONE DESIGN";
$adminSubject = "ONE DESIGNホームページからのお問い合わせ";
$replySubject = "お問い合わせありがとうございます。";
$sendAutoReply = true;

// ====== JSON受け取り ======
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => "Invalid JSON"], JSON_UNESCAPED_UNICODE);
  exit;
}

// ====== 入力取り出し ======
$name    = trim((string)($data["お名前"] ?? ""));
$email   = trim((string)($data["Email"] ?? ""));
$subject = trim((string)($data["件名"] ?? ""));
$body    = trim((string)($data["お問い合わせ内容"] ?? ""));
$source  = trim((string)($data["当サイトをしったきっかけ"] ?? ""));
$pageUrl = trim((string)($data["pageUrl"] ?? ""));

// ====== バリデーション ======
$errors = [];
if ($name === "")  $errors[] = "お名前は必須です";
if ($email === "") $errors[] = "メールアドレスは必須です";
if ($body === "")  $errors[] = "お問い合わせ内容は必須です";
if ($email !== "" && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = "メールアドレスの形式が正しくありません";
}
if (!empty($errors)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => implode(" / ", $errors)], JSON_UNESCAPED_UNICODE);
  exit;
}

// ====== 簡易レート制限 ======
$ip = $_SERVER["REMOTE_ADDR"] ?? "unknown";
$rateFile = sys_get_temp_dir() . "/onedesign_contact_" . md5($ip) . ".txt";
$now = time();
if (file_exists($rateFile)) {
  $last = (int)@file_get_contents($rateFile);
  if ($last > 0 && ($now - $last) < 30) {
    http_response_code(429);
    echo json_encode(["ok" => false, "message" => "送信が続いています。少し時間をおいて再度お試しください。"], JSON_UNESCAPED_UNICODE);
    exit;
  }
}
@file_put_contents($rateFile, (string)$now);

// ====== 文字コード（日本のメールで確実にする） ======
mb_language("Japanese");
mb_internal_encoding("UTF-8");

function toJis($str) {
  return mb_convert_encoding($str, "ISO-2022-JP-MS", "UTF-8");
}
function encSubject($str) {
  return mb_encode_mimeheader($str, "ISO-2022-JP-MS");
}
function encFromName($str) {
  return mb_encode_mimeheader($str, "ISO-2022-JP-MS");
}

// ====== 管理者宛本文 ======
$adminBody = [];
$adminBody[] = "お問い合わせが届きました";
$adminBody[] = "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
$adminBody[] = "お名前：{$name}";
$adminBody[] = "Email：{$email}";
if ($subject !== "") $adminBody[] = "件名：{$subject}";
if ($source !== "")  $adminBody[] = "きっかけ：{$source}";
if ($pageUrl !== "") $adminBody[] = "送信ページ：{$pageUrl}";
$adminBody[] = "IP：{$ip}";
$adminBody[] = "送信日時：" . date("Y/m/d (D) H:i:s");
$adminBody[] = "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
$adminBody[] = "お問い合わせ内容：";
$adminBody[] = $body;

$adminBodyJis = toJis(implode("\n", $adminBody));

// ====== 管理者宛ヘッダ ======
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "From: " . encFromName($siteName) . " <{$from}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "Content-Type: text/plain; charset=ISO-2022-JP";
$headers[] = "Content-Transfer-Encoding: 7bit";
$headersText = implode("\r\n", $headers);

// ====== 送信（管理者宛） ======
$adminOk = @mb_send_mail($to, encSubject($adminSubject), $adminBodyJis, $headersText);

if (!$adminOk) {
  http_response_code(500);
  echo json_encode(["ok" => false, "message" => "メール送信に失敗しました（サーバー設定をご確認ください）"], JSON_UNESCAPED_UNICODE);
  exit;
}

// ====== 自動返信 ======
if ($sendAutoReply) {
  $replyBody = [];
  $replyBody[] = "{$name} 様";
  $replyBody[] = "";
  $replyBody[] = "この度はお問い合わせいただきありがとうございます。";
  $replyBody[] = "以下の内容で、お問い合わせを承りました。";
  $replyBody[] = "確認次第、折り返しご連絡いたします。";
  $replyBody[] = "";
  $replyBody[] = "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
  if ($subject !== "") $replyBody[] = "件名：{$subject}";
  $replyBody[] = "お問い合わせ内容：";
  $replyBody[] = $body;
  $replyBody[] = "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
  $replyBody[] = "";
  $replyBody[] = "――――――――――――――――――";
  $replyBody[] = "ONE DESIGN　岸本拓";
  $replyBody[] = "info@one-design.xyz";
  $replyBody[] = "https://one-design.xyz/";
  $replyBody[] = "――――――――――――――――――";

  $replyHeaders = [];
  $replyHeaders[] = "MIME-Version: 1.0";
  $replyHeaders[] = "From: " . encFromName($siteName) . " <{$from}>";
  $replyHeaders[] = "Reply-To: {$from}";
  $replyHeaders[] = "Content-Type: text/plain; charset=ISO-2022-JP";
  $replyHeaders[] = "Content-Transfer-Encoding: 7bit";
  $replyHeadersText = implode("\r\n", $replyHeaders);

  @mb_send_mail($email, encSubject($replySubject), toJis(implode("\n", $replyBody)), $replyHeadersText);
}

// ====== 成功 ======
echo json_encode(["ok" => true], JSON_UNESCAPED_UNICODE);
exit;