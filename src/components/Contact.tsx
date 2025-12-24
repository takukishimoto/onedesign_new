const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">お問い合わせ</h2>
              <h3 className="text-base md:text-lg font-light text-architectural mb-12">
                「ホームページ制作って何から始めればいいの？」 <br />
「昔作ったホームページをリニューアルしたい」 <br />
「WEBを活用してもっと集客したい」 <br />
「ロゴやブランドイメージを一新したい」 <br />
「農業の魅力を発信してブランディングしたい」 <br /> <br />

こんなお悩みやアイデアがある方は、ぜひ一度お話ししてみませんか？ <br />
「何を相談したらいいかわからない」という状態でも大丈夫です。 <br />
お客様の疑問や課題を一緒に整理し、最適な解決策を共に考えます。<br />
まずは気軽にお問い合わせください。

              </h3>
              
             
            </div>
            
            <div className="space-y-8">
              <div>
                
                <h4 className="text-minimal text-muted-foreground mb-2">SNS</h4>
                <div className="">
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
              
                </div>
              </div>
               <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:hello@archstudio.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    hello@archstudio.com
                  </a>
                </div>
                
               
               
              </div>
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                 ONE DESIGNは諏訪市や茅野市,原村,富士見町,北杜市,韮崎市といった八ヶ岳地域を中心に活動するホームページ制作、WEBマーケティング、ロゴデザイン等のグラフィックデザイン、ブランディング、写真撮影（出張撮影）などをおこなう個人事務所です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;