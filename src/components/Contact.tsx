import TextLinkCTA from "@/components/TextLinkCTA";
import { Instagram } from "lucide-react";

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

<span className="text-base">
こんなお悩みやアイデアがある方は、ぜひ一度お話ししてみませんか？ <br />
「何を相談したらいいかわからない」という状態でも大丈夫です。 <br />
お客様の疑問や課題を一緒に整理し、最適な解決策を共に考えます。<br />
まずは気軽にお問い合わせください。</span>

              </h3>
              
             
            </div>
            
            <div className="space-y-8">
              {/* 補助金案内 */}
<div className="space-y-4 pb-10 border-b border-border">
  <h4 className="text-minimal text-muted-foreground">
    補助金を活用したホームページ制作
  </h4>

  <p className="text-sm text-muted-foreground leading-relaxed">
    条件が合えば、ホームページ制作費の一部を
    補助金でまかなえる場合があります。
    <br />
    「使えるか分からない」という段階でも大丈夫です。
    ご相談時に一緒に確認します。
  </p>

<div className="flex justify-start">
  <TextLinkCTA to="/hojyokin" label="補助金について詳しく見る" />
</div>
</div>
              <div>
                
                <h4 className="text-minimal text-muted-foreground mb-2">SNS</h4>
                <div className="">
                 <a
  href="https://www.instagram.com/onedesign_photo/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group inline-flex items-center gap-3
    text-xl
    transition-colors duration-300
    hover:text-muted-foreground
  "
>
  <Instagram className="w-5 h-5 opacity-70 transition-transform duration-300 group-hover:scale-110" />
  <span>Instagram</span>
</a>
              
                </div>
              </div>
               {/* <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:hello@archstudio.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    hello@archstudio.com
                  </a>
                </div>
                
               
               
              </div> */}
              
              {/* <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                 ONE DESIGNは諏訪市や茅野市,原村,富士見町,北杜市,韮崎市といった八ヶ岳地域を中心に活動するホームページ制作、WEBマーケティング、ロゴデザイン等のグラフィックデザイン、ブランディング、写真撮影（出張撮影）などをおこなう個人事務所です。
                </p>
              </div> */}

             
            </div>
          </div>



           <TextLinkCTA to="/contact" label="無料で相談する" />
            


            <p className="mt-10 text-xs text-muted-foreground text-center">
              ※ 24時間以内に返信します（繁忙期は翌営業日）
            </p>

        </div>
      </div>
    </section>


  );
};

export default Contact;