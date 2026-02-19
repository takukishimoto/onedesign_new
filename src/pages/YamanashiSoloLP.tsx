import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function YamanashiSoloLP() {
  const areas = [
    "山梨県全域",
    "北杜市",
    "韮崎市",
    "甲府市",
    "南アルプス市",
    "笛吹市",
    "中央市",
    "甲斐市",
    "昭和町",
  ];

  // 「リニューアル」だけじゃなく「新規」も入るように寄せる
  const pains = [
    "ホームページはあるけど、問い合わせ・予約につながらない",
  "開業したばかりで、まず何を載せればいいか分からない",
  "SNSだけでいいのか迷っている（でも不安がある）",
  "紹介だけに頼らず、安定して問い合わせがほしい",
  "スマホで見ると読みづらい／古く見える",
  "写真や文章の印象を整えて、安心感を出したい",
  ];

  const points = [
     {
    title: "何を載せるべきか、から整理できます",
    body: "開業直後にありがちな「結局なにを書けばいい？」を一緒に整理。最低限必要な情報を、分かりやすく形にします。",
  },
  {
    title: "“選ばれる理由”を言葉にします",
    body: "強み・ターゲット・導線を整理して「あなたを選ぶ理由」が伝わる構成に整えます。",
  },
  {
    title: "デザイン＋集客（SEO）まで設計",
    body: "見た目だけでなく、検索や導線から問い合わせにつながる形を重視します。",
  },
  {
    title: "スマホで見やすいサイトに整えます",
    body: "スマホで読みにくい・古く見える問題を改善。見やすさと信頼感を優先して整えます。",
  },
  {
    title: "写真・文章の印象までまとめて整えられます",
    body: "必要なら撮影や文章整理も対応。世界観と安心感を、サイト全体で統一します。",
  },
  {
    title: "予算に合わせて“必要最小限”から提案できます",
    body: "全部やる前提ではなく、今の状況と予算に合わせて「最小で効果が出る形」を提案します。",
  },
  ];

  // 「見せないプラン」前提：無料診断→提案→必要なら制作
  const flow = [
    {
      t: "無料診断（15分）",
      d: "いまの状況を伺いながら、改善ポイントを3つに整理します（画面を見ながらOK）。",
    },
    {
      t: "優先順位と次の一手を提案",
      d: "「どこから手を付けるべきか」を明確にします（診断のみで終了もOK）。",
    },
    {
      t: "必要な範囲だけ制作・改善",
      d: "新規／リニューアルどちらも、状況と予算に合わせて必要最小限から組めます。",
    },
  ];

  const faqs = [
    {
      q: "山梨県でも対面できますか？",
      a: "対面も可能です（北杜市・韮崎市・甲斐市周辺は比較的動きやすいです）。オンラインも対応しています。",
    },
    {
      q: "まずは診断・相談だけでも大丈夫？",
      a: "大丈夫です。診断は「診断のみ」ですし相談も無料です。営業はしないのでご安心ください。",
    },
    {
      q: "費用感が不安です。予算が限られていても相談できますか？",
      a: "相談できます。状況を見たうえで「必要最小限で整える案」も含めて、無理のない範囲で提案します（内容は相談・無料診断後に共有します）。",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="個人事業主のホームページ制作｜山梨県対応｜ONE DESIGN"
        description="山梨県の個人事業主・店舗/サービス向けに、ホームページ制作・改善、SEO設計、写真まで一貫対応。無料診断（15分）で現状を整理し、改善ポイントを3つにまとめます（診断のみ／営業なし）。"
      />

      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="relative px-6 py-14 md:px-12 md:py-16">
              <div className="absolute inset-0 animated-gradient" />
              <div className="absolute -inset-24 blob-layer" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />

              <div className="relative z-10 mx-auto max-w-4xl">
                <p className="text-minimal tracking-[0.22em] text-white/80 mb-4">
                  YAMANASHI / SOLO BUSINESS
                </p>

                <h1 className="text-3xl md:text-5xl font-light text-white leading-tight">
                  個人事業主のホームページ制作
                  <span className="block mt-2 text-white/90 text-2xl md:text-3xl">
                    山梨県対応
                  </span>
                </h1>

                {/* ★ここが肝：価格は出さず、見せないプランの“安心”だけ出す */}
                <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                  「問い合わせが増えない」「古く見える」「スマホで読みにくい」など、<br className="hidden md:block" />
  いまの状況を一緒に整理しませんか。<br />
  これから作る方も「Instagramだけでいいのか迷っている」「何を載せれば信頼されるのか分からない」から相談できます。<br />
  無料診断（15分）で、改善ポイントを3つにまとめてお伝えします。
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* 主ボタン */}
                  <a
                    href="/freediagnosis"
                    className="
                      inline-flex items-center justify-center
                      rounded-xl px-6 py-3 text-sm font-medium
                      bg-white text-black
                      hover:bg-white/90 transition
                      shadow-[0_18px_60px_rgba(0,0,0,0.25)]
                    "
                  >
                    無料診断（15分）を申し込む →
                  </a>

                  {/* サブボタン */}
                  <a
                    href="#why"
                    className="
                      inline-flex items-center justify-center
                      rounded-xl px-6 py-3 text-sm font-medium
                      border border-white/40 bg-white/10 text-white
                      hover:bg-white/15 transition
                      backdrop-blur
                    "
                  >
                    できることを見る
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-white/80">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-xs text-white/75">
                  ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 md:grid-cols-1 gap-10">
            {/* Left */}
            <div className="col-span-2 md:col-span-1 space-y-10">
              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">こんな方に最適です</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {pains.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40 flex-none" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* ここに導線（見せないプラン運用で安心を出す） */}
                <div className="mt-7 rounded-2xl border border-border bg-muted/20 p-5">
                  <p className="text-sm text-foreground font-medium">
                    無料診断（15分）で、いまのホームページを整理しませんか
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    画面を見ながら改善ポイントを3つに整理します。<br />
                    診断のみで完結OK。営業はしないのでご安心ください。<br />
                    予算に合わせた最小構成の提案も可能です（診断後に共有）。
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {/* 主：無料診断 */}
                    <a
                      href="/freediagnosis"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        bg-foreground text-background
                        hover:opacity-90 transition
                        shadow-sm
                      "
                    >
                      無料診断（15分）を申し込む →
                    </a>

                    {/* サブ：相談 */}
                    <a
                      href="/contact"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        border border-border bg-background
                        hover:bg-muted/40 transition
                      "
                    >
                      相談する
                    </a>
                  </div>
                </div>
              </section>

              <section id="why" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">ONE DESIGNができること</h2>
                <div className="mt-6 grid grid-cols-3 md:grid-cols-1 gap-4">
                  {points.map((x) => (
                    <div key={x.title} className="rounded-2xl border border-border bg-muted/20 p-5">
                      <p className="font-medium text-foreground">{x.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">無料診断の流れ（15分）</h2>
                <ol className="mt-6 space-y-3">
                  {flow.map((x) => (
                    <li key={x.t} className="rounded-2xl border border-border bg-background p-5">
                      <p className="font-medium text-foreground">{x.t}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">よくある質問</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map((x) => (
                    <details key={x.q} className="rounded-2xl border border-border bg-muted/20 p-5">
                      <summary className="cursor-pointer text-foreground font-medium">
                        {x.q}
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {x.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Right (Sticky CTA) */}
            <div className="col-span-1">
              <div className="md:static sticky top-6 rounded-3xl border border-border bg-background shadow-sm">
                <div className="p-6">
                  <p className="text-minimal tracking-[0.22em] text-muted-foreground">FREE DIAGNOSIS</p>
                  <h2 className="mt-2 text-2xl font-medium text-foreground">無料診断（15分）</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    いまの状況を整理して、改善ポイントを3つにまとめます。<br />
                    診断のみでOKです。
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="/freediagnosis"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        bg-foreground text-background
                        hover:opacity-90 transition
                        shadow-sm
                      "
                    >
                      無料診断（15分）を申し込む →
                    </a>
                    <a
                      href="/contact"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        border border-border bg-background
                        hover:bg-muted/40 transition
                      "
                    >
                      相談する
                    </a>
                  </div>

                  <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                    ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
                  </p>

                  <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-4">
                    <p className="text-sm text-foreground font-medium">対応</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      山梨県（北杜市・韮崎市・甲府市・南アルプス市・笛吹市・中央市・甲斐市・昭和町）／オンライン対応
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-border bg-muted/20 p-4">
                    <p className="text-sm text-foreground font-medium">補足</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      予算に合わせた最小構成の提案も可能です（内容は相談・無料診断後に共有します）。
                    </p>
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