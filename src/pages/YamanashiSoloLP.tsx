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
    "富士吉田市",
  ];

  const pains = [
    "ホームページはあるけど、問い合わせ・予約につながらない",
    "「問い合わせが来ない」「検索しても出てこない」と感じている",
    "山梨県で開業・起業したばかりで、まず何から始めればいいか分からない",
    "事業規模やサービス内容に対して、現在のホームページが見合っていない",
    "「山梨 〇〇（業種）」で検索しても出てこない、または情報が古すぎる",
    "採用力を強化したいが、自社の魅力が求職者にうまく伝わっていない",
    "補助金や助成金を活用して、コストを抑えつつ本格的なサイトを作りたい",
    "紹介だけでなく、ホームページから安定して新規の問い合わせや予約がほしい",
  ];

  const points = [
    {
      title: "中小企業・個人事業主・店舗の「独自の強み」を言語化・視覚化",
      body: "ヒアリングを通じて、当たり前すぎて気づかない「選ばれる理由」を抽出。長年培ってきた技術・地域とのつながり・こだわりをプロの視点でコンテンツへ落とし込み、訪問者に伝わる言葉と構成に整えます。",
    },
    {
      title: "山梨県内なら対面での打ち合わせ・取材が可能",
      body: "甲府市から北杜市・富士吉田市まで直接お伺いします。現場の熱量やこだわりを直接感じながら制作することで、よそのテンプレートとは違う、温度感のあるホームページを実現します。",
    },
    {
      title: "ホームページデザイン＋集客（SEO）まで設計",
      body: "見た目の完成度だけでなく、「北杜市 〇〇」「甲府市 〇〇」といった地域キーワードで検索上位を狙えるSEO設計と、訪問者を問い合わせへ誘導する導線設計を最初から組み込みます。",
    },
    {
      title: "集客と採用、両面から攻めるサイト設計",
      body: "新規顧客獲得のための地域SEOはもちろん、求職者が「ここで働きたい」と感じるストーリー構築まで対応。人手不足が課題の山梨県の事業者にとって、採用強化は集客と同じくらい重要なテーマです。",
    },
    {
      title: "写真・文章・保守まで一貫した伴走支援",
      body: "写真撮影・ライティング代行・公開後の運用サポートまで一括して対応できます。「Web担当者がいない」「更新する時間がない」という山梨県の中小企業・個人事業主の現場事情を踏まえ、二人三脚でサイトを育てていけます。",
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
      category: "農業・果樹・食",
      tag: "AGRICULTURE",
      items: [
        {
          name: "果樹農家のブランドサイト",
          desc: "桃・ぶどうなど贈答需要を意識した高品質なデザイン。生産者の顔が見えるコンテンツで信頼感を構築。",
        },
        {
          name: "農産物直売所のリニューアル",
          desc: "スマホ対応と地域SEOを強化。「北杜市 直売所」などのキーワードで検索流入を改善。",
        },
        {
          name: "ワイナリー・醸造所のサイト",
          desc: "観光・通販・法人向けの3軸を整理したサイト設計。テイスティング予約の導線も組み込み。",
        },
      ],
    },
    {
      category: "観光・宿泊・飲食",
      tag: "TOURISM",
      items: [
        {
          name: "八ヶ岳・南アルプス周辺の宿泊施設",
          desc: "予約導線と景観の魅力を前面に出したLP。シーズン別コンテンツで通年集客を設計。",
        },
        {
          name: "甲府市内の飲食店",
          desc: "地元食材と店主のこだわりを伝えるサイト。Googleマップとの連携でMEO対策も実施。",
        },
      ],
    },
    {
      category: "建築・工務店・リフォーム",
      tag: "ARCHITECTURE",
      items: [
        {
          name: "北杜市内の工務店",
          desc: "施工事例・職人の技術・採用情報を整理したサイト。「北杜市 工務店」などで検索流入増加。",
        },
        {
          name: "リフォーム会社のリニューアル",
          desc: "問い合わせ獲得に特化した構成。施工前後の写真と料金の明示で信頼性を向上。",
        },
      ],
    },
    {
      category: "その他",
      tag: "OTHERS",
      items: [
        {
          name: "士業・コンサルティング",
          desc: "信頼感と専門性を伝えるシンプルなサイト設計。問い合わせフォームへの導線を最適化。",
        },
        {
          name: "不動産・解体業者",
          desc: "問い合わせ獲得に特化したLP。料金の明示と実績写真で信頼性を向上。",
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
      note: "世界観からつくりたい、農業・観光・工務店に。",
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "山梨県でも対面できますか？",
      a: "山梨県全域に対応しています（北杜市・韮崎市・甲府市・南アルプス市・笛吹市・中央市・甲斐市・昭和町・富士吉田市）。現地取材（写真撮影・ヒアリング）もお伺いして行えます。オンライン打ち合わせ（ZoomやGoogle Meet）にも対応しています。",
    },
    {
      q: "まずは診断・相談だけでも大丈夫？",
      a: "大丈夫です。無料診断（15分）は「現状を整理するだけ」でも構いません。その後の制作をお断りいただいても問題なく、営業もしません。「何が課題かわからない」という段階のご相談が最も多いです。",
    },
    {
      q: "ホームページ制作の費用はどのくらいですか？",
      a: "個人事業主・小規模店舗向けの最小構成（150,000円〜）から、中小企業向けの本格的なサイト（300,000円〜）まで対応しています。まずは無料診断で現状を伺ったうえで、予算に合わせた最適な構成をご提案します。",
    },
    {
      q: "補助金を使ってホームページを作れますか？",
      a: "小規模事業者持続化補助金などを活用できる場合があります。山梨県内の商工会議所・商工会への申請サポートも含めて、無料診断時にご相談ください。",
    },
    {
      q: "農業・観光・工務店など特定の業種でも対応できますか？",
      a: "対応できます。山梨県は農業（桃・ぶどう・ワイン）・観光・工務店など特色ある業種が多く、業種ごとに「何を伝えるべきか」が異なります。ヒアリングを通じて業界特有の強みを引き出す制作を心がけています。",
    },
    {
      q: "WordPressで作ってもらえますか？自分で更新できるようにしたいです。",
      a: "WordPressでの制作に対応しています。公開後に自分で更新・追記できるよう、操作レクチャーも行います。更新が難しい場合は、代わりに更新作業をお引き受けする運用サポートプランもご用意しています。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://one-design.xyz/#business-yamanashi",
        "name": "ONE DESIGN",
        "description": "山梨県（甲府市・北杜市・韮崎市・南アルプス市ほか全域）の中小企業・個人事業主・店舗向けに、集客につながるホームページ制作・リニューアルを提供するWebデザイン事務所。SEO対策・スマホ対応・WordPress対応。農業・観光・工務店など幅広い業種に対応。",
        "url": "https://one-design.xyz/yamanashi-lp",
        "telephone": "",
        "priceRange": "¥¥",
        "image": "https://one-design.xyz/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "山梨県",
          "addressLocality": "北杜市",
          "addressCountry": "JP"
        },
        "areaServed": [
          { "@type": "City", "name": "甲府市" },
          { "@type": "City", "name": "北杜市" },
          { "@type": "City", "name": "韮崎市" },
          { "@type": "City", "name": "南アルプス市" },
          { "@type": "City", "name": "笛吹市" },
          { "@type": "City", "name": "中央市" },
          { "@type": "City", "name": "甲斐市" },
          { "@type": "Town", "name": "昭和町" },
          { "@type": "City", "name": "富士吉田市" }
        ],
        "knowsAbout": [
          "ホームページ制作",
          "Webデザイン",
          "SEO対策",
          "WordPress制作",
          "ホームページリニューアル",
          "中小企業向けWeb制作",
          "個人事業主向けWeb制作",
          "農業ホームページ制作",
          "観光業ホームページ制作",
          "工務店ホームページ制作"
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
                "description": "山梨県の中小企業・個人事業主向けに、集客・採用につながるホームページを一から制作します。"
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
            "name": "山梨県のホームページ制作",
            "item": "https://one-design.xyz/yamanashi-lp"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="山梨県のホームページ制作｜個人事業主・中小企業・店舗向け｜北杜市・甲府市・韮崎市｜ONE DESIGN"
        description="山梨県（甲府市・北杜市・韮崎市・南アルプス市ほか全域）の個人事業主・中小企業・店舗向けホームページ制作。問い合わせ・集客・採用につながる設計を得意とし、対面打ち合わせ・補助金活用にも対応。まずは無料診断（15分）で現状の課題を整理します。営業なし。"
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
                  YAMANASHI / WEB DESIGN
                </p>
                <h1 className="text-2xl md:text-4xl font-light text-white leading-tight">
                  山梨県の個人事業主・中小企業向け
                  <span className="block mt-2 text-white/90 text-2xl md:text-3xl">
                    ホームページ制作・リニューアル
                  </span>
                </h1>
                <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                  「問い合わせが来ない」「検索しても出てこない」「開業したばかりで何から始めればいいか分からない」<br className="hidden md:block" />
                  山梨県全域を対応エリアとし、集客・採用・補助金活用まで一貫してサポートします。<br />
                  まずは無料診断（15分）で、いまの課題と次の一手を整理しませんか。営業はしません。
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
              山梨県でホームページ制作をお考えの方へ
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                山梨県は、桃・ぶどう・ワインなどの農業・食品産業、富士山・八ヶ岳・南アルプスを背景にした観光・宿泊業、そして甲府市を中心とした製造業・小売・サービス業まで、多様な産業が共存する県です。観光客・移住者・法人顧客など、ターゲットが幅広いのも山梨県ならではの特徴です。
              </p>
              <p>
                ONE DESIGNは、山梨県の商圏・競合・顧客層を理解したうえで、中小企業や個人事業主が「地域で選ばれる」ためのホームページ制作・リニューアルを行っています。単にデザインをきれいにするだけでなく、「北杜市 〇〇」「甲府市 〇〇」「韮崎市 〇〇」といった地域キーワードで検索上位を狙えるSEO設計、スマートフォン対応、問い合わせにつながる導線設計まで、一貫して対応します。
              </p>
              <p>
                農業では直売・通販・収穫体験、観光業では予約・口コミ・シーズン集客、工務店では施工事例・採用・地域信頼性など、業種ごとに「何を伝えるか」が異なります。ONE DESIGNは山梨県の産業事情を踏まえ、業種に合った設計と言葉でホームページを作ります。
              </p>
              <p>
                甲府市・北杜市・韮崎市・南アルプス市・笛吹市・富士吉田市など山梨県全域に対面でお伺いできます。「何から始めればいいかわからない」という段階からでも、まずは無料診断（15分）でお気軽にご相談ください。
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
              <h2 className="text-xl font-medium text-foreground">山梨県でこのような課題をお持ちの企業・個人様へ</h2>
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
              <h2 className="text-xl font-medium text-foreground">山梨県の中小企業・個人事業主・店舗に選ばれる理由</h2>
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
              <p className="mt-2 text-sm text-muted-foreground">農業・観光・工務店など、山梨県の幅広い業種での制作実績があります。</p>
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
                  山梨県内の商工会議所・商工会への申請サポートもご相談ください。
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
                    山梨県全域（北杜市・韮崎市・甲府市・南アルプス市・笛吹市・中央市・甲斐市・昭和町・富士吉田市）／オンライン対応
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
                    {["農業・果樹・ワイン", "観光・宿泊・飲食", "建築・工務店・リフォーム", "不動産・解体業", "士業・コンサルティング", "その他中小企業・個人事業主"].map((item) => (
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