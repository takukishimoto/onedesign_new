const Features = () => {
  const features = [
    {
      number: "01",
      title: "信頼を生むWEBデザイン",
      description:
        "第一印象で「信頼できそう」と感じてもらえること。それがWebデザインの重要な役割です。デザインとユーザー視点の設計により、不安を取り除き、信頼につながるホームページを制作します。すべての端末に対応し、見やすさ・使いやすさにも配慮。ビジネスにふさわしい“顔”をご提案します。"
    },
    {
      number: "02",
      title: "選ばれる理由を、言語化・デザイン化",
      description:
        "うまく伝わらない——そんな悩みを、言葉とデザインの力で解決します。丁寧なヒアリングと分析をもとに、「なんとなく良い」から「ここが違う」へ。想いや強みを言語化・視覚化し、誰が見ても伝わる形に整えます。"
    },
    {
      number: "03",
      title: "集客につながるホームページを制作",
      description:
        "ただ作るだけでは、ホームページの力は発揮されません。SEOとAIOを意識して設計・導線・運用までを見据え、継続的に価値を生み出す“ビジネスの基盤”として活用できるホームページを設計。業種や地域に合わせた集客戦略まで一貫してご提案します。"
    },
    {
      number: "04",
      title: "地域名で見つかるSEOコンテンツ設計",
      description:
        "「茅野市 ホームページ制作」「北杜市 ホームページ制作」のように、地域名で検索する人に見つけてもらうための設計も行います。サービスページだけでなく、事例・よくある質問・ブログなどを“検索される形”で整えることで、公開後もアクセスが増えていくホームページになります。小さな改善を積み重ねながら、地域で選ばれる土台を育てます。"
    }

  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">

            <h3 className="text-lg md:text-2xl font-light text-black/90 mb-6 mx-auto">
              俯瞰して見る、もう「ひとつ」の目。
              <br />
              事業の本質をとらえ、価値を伝えるデザイン。
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {feature.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;