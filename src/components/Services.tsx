import FadeInSection from "@/components/FadeInSection";

const Services = () => {
  const services = [
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
      title: "集客につながるホームページ戦略",
      description:
        "ただ作るだけでは、ホームページの力は発揮されません。設計・導線・運用までを見据え、継続的に価値を生み出す“ビジネスの基盤”として活用できるホームページを設計。業種や地域に合わせた集客戦略まで一貫してご提案します。"
    }
  ];

  return (
    <FadeInSection
      // ここだけ「動きの質」を調整（テキストには触れない）
      once
      amount={0.25}
      duration={1.15}
      delay={0.05}
      y={18}
      blur={2}   // ← 弱め
      ease={[0.22, 1, 0.36, 1]} // 上品イージング
    >
      <section id="services" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32 text-center">
              {/* <p className="text-minimal text-muted-foreground mb-4">SERVICES</p> */}

              <h2 className="font-serif text-xl md:text-xl lg:text-xl font-light leading-relaxed ">
                長野県（諏訪市・茅野市・原村・富士見町）、山梨県（北杜市）を中心に、
                <br />
                中小企業や個人事業のホームページ制作・リニューアルをお手伝いしています。
                <br />
                工務店・農園・サロンなどローカルビジネスの制作実績は40件以上。
                <br />
                理念の言語化、写真撮影、SEO、デザインを一貫して行い、
                <br />
                「集客や売上アップにつながるホームページ制作」を大切にしています。
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    
    </FadeInSection>
  );
};

export default Services;