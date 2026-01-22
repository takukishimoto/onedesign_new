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

  // UI状態
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("https://one-design.xyz/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "お名前": name,
          Email: email,
          "件名": subject,
          "お問い合わせ内容": message,
          "当サイトをしったきっかけ": source,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.message || "送信に失敗しました");
      }

      // 成功
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSource("");
    } catch (err: any) {
      setError(
        err?.message ||
          "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="relative px-6 py-16 md:px-12 md:py-20">
              <div className="absolute inset-0 animated-gradient" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 text-center">
                <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">
                  CONTACT
                </p>
                <h1 className="text-2xl md:text-3xl font-light text-white">
                  お問い合わせ
                </h1>
                <p className="mt-6 text-white/85 text-sm md:text-base max-w-2xl mx-auto">
                  「何から相談していいかわからない」
                  <br className="md:hidden" />
                  「まずは話だけ聞いてみたい」
                  <br />
                  そんな段階でも大丈夫です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* 左 */}
            <div className="space-y-8">
              <div className="space-y-4 text-muted-foreground">
                <p>次のようなご相談に対応しています。</p>
                <ul className="space-y-2">
                  <li>・ホームページ制作（新規 / リニューアル）</li>
                  <li>・WEB集客、SEOの相談</li>
                  <li>・ロゴ・ブランド設計</li>
                </ul>
                <p className="text-sm">
                  ※営業・売り込み目的のご連絡はご遠慮ください。
                </p>
              </div>
            </div>

            {/* 右：フォーム */}
            <div className="rounded-2xl border border-border p-6 md:p-8 bg-background">
              <h2 className="text-lg mb-6">フォーム</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="お名前"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="メールアドレス"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="件名"
                  className="w-full rounded-xl border px-4 py-3"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="お問い合わせ内容"
                  className="w-full rounded-xl border px-4 py-3"
                />

                {/* きっかけ */}
                <div className="space-y-2 text-sm">
                  {["友人・知人", "検索エンジン", "SNS", "その他"].map((v) => (
                    <label key={v} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        checked={source === v}
                        onChange={() => setSource(v)}
                      />
                      {v}
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-foreground text-background py-3 disabled:opacity-60"
                >
                  {loading ? "送信中…" : "送信する"}
                </button>

                {/* メッセージ */}
                {error && (
                  <div
                    className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm md:text-base text-red-600"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                {success && (
                <div
                  className="mt-4 rounded-xl border border-foreground/20 bg-foreground/5 px-4 py-3 text-sm md:text-base text-foreground"
                  role="status"
                  aria-live="polite"
                >
                  <div className="font-medium">送信が完了しました。</div>
                  <div className="mt-1 text-muted-foreground">
                    確認次第ご連絡します（目安：1〜2営業日）
                  </div>
                </div>
              )}
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