const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">SERVICE</h2>
            <h2 className="about-philosophy mb-16">
              Design as Thinking
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

                {/* 無料診断 */}
                <div className="mt-10 rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
  <p className="text-sm tracking-[0.22em] text-muted-foreground">FREE DIAGNOSIS</p>

  <h3 className="mt-2 text-xl md:text-2xl font-medium text-foreground">
    ホームページ無料診断（15分）
  </h3>

  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
    いまのサイトを一緒に見ながら、改善ポイントを3つに整理してお伝えします。
    <br />
    まずは現状を整理するところから、ご一緒します。
  </p>

  <div className="mt-6">
    <a
      href="/freediagnosis#apply"
      className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90 transition whitespace-nowrap"
    >
      無料診断へ
    </a>
  </div>
</div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-12">
              <div>
                <h4 className="text-xl text-muted-foreground mb-6">
                  ONE DESIGNが選ばれる理由
                </h4>

                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      制作から運用サポートまで一貫対応
                    </h5>
                    <p className="text-muted-foreground">
                      ホームページ制作、ロゴ制作、SEO対策、独自ドメイン、SSL対応、WEB集客支援はもちろん、
                      公開後の運用サポートや保守管理まで幅広く対応します。
                    </p>
                  </div>

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      「作って終わり」ではない、集客できるホームページ
                    </h5>
                    <p className="text-muted-foreground">
                      育てていくことで成果を出す設計を重視。訪問者とのコミュニケーションツールとして、
                      効果的に機能するWEBサイトをつくります。
                    </p>
                  </div>

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      SEO対策でビジネスを加速
                    </h5>
                    <p className="text-muted-foreground">
                      検索エンジンでの上位表示を目指すSEOを実施し、アクセス数やお問い合わせ増加をサポートします。
                    </p>
                  </div>

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      補助金を活用したホームページ制作
                    </h5>
                    <p className="text-muted-foreground">
                      条件により制作費用の最大約2/3が補助されるケースも。補助金を活用した制作実績があります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">対応領域</h4>
                    <p className="text-xl">Web / Design / Branding / Marketing</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">支援範囲</h4>
                    <p className="text-xl">制作〜運用</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  まずはお気軽にご相談ください。課題に寄り添い、最適な解決策をご提案します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
    
  );
};

export default About;