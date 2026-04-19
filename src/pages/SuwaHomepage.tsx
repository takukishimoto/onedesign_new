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

  const process = [
    {
      step: "01",
      title: "無料診断・ヒアリング",
      body: "現状のサイト・事業課題・ターゲット・予算をお聞きします。15分の無料診断から始められます。",
    },
    {
      step: "02",
      title: "提案・お見積もり",
      body: "ヒアリング内容をもとに、必要な構成とコストを整理。複数のプラン案でご提案します。",
    },
    {
      step: "03",
      title: "設計・ライティング",
      body: "ページ構成・SEOキーワード・文章を設計。テキストはヒアリングをもとに代行します（希望の場合）。",
    },
    {
      step: "04",
      title: "デザイン・制作",
      body: "デザインカンプを確認いただきながら制作を進めます。修正は2回まで無料で対応。",
    },
    {
      step: "05",
      title: "公開・SEO設定",
      body: "ドメイン・サーバー設定から公開まで対応。Googleへの送信・構造化データの設定も行います。",
    },
    {
      step: "06",
      title: "保守・運用サポート",
      body: "公開後の更新代行・アクセス解析・改善提案まで伴走。必要な範囲でサポートします。",
    },
  ];

  const works = [
    {
      category: "工務店・建築",
      tag: "ARCHITECTURE",
      items: [
        {
          name: "岡谷市の注文住宅工務店（諏訪市・下諏訪町・茅野市対応）",
          desc: "「こころが還る暮らし」をコンセプトに、自然素材・ウェルビーイング住宅の世界観をサイト全体で表現。施工事例・暮らしの声を充実させ、地域キーワードでの集客につなげた。",
        },
        {
          name: "自然素材の家づくり工務店",
          desc: "採用・集客の両立を目的としたサイト設計。コンテンツを充実させSEO対策を実施することで、問い合わせ数の増加につながった。",
        },
      ],
    },
    {
      category: "農業・食",
      tag: "AGRICULTURE",
      items: [
        {
          name: "いちご農家の直売サイト",
          desc: "いちごの品種・栽培方法・想いを伝えるLP。収穫体験の問い合わせ導線もあわせて設計。駒ヶ根市。",
        },
        {
          name: "農産物直売所の新規サイト制作",
          desc: "スマホ対応と地域SEOを意識した新規サイト制作。地域キーワードでの検索流入を改善し、来店数アップに貢献。",
        },
      ],
    },
    {
      category: "解体・不用品回収",
      tag: "DEMOLITION",
      items: [
        {
          name: "解体業者のコーポレートサイト",
          desc: "問い合わせ獲得に特化した構成。施工実績・対応エリア・料金の明示で信頼性を向上。",
        },
        {
          name: "不用品回収業者のLP",
          desc: "即日対応・料金の透明性を前面に出したLP設計。スマホからの問い合わせ率が改善。",
        },
      ],
    },
    {
      category: "不動産・その他",
      tag: "OTHERS",
      items: [
        {
          name: "地域密着の不動産会社",
          desc: "物件情報とブランドイメージを両立した構成。地域密着感を前面に出したデザインで信頼感を構築。",
        },
        {
          name: "その他中小企業・個人事業主",
          desc: "農業・医療・士業など幅広い業種に対応。業種ごとの「伝えるべき価値」を引き出す制作を行っています。",
        },
      ],
    },
  ];

  const plans = [
    {
      name: "スモールスタート",
      price: "150,000",
      unit: "円〜",
      tag: "個人事業主・開業向け",
      features: [
        "ページ数：5ページ程度",
        "レスポンシブ対応（スマホ）",
        "SEO基本設定",
        "お問い合わせフォーム",
        "Google Analytics設置",
        "公開後レクチャー",
      ],
      note: "まず「ある状態」を作りたい方に。",
      highlight: false,
    },
    {
      name: "スタンダード",
      price: "300,000",
      unit: "円〜",
      tag: "中小企業・リニューアル向け",
      features: [
        "ページ数：10ページ程度",
        "レスポンシブ対応（スマホ）",
        "SEO設計・地域キーワード対策",
        "ライティング代行（主要ページ）",
        "お問い合わせフォーム",
        "Google Analytics・Search Console設置",
        "構造化データ（JSON-LD）設定",
        "公開後サポート（1ヶ月）",
      ],
      note: "集客・採用の両方を強化したい方に。",
      highlight: true,
    },
    {
      name: "フルサポート",
      price: "500,000",
      unit: "円〜",
      tag: "本格的なブランディング向け",
      features: [
        "ページ数：15ページ以上",
        "レスポンシブ対応（スマホ）",
        "SEO戦略設計・コンテンツ計画",
        "ライティング全ページ代行",
        "写真撮影（現地取材）",
        "WordPress / CMS構築",
        "構造化データ（JSON-LD）設定",
        "公開後サポート（3ヶ月）",
      ],
      note: "世界観からつくりたい方、製造業・観光業に。",
      highlight: false,
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
    {
      q: "製造業・精密機器など専門性の高い業種でも対応できますか？",
      a: "対応できます。諏訪地域は精密機械・光学・電子部品など製造業が多く、業界特有の用語や訴求ポイントを理解したうえで制作しています。技術力や品質へのこだわりを、発注担当者や採用候補者に伝わる言葉で表現します。",
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
          "個人事業主向けWeb制作",
          "製造業ホームページ制作",
          "観光業ホームページ制作"
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
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
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
                諏訪市・茅野市を中心とする諏訪地域は、精密機械・光学・電子部品などの製造業に加え、観光・農業・飲食・建設など多様な産業が集積するエリアです。全国有数の製造業の集積地でありながら、「検索で見つけてもらえない」「問い合わせが来ない」という悩みを抱える事業者は少なくなく、その多くはホームページの内容や設計に原因があります。
              </p>
              <p>
                ONE DESIGNは、諏訪地域の商圏・競合・顧客層を理解したうえで、中小企業や個人事業主が「地域で選ばれる」ためのホームページ制作・リニューアルを行っています。単にデザインをきれいにするだけでなく、「諏訪市 〇〇」「茅野市 〇〇」「岡谷市 〇〇」といった地域キーワードで検索上位を狙えるSEO設計、スマートフォン対応、問い合わせにつながる導線設計まで、一貫して対応します。
              </p>
              <p>
                製造業では技術力・品質・採用、観光・飲食では予約・集客、工務店では施工事例・地域信頼性など、業種ごとに「何を伝えるか」が異なります。ONE DESIGNは諏訪地域の産業事情を踏まえ、業種に合った設計と言葉でホームページを作ります。
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
          <div className="space-y-10">

            {/* 課題 */}
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

            {/* 選ばれる理由 */}
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

            {/* 制作の流れ */}
            <section id="process" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
              <h2 className="text-xl font-medium text-foreground">制作の流れ</h2>
              <p className="mt-2 text-sm text-muted-foreground">問い合わせから公開まで、すべてのステップをサポートします。</p>
              <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {process.map((x) => (
                  <li key={x.step} className="rounded-2xl border border-border bg-background p-5">
                    <p className="text-minimal tracking-widest text-muted-foreground/60">{x.step}</p>
                    <p className="mt-2 font-medium text-foreground">{x.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* 制作実績 */}
            <section id="works" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
              <h2 className="text-xl font-medium text-foreground">制作実績</h2>
              <p className="mt-2 text-sm text-muted-foreground">製造業・観光・飲食・建築など、諏訪地域の幅広い業種での制作実績があります。</p>
              <div className="mt-6 space-y-8">
                {works.map((cat) => (
                  <div key={cat.category}>
                    <div className="flex items-center gap-3 mb-4">
                      <p className="text-minimal tracking-widest text-muted-foreground/60">{cat.tag}</p>
                      <p className="font-medium text-foreground">{cat.category}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cat.items.map((item) => (
                        <div key={item.name} className="rounded-2xl border border-border bg-muted/20 p-5">
                          <p className="font-medium text-foreground text-sm">{item.name}</p>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                ※ 掲載にあたりクライアント名は伏せています。詳細は無料診断・相談時にご紹介します。
              </p>
            </section>

            {/* 料金・プラン */}
            <section id="plans" className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-8">
              <h2 className="text-xl font-medium text-foreground">料金・プラン</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                状況と予算に合わせて、必要最小限から提案します。下記は目安です。
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl border p-5 flex flex-col ${
                      plan.highlight
                        ? "border-foreground bg-foreground/5"
                        : "border-border bg-muted/20"
                    }`}
                  >
                    {plan.highlight && (
                      <p className="text-minimal tracking-widest text-muted-foreground/60 mb-2">POPULAR</p>
                    )}
                    <p className="text-xs text-muted-foreground">{plan.tag}</p>
                    <p className="mt-1 font-medium text-foreground text-lg">{plan.name}</p>
                    <p className="mt-2 text-2xl font-light text-foreground">
                      {plan.price}
                      <span className="text-sm text-muted-foreground">{plan.unit}</span>
                    </p>
                    <ul className="mt-4 space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-[0.4em] h-1 w-1 rounded-full bg-foreground/40 flex-none" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                      {plan.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-5">
                <p className="text-sm text-foreground font-medium">補助金の活用について</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  小規模事業者持続化補助金などを活用することで、制作費用の一部を補助できる場合があります。
                  諏訪商工会議所・諏訪市商工会への申請サポートもご相談ください。
                </p>
              </div>
            </section>

            {/* FAQ */}
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

            {/* 最下部CTA */}
            <section className="rounded-3xl border border-border bg-background shadow-sm p-7 md:p-10">
              <p className="text-minimal tracking-[0.22em] text-muted-foreground">FREE DIAGNOSIS</p>
              <h2 className="mt-2 text-2xl font-medium text-foreground">無料診断（15分）</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                いまの状況を整理して、改善ポイントを3つにまとめます。診断のみでOKです。<br />
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
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                  <p className="text-sm font-medium text-foreground">対応エリア</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    諏訪地域全域（諏訪市・岡谷市・下諏訪町・茅野市・原村・富士見町・北杜市）／オンライン対応
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                  <p className="text-sm font-medium text-foreground">料金の目安</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>スモールスタート：150,000円〜</li>
                    <li>スタンダード：300,000円〜</li>
                    <li>フルサポート：500,000円〜</li>
                  </ul>
                  <p className="mt-2 text-xs text-muted-foreground">補助金活用の相談も可</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/20 p-4">
                  <p className="text-sm font-medium text-foreground">対応業種</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {["製造業・精密機器", "観光・宿泊・飲食", "建築・工務店・リフォーム", "農業・直売", "士業・コンサルティング", "その他中小企業・個人事業主"].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                ※ 無料診断は「診断のみ」です。営業はしないのでご安心ください。
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}