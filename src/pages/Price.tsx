import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Cta from "@/components/Cta";

const Price = () => {
  const plans = [
    {
      name: "プランA",
      price: "300,000円〜",
      lead: "戦略〜取材・撮影・原稿まで、こちらでまとめて進行するプラン。",
      includes: [
        "マーケティング / 方向性の整理",
        "戦略の策定",
        "取材（ヒアリング）",
        "写真撮影",
        "記事作成（原稿整理含む）",
        "Webサイト設計・制作",
        "スマホ最適化",
        "動作テスト",
        "独自ドメイン / メール設定",
        "常時SSL（HTTPS）対応",
        "基本SEO（構造・導線の最適化）",
      ],
    },
    {
      name: "プランB",
      price: "150,000円〜",
      lead: "文章・素材をご準備いただき、オンライン中心でスピーディに進めるプラン。",
      includes: [
        "Webサイト設計・制作",
        "スマホ最適化",
        "動作テスト",
        "独自ドメイン / メール設定",
        "常時SSL（HTTPS）対応",
        "基本SEO（構造・導線の最適化）",
      ],
      note: "※原稿・写真素材はご用意いただきます（必要に応じて撮影や原稿整理も別途対応可能）。",
    },
  ];

  const options = [
    {
      title: "ホームページ管理費（保守・運用）",
      price: "10,000円(税抜)/月〜",
      desc:
        "ホームページは公開して終わりではなく、更新・改善が必要です。安全性の維持（更新作業）や、内容の改善・導線調整など、育てて成果を出す運用をサポートします。",
    },
    {
      title: "ロゴ制作",
      price: "100,000円(税抜)〜",
      desc:
        "理念や背景を丁寧に伺い、ブランドの“核”を視覚化します。印象に残るロゴは、信頼と認知の土台になります。",
    },
    {
      title: "写真撮影",
      price: "30,000円(税抜)/1時間〜",
      desc:
        "商品・店舗・スタッフ・施工事例など、ホームページやSNSで使える写真を撮影します。空気感が伝わる素材は、反応を大きく変えます。",
    },
  ];

  const flow = [
    {
      no: "01",
      title: "初回お打ち合わせ",
      desc: "実現したいこと・現状・理想の雰囲気などを伺います。（対面 / オンライン）",
    },
    {
      no: "02",
      title: "お見積もり・企画構成案のご提出",
      desc: "構成のイメージとお見積りをご提示。ゴールと優先順位を整理します。",
    },
    {
      no: "03",
      title: "素材・原稿の準備",
      desc: "掲載内容を揃えます（文章・写真・ロゴなど）。必要に応じて撮影や原稿整理も対応します。",
    },
    {
      no: "04",
      title: "TOPページデザイン制作",
      desc: "方向性を固めるため、まずTOPをデザインし、トーン＆ルールを決めます。",
    },
    {
      no: "05",
      title: "デザイン・コーディング",
      desc: "下層ページまで制作。スマホ対応・表示速度・基本SEOまでまとめて整えます。",
    },
    {
      no: "06",
      title: "最終確認・公開",
      desc: "最終チェック後に公開。公開後の運用・改善もご相談ください。",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="料金｜ホームページ制作・WEB集客 | 八ヶ岳（諏訪・茅野・原村・富士見町・北杜ほか）ONE DESIGN"
        description="ONE DESIGNのホームページ制作料金。プランA：300,000円〜 / プランB：150,000円〜。SEO・SSL・独自ドメイン・スマホ対応込み。諏訪市・茅野市・原村・富士見町・北杜市など八ヶ岳エリア中心に対応。"
      />

      <Navigation />

      <PageHero
        label="料金"
        enTitle="Pricing"
        jpTitle={
          <>
            HP制作の料金の目安と、進め方。<br />
            目的と状況に合わせてご提案します。
          </>
        }
        lead={
          <>
            CMS（WordPress / a-blog cms）やHTMLなど、運用方法も含めてご提案します。<br />
            SEO対策・常時SSL・独自ドメイン・スマホ対応は基本的に込みで設計します。
          </>
        }
        bottom="諏訪市・茅野市・原村・富士見町・北杜市・韮崎市 ほか対応"
      />

      {/* ===== Plans ===== */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            {plans.map((p) => (
              <div key={p.name} className="border border-border bg-background/60 p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-minimal text-muted-foreground">{p.name}</p>
                  <p className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
                    {p.price}
                  </p>
                </div>

                <p className="mt-6 text-muted-foreground leading-relaxed">{p.lead}</p>

                <div className="mt-8">
                  <p className="text-minimal text-muted-foreground mb-3">含まれる内容</p>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {p.includes.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-[0.55rem] h-[2px] w-3 bg-border shrink-0" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  {p.note && (
                    <p className="mt-6 text-xs md:text-sm text-muted-foreground/90 leading-relaxed">
                      {p.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs md:text-sm text-muted-foreground leading-relaxed">
            ※上記は目安です。ページ数・内容・撮影の有無・更新体制により最適な形をご提案し、お見積りします。
          </p>
        </div>
      </section>

      {/* ===== Options ===== */}
      <section className="py-28 bg-muted/25">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-minimal text-muted-foreground mb-4">OPTION</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              追加メニュー
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {options.map((o) => (
              <div key={o.title} className="border border-border bg-background/60 p-8">
                <p className="text-minimal text-muted-foreground">{o.price}</p>
                <h3 className="mt-3 text-xl font-light text-architectural">{o.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14">
            <p className="text-minimal text-muted-foreground mb-4">FLOW</p>
            <h2 className="text-3xl md:text-5xl font-light text-architectural">
              制作の流れ
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              目安：素材（原稿・写真）が揃ってから約1〜1.5ヶ月。八ヶ岳エリアは初回対面も可能です。遠方はオンラインで全国対応します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {flow.map((item) => (
              <div key={item.no} className="border border-border bg-background/60 p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-sm text-muted-foreground">
                      {item.no}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-architectural mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Cta />
         <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#haramura-park"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur text-sm text-muted-foreground hover:text-foreground hover:bg-background transition shadow-sm"
        >
          ↑ 上へ
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Price;