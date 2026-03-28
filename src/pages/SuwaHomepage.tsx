import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

export default function SuwaSoloLP() {
const areas = [
  "諏訪市",
  "茅野市",
  "原村",
  "富士見町",
  "岡谷市",
  "下諏訪町",
  "北杜市",
];

const pains = [
  "諏訪市でホームページ制作を検討している",
  "開業に合わせてホームページを作りたい",
  "ホームページはあるが問い合わせが増えない",
  "「諏訪市 〇〇」で検索しても出てこない",
  "古いホームページをリニューアルしたい",
  "スマホで見づらいサイトを改善したい",
];

  const points = [
    {
      title: "中小企業・個人事業主の「独自の強み」を言語化・視覚化",
      body: "ヒアリングを通じて、当たり前すぎて気づかない「選ばれる理由」を抽出。長年培ってきた技術・地域とのつながり・こだわりをプロの視点でコンテンツへ落とし込み、訪問者に伝わる言葉と構成に整えます。",
    },
    {
      title: "諏訪市周辺なら対面での打ち合わせ・取材が可能",
      body: "諏訪市・茅野市・原村・富士見町・岡谷市・下諏訪町・北杜市へフットワーク軽くお伺いします。現場の空気感や職人のこだわりを直接感じながら制作することで、よそのテンプレートとは違う、温度感のあるホームページを実現します。",
    },
    {
      title: "ホームページデザイン＋集客（SEO）まで設計",
      body: "見た目の完成度だけでなく、「諏訪市 〇〇」「茅野市 〇〇」といった地域キーワードで検索上位を狙えるSEO設計と、訪問者を問い合わせへ誘導する導線設計を最初から組み込みます。",
    },
    {
      title: "集客と採用、両面から攻めるサイト設計",
      body: "新規顧客獲得のための地域SEOはもちろん、求職者が「ここで働きたい」と感じるストーリー構築まで対応。人手不足が課題の諏訪地域の事業者にとって、採用強化は集客と同じくらい重要なテーマです。",
    },
    {
      title: "写真・文章・保守まで一貫した伴走支援",
      body: "写真撮影・ライティング代行・公開後の運用サポートまで一括して対応できます。「Web担当者がいない」「更新する時間がない」という諏訪地域の中小企業・個人事業主の現場事情を踏まえ、二人三脚でサイトを育てていけます。",
    },
    {
      title: "予算に合わせて「必要最小限」から提案できます",
      body: "最初から全部やる必要はありません。今の状況・優先課題・予算をヒアリングしたうえで、「まずここだけ整える」という最小構成から提案します。補助金（小規模事業者持続化補助金など）の活用についてもご相談ください。",
    },
  ];

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
      q: "諏訪市でも対面打ち合わせできますか？",
      a: "諏訪市・茅野市・原村・富士見町・岡谷市・下諏訪町・北杜市など諏訪地域で対面対応しています。現地取材（写真撮影・ヒアリング）もお伺いして行うことが可能です。オンライン打ち合わせ（ZoomやGoogle Meet）にも対応しています。",
    },
    {
      q: "まずは診断・相談だけでも大丈夫？",
      a: "大丈夫です。無料診断（15分）は「現状を整理するだけ」でも構いません。その後の制作をお断りいただいても問題なく、営業もしません。「何が課題かわからない」という段階のご相談が最も多いです。",
    },
    {
      q: "ホームページ制作費が不安です。予算が限られていても相談できますか？",
      a: "相談できます。状況を見たうえで「必要最小限で整える案」も含めて、無理のない範囲で提案します。また、小規模事業者持続化補助金などを活用してホームページ制作費用を補助できる場合もありますので、ご希望の方はお気軽にお申し付けください（内容は診断・相談後に共有します）。",
    },
    {
      q: "WordPressで作ってもらえますか？自分で更新できるようにしたいです。",
      a: "WordPressでの制作に対応しています。公開後に自分で更新・追記できるよう、操作レクチャーも行います。更新が難しい場合は、代わりに更新作業をお引き受けする運用サポートプランもご用意しています。",
    },
    {
      q: "SEO対策もやってもらえますか？「諏訪市 〇〇」で上位に出したい。",
      a: "対応しています。「諏訪市 〇〇」「茅野市 〇〇」など地域キーワードでの検索上位を狙えるよう、ページ構成・テキスト・タイトル・メタ情報・内部リンクまで設計します。ただし、SEOは即効性より継続的な取り組みが重要なため、現状と目標を踏まえた現実的なプランをご提案します。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://one-design.xyz/#business",
        "name": "ONE DESIGN",
        "description": "諏訪市・茅野市など諏訪地域の中小企業・個人事業主向けに、集客につながるホームページ制作・リニューアルを提供するWebデザイン事務所。SEO対策・スマホ対応・WordPress対応。",
        "url": "https://one-design.xyz/suwa-homepage",
        "telephone": "",
        "priceRange": "¥¥",
        "image": "https://one-design.xyz/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "長野県",
          "addressLocality": "諏訪市",
          "addressCountry": "JP"
        },
        "areaServed": [
          { "@type": "City", "name": "諏訪市" },
          { "@type": "City", "name": "茅野市" },
          { "@type": "City", "name": "岡谷市" },
          { "@type": "Town", "name": "下諏訪町" },
          { "@type": "Town", "name": "富士見町" },
          { "@type": "Village", "name": "原村" },
          { "@type": "City", "name": "北杜市" }
        ],
        "knowsAbout": [
          "ホームページ制作",
          "Webデザイン",
          "SEO対策",
          "WordPress制作",
          "ホームページリニューアル",
          "中小企業向けWeb制作",
          "個人事業主向けWeb制作"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ホームページ制作サービス",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ホームページ新規制作",
                "description": "諏訪地域の中小企業・個人事業主向けに、集客・採用につながるホームページを一から制作します。"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ホームページリニューアル",
                "description": "古いデザイン・スマホ未対応・問い合わせが来ないなど、既存サイトの課題を解決するリニューアルを行います。"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "無料Webサイト診断",
                "description": "現状のホームページを15分で診断し、改善ポイントを3つに整理します。診断のみでの終了も可能です。"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "諏訪市でも対面打ち合わせできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "諏訪市・茅野市・原村・富士見町・岡谷市・下諏訪町・北杜市など諏訪地域で対面対応しています。現地取材（写真撮影・ヒアリング）もお伺いして行うことが可能です。オンライン打ち合わせ（ZoomやGoogle Meet）にも対応しています。"
            }
          },
          {
            "@type": "Question",
            "name": "まずは診断・相談だけでも大丈夫？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大丈夫です。無料診断（15分）は「現状を整理するだけ」でも構いません。その後の制作をお断りいただいても問題なく、営業もしません。「何が課題かわからない」という段階のご相談が最も多いです。"
            }
          },
          {
            "@type": "Question",
            "name": "ホームページ制作費が不安です。予算が限られていても相談できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "相談できます。状況を見たうえで「必要最小限で整える案」も含めて、無理のない範囲で提案します。小規模事業者持続化補助金などを活用してホームページ制作費用を補助できる場合もありますので、ご希望の方はお気軽にお申し付けください。"
            }
          },
          {
            "@type": "Question",
            "name": "WordPressで作ってもらえますか？自分で更新できるようにしたいです。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WordPressでの制作に対応しています。公開後に自分で更新・追記できるよう、操作レクチャーも行います。更新が難しい場合は、代わりに更新作業をお引き受けする運用サポートプランもご用意しています。"
            }
          },
          {
            "@type": "Question",
            "name": "SEO対策もやってもらえますか？「諏訪市 〇〇」で上位に出したい。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "対応しています。「諏訪市 〇〇」「茅野市 〇〇」など地域キーワードでの検索上位を狙えるよう、ページ構成・テキスト・タイトル・メタ情報・内部リンクまで設計します。SEOは継続的な取り組みが重要なため、現状と目標を踏まえた現実的なプランをご提案します。"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://one-design.xyz/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "諏訪市のホームページ制作",
            "item": "https://one-design.xyz/suwa-homepage"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="諏訪市のホームページ制作｜中小企業・個人事業主向け｜ONE DESIGN"
        description="諏訪市の中小企業・個人事業主向けに、集客につながるホームページ制作を行っています。SEO対策・スマホ対応・WordPress対応。諏訪市・茅野市・原村・富士見町など諏訪地域対応。"
      />
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                  SUWA / WEB DESIGN
                </p>
                <h1 className="text-2xl md:text-4xl font-light text-white leading-tight">
                  諏訪市のビジネスを加速させる
                  <span className="block mt-2 text-white/90 text-2xl md:text-3xl">
                    ホームページ制作・リニューアル
                  </span>
                </h1>
                <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                  「事業に見合うサイトがほしい」「求人や集客の反応を良くしたい」「補助金を活用したい」<br className="hidden md:block" />
                  諏訪市の商圏を理解したクリエイターが、中小企業から個人事業主まで幅広くサポート。<br />
                  まずは無料診断（15分）で、現状の課題整理と「次の一手」を明確にしませんか。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
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

      {/* 導入説明文 */}
      <section className="pb-4">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-10">
            <h2 className="text-xl font-medium text-foreground">
              諏訪市でホームページ制作をお考えの方へ
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                諏訪市・茅野市を中心とする諏訪地域は、精密機械・光学・観光・農業・飲食など多様な産業が集積するエリアです。地域内での競合が少ない業種でも、「検索で見つけてもらえない」「問い合わせが来ない」という悩みを抱える事業者が多く、その多くはホームページの内容や設計が原因です。
              </p>
              <p>
                ONE DESIGNは、諏訪地域の商圏・競合・顧客層を理解したうえで、中小企業や個人事業主が「地域で選ばれる」ためのホームページ制作・リニューアルを行っています。単にデザインをきれいにするだけでなく、「諏訪市 〇〇」「茅野市 〇〇」といった地域キーワードで検索上位を狙えるSEO設計、スマートフォン対応、問い合わせにつながる導線設計まで、一貫して対応します。
              </p>
              <p>
                岡谷市・下諏訪町・原村・富士見町・北杜市など諏訪地域全域に対面でお伺いできます。「何から始めればいいかわからない」という段階からでも、まずは無料診断（15分）でお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Left */}
            <div className="col-span-1 md:col-span-2 space-y-10">

              <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">諏訪市でこのような課題をお持ちの企業・個人様へ</h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {pains.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[0.6em] h-1 w-1 rounded-full bg-foreground/40 flex-none" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
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
                    <a
                      href="/freediagnosis"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-6 py-3 text-sm font-medium
                        bg-foreground text-background
                        hover:opacity-90 transition shadow-sm
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
                </div>
              </section>

              <section id="why" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
                <h2 className="text-xl font-medium text-foreground">諏訪市の中小企業・個人事業主に選ばれる理由</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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
            {/* Left ここまで */}

            {/* Right (Sticky CTA) */}
            <div className="col-span-1">
              <div className="static md:sticky md:top-6 rounded-3xl border border-border bg-background shadow-sm">
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
                        hover:opacity-90 transition shadow-sm
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
                    <p className="text-sm text-foreground font-medium">対応エリア</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      諏訪地域全域対応（諏訪市・岡谷市・下諏訪町・茅野市・原村・富士見町・北杜市）／オンライン対応
                    </p>
                  </div>
                  <div className="mt-4 rounded-2xl border border-border bg-muted/20 p-4">
                    <p className="text-sm text-foreground font-medium">補足</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      ホームページ制作は予算に合わせた最小構成の提案も可能です（内容は相談・無料診断後に共有します）。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right ここまで */}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}