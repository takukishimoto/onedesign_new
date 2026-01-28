  import { useState } from "react";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";

  const Contact = () => {
    // フォーム状態
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [source, setSource] = useState("");

    // 送信UI状態
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const closeOverlay = () => {
      setSuccess(false);
      setError("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError("");

  try {
    const endpoint = "/api/contact.php";

    const payload = {
      "お名前": name,
      Email: email,
      "件名": subject,
      "お問い合わせ内容": message,
      "当サイトをしったきっかけ": source,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const res = await fetch(endpoint, {
      method: "POST",
      // ★ preflight回避
      headers: { "Content-Type": "text/plain; charset=UTF-8" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await res.text();
    let data: any = {};
    try {
      data = JSON.parse(raw);
    } catch {
      data = {};
    }

    if (!res.ok || !data?.ok) {
      const detail = raw ? `\n---\n${raw.slice(0, 800)}` : "";
      throw new Error(
        `送信に失敗しました（HTTP ${res.status}）` +
          (data?.message ? `：${data.message}` : "") +
          detail
      );
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSource("");
  } catch (err: any) {
    setError(err?.message || "送信に失敗しました。");
  } finally {
    setLoading(false);
  }
};

    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* ===== 成功 / エラー Overlay（画面中央表示） ===== */}
        {(success || error) && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-6"
            role="dialog"
            aria-modal="true"
            onClick={closeOverlay}
          >
            <div
              className="w-full max-w-lg rounded-2xl border border-border bg-background shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-10 text-center">
                {success ? (
                  <>
                    <p className="text-xs tracking-[0.22em] text-muted-foreground mb-3">
                      CONTACT
                    </p>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">
                      送信が完了しました
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      お問い合わせありがとうございます。<br />
                      確認次第、1〜2営業日以内を目安にご連絡します。
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs tracking-[0.22em] text-muted-foreground mb-3">
                      ERROR
                    </p>
                    <h2 className="text-xl md:text-2xl font-medium text-foreground">
                      送信に失敗しました
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {error}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      時間をおいて再送信してください。
                    </p>
                  </>
                )}

                <div className="mt-8 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={closeOverlay}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm text-foreground hover:bg-muted/40 transition"
                  >
                    閉じる
                  </button>

                  {success && (
                    <a
                      href="/"
                      className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-foreground px-5 py-3 text-sm text-background hover:opacity-90 transition"
                    >
                      トップへ戻る
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HERO（他ページとトーン合わせ） */}
        <section className="pt-28 pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl overflow-hidden border border-border">
              <div className="relative px-6 py-16 md:px-12 md:py-20">
                <div className="absolute inset-0 animated-gradient" />
                <div className="absolute -inset-24 blob-layer" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
                <div className="relative z-10 text-center">
                  <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">
                    CONTACT
                  </p>
                  <h1 className="text-2xl md:text-3xl font-light text-white leading-tight">
                    お問い合わせ
                  </h1>
                  <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    「何から相談していいかわからない」「まずは話だけ聞いてみたい」
                    <br className="md:hidden" />
                    そんな段階でも大丈夫です。お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* 左：案内文 */}
              <div className="space-y-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-base">次のようなご相談に対応しています。</p>

                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40" />
                      ホームページ制作を検討している（新規/リニューアル）
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40" />
                      WEBを使って集客したい（お問い合わせを増やしたい）
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40" />
                      ロゴやブランドの整理から相談したい
                    </li>
                  </ul>

                  <p className="text-sm">
                    ※営業・ご提案を目的としたお問い合わせはご遠慮ください。
                  </p>
                </div>

                <div className="rounded-2xl border border-border p-6 bg-muted/20">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    返信は原則「1〜2営業日」以内を目安にしています。<br />
                    お急ぎの場合は、本文に「希望の連絡手段・時間帯」を添えてください。
                  </p>
                </div>
              </div>

              {/* 右：フォーム */}
              <div className="rounded-2xl border border-border p-6 md:p-8 bg-background shadow-sm">
                <h2 className="text-lg font-medium text-architectural mb-6">
                  フォーム
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      お名前（必須）
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      メールアドレス（必須）
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="example@one-design.xyz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      件名
                    </label>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="ホームページ制作について"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      お問い合わせ内容（必須）
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={7}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder={
                        "ご相談内容をご記入ください。\n（例：新規サイト制作、リニューアル、SEO相談など）"
                      }
                    />
                  </div>

                  <fieldset className="pt-2">
                    <legend className="block text-sm text-muted-foreground mb-2">
                      サイトを知ったきっかけ
                    </legend>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {["友人・知人", "検索エンジン", "SNS", "その他"].map((v) => (
                        <label
                          key={v}
                          className="inline-flex items-center gap-2 text-muted-foreground"
                        >
                          <input
                            type="radio"
                            name="source"
                            value={v}
                            checked={source === v}
                            onChange={() => setSource(v)}
                            className="accent-foreground"
                          />
                          {v}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl border border-foreground/20 bg-foreground text-background py-3 text-sm tracking-wide hover:opacity-90 transition disabled:opacity-60"
                    >
                      {loading ? "送信中…" : "送信する"}
                    </button>

                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      送信内容を確認のうえ、1〜2営業日以内にご連絡いたします。<br />
                      個人情報はお問い合わせ対応のみに使用します。
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };

  export default Contact;