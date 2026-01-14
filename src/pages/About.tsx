import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* TYPO HERO */}
      <PageHero
        label="私について"
        enTitle="ONE DESIGN" // logoSrcがある時は表示されない想定（PageHero側の実装）
        logoSrc="/images/logo_onedesign.svg"
        logoAlt="ONE DESIGN"
        jpTitle={
          <>
            俯瞰して見る、もう「ひとつ」の目。<br />
            事業の本質をとらえ、価値を伝えるデザイン。
          </>
        }
        lead={<></>}
        bottom=""
      />

      {/* CONTENT */}
      <section className="pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              {/* Left */}
              <div>
             <p className="text-minimal text-muted-foreground mb-4">ABOUT</p>

<h2 className="mb-10 flex items-center">
  <img
    src="/images/logo_onedesign.svg"
    alt="ONE DESIGN"
    className="max-h-[28px] md:max-h-[34px] w-auto dark:invert dark:brightness-0"
  />
</h2>

                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ビジネスの成長を支える、中小企業・個人事業向けデザイン制作ならONE DESIGN。
                    ホームページ制作を中心に、ロゴやチラシなどのグラフィックデザイン、写真撮影まで一貫して対応します。
                  </p>

                  <div className="text-lg text-muted-foreground leading-relaxed">
                    <p className="mb-3">【こんな方に最適です】</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>中小企業の経営者で、集客につながるホームページを検討している方</li>
                      <li>起業・開業にあたり、ブランディングやサイト制作を検討している方</li>
                      <li>既存サイトをリニューアルして成果を高めたい方</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-12">
                <div>
                  <p className="text-minimal text-muted-foreground mb-6">
                    ONE DESIGNが選ばれる理由
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h3 className="text-lg font-medium mb-2">
                        制作から運用サポートまで一貫対応
                      </h3>
                      <p className="text-muted-foreground">
                        ホームページ制作、ロゴ制作、SEO対策、独自ドメイン、SSL対応、WEB集客支援はもちろん、
                        公開後の運用サポートや保守管理まで幅広く対応します。
                      </p>
                    </div>

                    <div className="border-l-2 border-architectural pl-6">
                      <h3 className="text-lg font-medium mb-2">
                        「作って終わり」ではない、集客できるホームページ
                      </h3>
                      <p className="text-muted-foreground">
                        育てていくことで成果を出す設計を重視。訪問者とのコミュニケーションツールとして、
                        効果的に機能するWEBサイトをつくります。
                      </p>
                    </div>

                    <div className="border-l-2 border-architectural pl-6">
                      <h3 className="text-lg font-medium mb-2">
                        SEO対策でビジネスを加速
                      </h3>
                      <p className="text-muted-foreground">
                        検索エンジンでの上位表示を目指すSEOを実施し、アクセス数やお問い合わせ増加をサポートします。
                      </p>
                    </div>

                    <div className="border-l-2 border-architectural pl-6">
                      <h3 className="text-lg font-medium mb-2">
                        補助金を活用したホームページ制作
                      </h3>
                      <p className="text-muted-foreground">
                        条件により制作費用の最大約2/3が補助されるケースも。補助金を活用した制作実績があります。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-minimal text-muted-foreground mb-2">対応領域</p>
                      <p className="text-xl">Web / Design / Branding / Marketing</p>
                    </div>
                    <div>
                      <p className="text-minimal text-muted-foreground mb-2">支援範囲</p>
                      <p className="text-xl">制作〜運用</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-6">
                    まずはお気軽にご相談ください。課題に寄り添い、最適な解決策をご提案します。
                  </p>
                </div>
              </div>
              {/* /Right */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 