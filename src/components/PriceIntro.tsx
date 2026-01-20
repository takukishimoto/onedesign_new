import TextLinkCTA from "@/components/TextLinkCTA";
import { Link } from "react-router-dom";

const PriceIntro = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* ===== Title Area ===== */}
          <div className="mb-16">
            {/* Label */}
            <p className="text-minimal text-muted-foreground mb-3">
              料金
            </p>

            {/* Main Title */}
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Pricing
            </h2>
          </div>

          {/* ===== Concept ===== */}
          <p className="max-w-3xl text-muted-foreground leading-relaxed mb-16">
            ONE DESIGNでは、制作内容や目的に応じて
            <br />
            一律ではなく、最適な設計と料金をご提案しています。
            <br />
            料金についての目安として、よくあるケースをご紹介します。
          </p>

          {/* ===== Price Examples ===== */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-border p-6">
              <p className="text-xs text-muted-foreground mb-2">
                小規模サイト
              </p>
              <p className="text-lg font-light text-foreground mb-2">
                30万円台〜
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                個人事業主・小規模事業向け。
                必要最低限のページ構成で、
                信頼感のあるホームページを制作。
              </p>
            </div>

            <div className="border border-border p-6">
              <p className="text-xs text-muted-foreground mb-2">
                企業サイト
              </p>
              <p className="text-lg font-light text-foreground mb-2">
                50万円台〜
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                中小企業向けの標準構成。
                設計・デザイン・SEOを
                バランスよく整えます。
              </p>
            </div>

            <div className="border border-border p-6">
              <p className="text-xs text-muted-foreground mb-2">
                設計・ブランディング重視
              </p>
              <p className="text-lg font-light text-foreground mb-2">
                80万円台〜
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                強みの言語化から設計まで含め、
                事業の軸をつくるホームページ制作。
              </p>
            </div>
          </div>

         {/* ===== CTA ===== */}
<TextLinkCTA to="/price" label="料金の詳細を見る" />

        </div>
      </div>
    </section>
  );
};

export default PriceIntro;