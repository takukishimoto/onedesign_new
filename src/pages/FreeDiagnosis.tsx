import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Concern =
  | "サイトが集客につながらない"
  | "サイトが古く見える"
  | "スマホで見づらい"
  | "導線が分かりにくい"
  | "写真の印象を整えたい"
  | "SEOが不安"
  | "お問い合わせがこない"
  | "その他";

type Method = "オンライン" | "対面（長野・山梨中心）";

const CONCERNS: Concern[] = [
  "サイトが集客につながらない",
  "サイトが古く見える",
  "スマホで見づらい",
  "導線が分かりにくい",
  "写真の印象を整えたい",
  "SEOが不安",
  "お問い合わせがこない",
  "その他",
];

export default function SalonFreeDiagnosisPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [job, setJob] = useState("工務店 / 教育関係 / 美容室 / 病院 など");
  const [siteUrl, setSiteUrl] = useState("");
  const [method, setMethod] = useState<Method>("オンライン");
  const [concerns, setConcerns] = useState<Concern[]>([]);
  const [note, setNote] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  // 送信UI状態（追加）
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

  const emailOk = useMemo(() => {
    const v = email.trim();
    return v.length > 3 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  const urlOk = useMemo(() => {
    const v = siteUrl.trim();
    if (!v) return false;
    try {
      const u = new URL(v.startsWith("http") ? v : `https://${v}`);
      return Boolean(u.hostname);
    } catch {
      return false;
    }
  }, [siteUrl]);

  const requiredOk =
    Boolean(name.trim()) && emailOk && Boolean(job.trim()) && urlOk && concerns.length > 0;

  const toggleConcern = (c: Concern) => {
    setConcerns((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // まず必須チェック（今のロジックを維持）
  setTouched((t) => ({
    ...t,
    name: true,
    email: true,
    job: true,
    siteUrl: true,
    concerns: true,
  }));
  if (!requiredOk) {
    setError("必須項目を確認してください（URL形式・お悩みの選択など）");
   return;
 }

  setLoading(true);
  setSuccess(false);
  setError("");


  try {
    const endpoint = "/api/contact.php";

    // FreeDiagnosisの内容を「お問い合わせ内容」にまとめて送る
    const messageBody = [
      "【無料診断フォーム】",
      "",
      `屋号・店舗名：${brand || "-"}`,
      `業種：${job || "-"}`,
      `現在のサイトURL：${siteUrl || "-"}`,
      `診断方法：${method || "-"}`,
      `困っていること：${concerns.join(" / ") || "-"}`,
      "",
      `補足：${note || "-"}`,
      `電話番号：${phone || "-"}`,
    ].join("\n");

    const payload = {
      "お名前": name,
      Email: email,
      "件名": "ホームページ無料診断（15分）",
      "お問い合わせ内容": messageBody,
      "当サイトをしったきっかけ": "無料診断（freediagnosis）",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain; charset=UTF-8" }, // ← 今の安定方式
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await res.text();
    let data: any = {};
    try {
      data = JSON.parse(raw);
    } catch {}

    if (!res.ok || !data?.ok) {
      const detail = raw ? `\n---\n${raw.slice(0, 800)}` : "";
      throw new Error(
        `送信に失敗しました（HTTP ${res.status}）` +
          (data?.message ? `：${data.message}` : "") +
          detail
      );
    }

    setSuccess(true);
    setSubmitted(true);

    // 送信後リセット（任意）
    // setName(""); setEmail(""); ... etc
  } catch (err: any) {
    setError(err?.message || "送信に失敗しました。");
  } finally {
    setLoading(false);
  }
};

  const reset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setBrand("");
    setJob("工務店 / 教育関係 / 美容室 / 病院 など");
    setSiteUrl("");
    setMethod("オンライン");
    setConcerns([]);
    setNote("");
    setPhone("");
    setTouched({});
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="pt-28 pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-background shadow-sm overflow-hidden">
              <div className="relative px-6 py-14 md:px-10 md:py-16">
                <div className="absolute inset-0 animated-gradient" />
                <div className="absolute -inset-24 blob-layer" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
                <div className="relative z-10 text-center">
                  <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">FREE DIAGNOSIS</p>
                  <h1 className="text-2xl md:text-3xl font-light text-white leading-tight">
                    送信が完了しました
                  </h1>
                  <p className="mt-5 text-white/85 text-sm md:text-base leading-relaxed">
                    お申し込みありがとうございます。<br />
                    内容を確認して、日程候補を2〜3つお送りします。
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="rounded-2xl border border-border bg-muted/20 p-6">
                  <h2 className="text-sm tracking-[0.22em] text-muted-foreground">受付内容</h2>
                  <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <Row label="お名前" value={name || "-"} />
                    <Row label="メール" value={email || "-"} />
                    <Row label="方法" value={method} />
                    <Row label="お悩み" value={concerns.join(" / ")} />
                    <Row label="サイトURL" value={siteUrl || "-"} />
                  </dl>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm text-foreground hover:bg-muted/40 transition"
                  >
                    もう一度申し込む
                  </button>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-foreground px-5 py-3 text-sm text-background hover:opacity-90 transition"
                  >
                    トップへ戻る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO（ONE DESIGNの他ページと同系） */}
      <section className="pt-28 pb-16 ">
        <div className="container mx-auto px-6 ">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="relative px-6 py-16 md:px-12 md:py-20">
              <div className="absolute inset-0 animated-gradient" />
              <div className="absolute -inset-24 blob-layer" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
              <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
                <div className="max-w-3xl">
                  <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">
                    FREE DIAGNOSIS
                  </p>
                  <h1 className="text-2xl md:text-4xl font-light text-white leading-tight">
                    ホームページ無料診断（15分）
                  </h1>
                  <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                    「予約につながらない」「なんとなく古く見える」など、いまのサイトを一緒に見ながら
                    <br className="hidden md:block" />
                    改善ポイントを<strong className="font-medium text-white">3つ</strong>に整理してお伝えします。
                    <br />
                    その場で契約を迫ることはありません。まずは気軽にどうぞ。
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center rounded-xl border border-foreground/20 border-white/40 bg-white/10 px-6 py-3 text-sm text-background t
                       hover:opacity-90 transition"
                    >
                      無料診断を申し込む
                    </a>
                   
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/85 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                    1日1件まで｜オンライン対応
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="mx-auto w-full md:w-[80%] md:max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Left */}
            <div className="col-span-1 md:col-span-1 space-y-8">
              <Card title="こんな方におすすめ">
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  {[
                    "ホームページはあるけど、予約や問い合わせが増えない",
                    "メニューや料金の見せ方に自信がない",
                    "写真の印象を整えて、安心感を出したい",
                    "スマホで見たときの見づらさが気になる",
                    "改善したいけど、どこから手を付ければいいか分からない",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40 flex-none" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="無料診断でお伝えすること（3点）">
                <div className="mt-5 space-y-4">
                  {[
                    {
                      title: "いま一番もったいない点",
                      body: "お客様目線で見たときに、いちばん損しているポイントをはっきり言語化します。",
                    },
                    {
                      title: "すぐ直せば改善しやすい点",
                      body: "大きな改修をしなくても、すぐ効果が出やすい改善を優先でお伝えします。",
                    },
                    {
                      title: "伸ばすなら次にやるべき方向性",
                      body: "予約導線・写真・コンテンツのどこに力を入れると良いか、次の一手を整理します。",
                    },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl border border-border bg-muted/20 p-5">
                      <p className="font-medium text-foreground">{x.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  ※「診断だけでOK」です。無理な営業はしません。
                </p>
              </Card>

              <Card id="menu" title="診断で見るポイント">
                <div className="mt-5 grid grid-cols-1 md:grid-cols-1 gap-3">
                  {[
                    "ファーストビュー（何のサロンか、強みが伝わるか）",
                    "メニュー・料金の分かりやすさ",
                    "予約までの導線（迷わないか）",
                    "安心材料（実績・お客様の声・プロフィール）",
                    "スマホ表示の見やすさ",
                    "表示速度（重くないか）",
                    "写真の印象（清潔感・世界観・信頼感）",
                    "SEOの基本（タイトル・見出し・構造）",
                  ].map((t) => (
                    <div key={t} className="rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground">
                      {t}
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="診断の流れ（15分）">
                <ol className="mt-4 space-y-3">
                  {[
                    { t: "3分：状況をヒアリング", d: "いま困っていること、理想の状態を軽く教えてください。" },
                    { t: "10分：画面を見ながら改善点を共有", d: "予約導線・見せ方・写真・文章など、要点を絞ってお話します。" },
                    { t: "2分：次の一手を整理", d: "やる順番が分かる状態で終えるのがゴールです。" },
                  ].map((x) => (
                    <li key={x.t} className="rounded-2xl border border-border bg-background p-5">
                      <p className="font-medium text-foreground">{x.t}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                    </li>
                  ))}
                </ol>
              </Card>

              <Card title="ONE DESIGNについて">
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  ONE DESIGNの岸本です。長野・山梨エリアを中心に、ホームページ制作と写真撮影、SEO改善を行っています。
                  <br />
                  サロンの場合は特に、<span className="font-medium text-foreground">「安心感」「世界観」「予約導線」</span>で差がつきます。
                  きれいに作るだけでなく、予約や問い合わせにつながる形を一緒に整えます。
                </p>
              </Card>
            </div>

            {/* Right / Form */}

            
            <div className="col-span-1">
                <div className="rounded-3xl border-border bg-muted/20 ">
                   
                <div
  id="apply"
  className="md:static sticky top-6 overflow-hidden rounded-3xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] dark:bg-black/30"
>
  {/* 上部のアクセントバー */}
  <div className="h-1 w-full bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/10" />

  <div className="p-7 md:p-8">
    {/* 見出し */}
    <div className="mb-6">
      <p className="text-xs tracking-[0.22em] text-muted-foreground">FREE DIAGNOSIS</p>
      <h2 className="mt-2 text-2xl font-medium text-foreground">無料診断フォーム</h2>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        必須項目を入力して送信してください。内容を確認後、日程候補を2〜3つお送りします。
      </p>
    </div>
                 
                 

                  <form onSubmit={onSubmit} className="mt-6 space-y-5">
                    <Field
                      label="お名前（必須）"
                      error={touched.name && !name.trim() ? "入力してください" : ""}
                    >
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="例：山田 花子"
                        autoComplete="name"
                      />
                    </Field>

                    <Field
                      label="メールアドレス（必須）"
                      error={touched.email && !emailOk ? "メールアドレスの形式で入力してください" : ""}
                    >
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="example@domain.com"
                        autoComplete="email"
                        inputMode="email"
                      />
                    </Field>

                    <Field label="屋号・サロン名（任意）">
                      <input
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="例：Salon Lino"
                      />
                    </Field>

                    <Field label="業種（必須）" error={touched.job && !job.trim() ? "入力してください" : ""}>
                      <input
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, job: true }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      />
                    </Field>

                    <Field
                      label="現在のサイトURL（必須）"
                      error={touched.siteUrl && !urlOk ? "URLを入力してください（https://〜 なしでもOK）" : ""}
                    >
                      <input
                        value={siteUrl}
                        onChange={(e) => setSiteUrl(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, siteUrl: true }))}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="例：https://example.com、ない場合は「なし」"
                        inputMode="url"
                      />
                    </Field>

                    <Field label="診断方法（任意）">
                     <div className="flex flex-wrap gap-2">
  {(["オンライン", "対面（長野・山梨中心）"] as Method[]).map((m) => {
    const active = method === m;
    return (
      <button
        key={m}
        type="button"
        onClick={() => setMethod(m)}
        className={[
          "inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-medium transition ring-1",
          active
            ? "bg-foreground text-background ring-foreground/20"
            : "bg-background text-foreground ring-border hover:bg-muted/40",
        ].join(" ")}
      >
        {m}
      </button>
    );
  })}

</div>
                    </Field>

                    <Field
                      label="困っていること（必須・複数選択OK）"
                      error={touched.concerns && concerns.length === 0 ? "1つ以上選んでください" : ""}
                    >
                      <div className="mt-2 space-y-2">
                        {CONCERNS.map((c) => (
                          <label
                            key={c}
                            className="flex items-center gap-3 rounded-2xl border border-border bg-muted/20 px-4 py-3 text-sm text-foreground"
                          >
                            <input
                              type="checkbox"
                              checked={concerns.includes(c)}
                              onChange={() => toggleConcern(c)}
                              onBlur={() => setTouched((t) => ({ ...t, concerns: true }))}
                              className="h-4 w-4 rounded border-border accent-foreground"
                            />
                            <span className="text-muted-foreground">{c}</span>
                          </label>
                        ))}
                      </div>
                    </Field>

                    <Field label="補足（任意）">
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full min-h-[96px] rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="例：予約ボタンはあるが、クリックされていない気がする／写真を撮り直すべきか迷っている など"
                      />
                    </Field>

                    <Field label="電話番号（任意・当日連絡用）">
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                        placeholder="例：090-1234-5678"
                        inputMode="tel"
                        autoComplete="tel"
                      />
                    </Field>

                    <button
  type="submit"
  disabled={loading}
  className={[
    "   rounded-2xl px-5 py-3 text-sm font-semibold transition shadow-sm",
    requiredOk ? "bg-foreground text-background hover:opacity-90" : "bg-slate-200 text-slate-500",
  ].join(" ")}
>
  {loading ? "送信中…" : "無料診断を申し込む"}
</button>

{error && (
  <p className="text-xs text-red-600 leading-relaxed">
    {error}
  </p>
)}

                   

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ※無理な営業はしません。まずは改善点だけ知りたい、でも大丈夫です。
                    </p>
                  </form>

                  <div className="mt-8 flex gap-3">
                    <button
                      type="button"
                      onClick={reset}
                      className="rounded-xl px-3 py-2 text-xs md:text-sm font-semibold ring-1 ring-gray-300 transition"
                    >
                      入力をリセット
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field(props: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm text-muted-foreground">{props.label}</label>
        {props.error ? (
          <span className="text-xs font-medium text-foreground">{props.error}</span>
        ) : null}
      </div>
      <div className="mt-2">{props.children}</div>
    </div>
  );
}

function Card(props: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section
      id={props.id}
      className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8"
    >
      <h2 className="text-xl font-medium text-foreground">{props.title}</h2>
      {props.children}
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <dt className="text-muted-foreground">{label}：</dt>
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}