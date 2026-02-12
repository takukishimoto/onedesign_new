import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"; 
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import Cta from "@/components/Cta";
import { Link } from "react-router-dom";

const Services = () => {
  const flow = [
    {
      no: "01",
      title: "初回お打ち合わせ",
      desc: "現状と目的を伺い、必要な方向性を整理します。（対面 / オンライン）",
    },
    {
      no: "02",
      title: "課題整理・企画構成のご提案",
      desc: "競合・市場感も踏まえ、構成案と改善ポイントを共有。成果につながる導線を設計します。",
    },
    {
      no: "03",
      title: "素材・原稿のご準備",
      desc: "文章・写真・ロゴなどをご用意いただきます。必要に応じて撮影や文章整理もサポートします。",
    },
    {
      no: "04",
      title: "トップページデザイン制作",
      desc: "方向性を固めるため、まずトップをデザイン。トーン＆レイアウトの基準を決めます。",
    },
    {
      no: "05",
      title: "デザイン・コーディング",
      desc: "下層ページも含めて制作。スマホ対応・表示速度・基本SEOまでまとめて整えます。",
    },
    {
      no: "06",
      title: "公開・運用スタート",
      desc: "公開後の更新・改善も継続支援。育てて成果を出す運用を一緒に進めます。",
    },
  ];

  return (
    <div className="min-h-screen">
       <Seo
        title="サービス内容｜長野・八ヶ岳のホームページ制作 ONE DESIGN"
        description="ONE DESIGNでは、長野県諏訪市・茅野市・原村・富士見町・八ヶ岳エリアを中心に、中小企業・個人事業主向けのホームページ制作、Webデザイン、SEO・集客設計、運用サポートまで一貫して対応しています。"
      />
      <Navigation />


<PageHero
  label="特徴"
  enTitle="Design as Thinking"
  jpTitle={<>思考としてのデザイン</>}
  lead={
    <>
      つくることが目的ではない。<br />
      成果につながる設計を。
    </>
  }
  bottom="ホームページ制作・グラフィックデザイン・WEBマーケティング・写真撮影"
/>

        {/* ===== SERVICE INTRO ===== */}
      <section className="pb-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">


          <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              ONE DESIGNは、諏訪市・茅野市・原村・富士見町・北杜市・韮崎市といった
              八ヶ岳エリアを中心に活動する、個人事業主・中小企業向けの
              ホームページ制作・WEBデザイン事務所です。
            </p>

            <p>
              ホームページ制作、グラフィックデザイン、コーディング、
              WEBマーケティング、写真撮影まで一貫して対応。
              単に「作る」だけでなく、成果につながる設計を大切にしています。
            </p>

            <p>
              中小企業や個人事業の方が抱える
              「何から始めればいいかわからない」
              「今のホームページが機能していない」
              そんな悩みに寄り添い、本質的な課題解決を行います。
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICE FEATURES ===== */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-x-16 gap-y-16 text-sm md:text-base">
            <div>
              <h3 className="text-architectural mb-4">強みの明確化</h3>
              <p className="text-muted-foreground leading-relaxed">
                丁寧なヒアリングを通して、言葉になっていない価値や強みを整理。
                「なぜ選ばれるのか」を明確にし、ホームページに反映します。
              </p>
            </div>

            <div>
              <h3 className="text-architectural mb-4">Web Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                PC・タブレット・スマートフォンすべてに対応したレスポンシブデザイン。
                見やすく、使いやすいWEBサイトを制作します。
              </p>
            </div>

            <div>
              <h3 className="text-architectural mb-4">WEB集客・相談</h3>
              <p className="text-muted-foreground leading-relaxed">
                SEOを意識した設計と導線づくりで、集客につながるホームページへ。
                公開後の運用や改善もサポートします。
              </p>
            </div>

            <div>
              <h3 className="text-architectural mb-4">レスポンシブデザイン</h3>
              <p className="text-muted-foreground leading-relaxed">
                デバイスを問わず快適に閲覧できる設計で、
                ユーザー体験と信頼感を高めます。
              </p>
            </div>

            <div>
              <h3 className="text-architectural mb-4">納品後の安心サポート</h3>
              <p className="text-muted-foreground leading-relaxed">
                公開後の更新・保守・改善まで対応。
                長く使えるホームページを一緒に育てていきます。
              </p>
            </div>

            <div>
              <h3 className="text-architectural mb-4">スマホ対応</h3>
              <p className="text-muted-foreground leading-relaxed">
                モバイルファーストを意識した設計で、
                スマートフォンからの閲覧・お問い合わせにも最適化します。
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ===== Free Diagnosis CTA（FLOWの前） ===== */}
<section className="py-10 bg-background">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="rounded-3xl border border-border bg-foreground/5 backdrop-blur-md p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted-foreground mb-2">
            FREE DIAGNOSIS
          </p>

          <h3 className="text-xl md:text-2xl font-medium text-foreground">
            無料診断（15分）で今のホームページを整理しませんか
          </h3>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            今のサイトを一緒に見ながら、改善ポイントを3つに整理してお伝えします。
            <br className="hidden md:block" />
            診断のみです。営業はしないのでご安心ください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/freediagnosis"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-foreground px-6 py-3 text-sm text-background hover:opacity-90 transition whitespace-nowrap"
          >
            無料診断を申し込む
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background/60 px-6 py-3 text-sm text-foreground hover:bg-muted/40 transition whitespace-nowrap"
          >
            通常の相談はこちら
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      

      {/* ===== FLOW ===== */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-14">
            <h2 className="text-minimal text-muted-foreground mb-4">FLOW</h2>
            <h3 className="text-3xl md:text-5xl font-light text-architectural">
              制作の流れ
            </h3>
          </div>

          {/* ここがズレないポイント：1配列をgridで並べる */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {flow.map((item) => (
              <div
                key={item.no}
                className="relative border border-border bg-background/60 p-8 md:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-sm text-muted-foreground">
                      {item.no}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl font-light text-architectural mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* subtle divider */}
                <div className="mt-8 h-px w-full bg-border/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
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

export default Services;