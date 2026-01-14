import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO（他ページとトーン合わせ） */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="relative px-6 py-16 md:px-12 md:py-20">
              <div className="absolute inset-0 animated-gradient" />
              <div className="absolute -inset-24 blob-layer" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
              <div className="relative z-10 text-center">
                <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">CONTACT</p>
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
            {/* 左：案内文（2枚目の内容を整理して1ブロックに） */}
            <div className="space-y-8">
             <div className="space-y-4 text-muted-foreground leading-relaxed">
  <p className="text-base">
    次のようなご相談に対応しています。
  </p>

  <ul className="space-y-2 text-sm md:text-base">
    <li className="flex gap-2">
      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40" />
      ホームページ制作を検討している（新規/リニューアル）
    </li>
    <li className="flex gap-2">
      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40" />
      WEBを使って集客したい
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

            {/* 右：フォーム（mail.php に送る） */}
            <div className="rounded-2xl border border-border p-6 md:p-8 bg-background shadow-sm">
              <h2 className="text-lg font-medium text-architectural mb-6">
                フォーム
              </h2>

              {/* 重要：mail.php を踏襲（同一ドメイン公開なら action="/mail.php" でOK） */}
              {/* ローカル開発中に送信テストしたいなら action を本番URLにしてください */}
           <form
  action="/mail.php"
  method="post"
  className="space-y-5"
>
  {/* お名前 */}
  <div>
    <label className="block text-sm text-muted-foreground mb-2">
      お名前（必須）
    </label>
    <input
      name="お名前"
      required
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
      placeholder="山田 太郎"
    />
  </div>

  {/* メールアドレス */}
  <div>
    <label className="block text-sm text-muted-foreground mb-2">
      メールアドレス（必須）
    </label>
    <input
      type="email"
      name="Email"
      required
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
      placeholder="example@one-design.xyz"
    />
  </div>

  {/* 件名 */}
  <div>
    <label className="block text-sm text-muted-foreground mb-2">
      件名
    </label>
    <input
      name="件名"
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
      placeholder="ホームページ制作について"
    />
  </div>

  {/* お問い合わせ内容 */}
  <div>
    <label className="block text-sm text-muted-foreground mb-2">
      お問い合わせ内容（必須）
    </label>
    <textarea
      name="お問い合わせ内容"
      required
      rows={7}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
      placeholder="ご相談内容をご記入ください。&#10;（例：新規サイト制作、リニューアル、SEO相談など）"
    />
  </div>

  {/* サイトを知ったきっかけ */}
  <fieldset className="pt-2">
    <legend className="block text-sm text-muted-foreground mb-2">
      サイトを知ったきっかけ
    </legend>
    <div className="grid grid-cols-2 gap-3 text-sm">
      <label className="inline-flex items-center gap-2 text-muted-foreground">
        <input
          type="radio"
          name="当サイトをしったきっかけ[]"
          value="友人・知人"
          className="accent-foreground"
        />
        友人・知人
      </label>
      <label className="inline-flex items-center gap-2 text-muted-foreground">
        <input
          type="radio"
          name="当サイトをしったきっかけ[]"
          value="検索エンジン"
          className="accent-foreground"
        />
        検索
      </label>
      <label className="inline-flex items-center gap-2 text-muted-foreground">
        <input
          type="radio"
          name="当サイトをしったきっかけ[]"
          value="SNS"
          className="accent-foreground"
        />
        SNS
      </label>
      <label className="inline-flex items-center gap-2 text-muted-foreground">
        <input
          type="radio"
          name="当サイトをしったきっかけ[]"
          value="その他"
          className="accent-foreground"
        />
        その他
      </label>
    </div>
  </fieldset>

  {/* 送信ボタン */}
  <div className="pt-4">
    <button
      type="submit"
      className="w-full rounded-xl border border-foreground/20 bg-foreground text-background py-3 text-sm tracking-wide hover:opacity-90 transition"
    >
      送信する
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