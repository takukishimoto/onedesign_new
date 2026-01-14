import { Link } from "react-router-dom";

const PriceIntro = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <p className="text-minimal text-muted-foreground mb-4">
            PRICE
          </p>

          {/* Heading */}
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8">
            料金について
          </h2>

          {/* Concept */}
          <p className="text-muted-foreground leading-relaxed mb-12">
            ONE DESIGNでは、制作内容や目的に応じて
            <br />
            一律ではなく、最適な設計と料金をご提案しています。
            <br />
            まずは目安として、よくあるケースをご紹介します。
          </p>

          {/* Price Examples */}
          <div className="grid md:grid-cols-3 gap-8 text-left mb-14">
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

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              to="/price"
              className="inline-flex items-center px-8 py-4 border border-foreground/60
                         text-sm tracking-wide transition
                         hover:bg-foreground hover:text-background"
            >
              料金の詳細を見る
              <span className="ml-3 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceIntro;