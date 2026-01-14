const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">

          {/* 上段 */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* 左 */}
            <div>
              <img
                src="/images/logo_light.svg"
                alt="ONE DESIGN"
                className="w-[160px] mb-6 dark:hidden"
              />
              <img
                src="/images/logo_dark.svg"
                alt="ONE DESIGN"
                className="w-[160px] mb-6 hidden dark:block"
              />

              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                長野県・山梨県を中心に、中小企業・個人事業の
                ホームページ制作・WEBデザインを行っています。
                事業の本質をとらえ、価値を伝えるデザインを大切にしています。
              </p>
            </div>

            {/* 右 */}
            <div className="grid grid-cols-2 gap-8">
              {/* <div>
                <ul className="space-y-3 text-sm">
                  <li><a href="/" className="hover:opacity-70 transition">トップ</a></li>
                  <li><a href="/work" className="hover:opacity-70 transition">制作実績</a></li>
                  <li><a href="/about" className="hover:opacity-70 transition">わたしについて</a></li>
                  <li><a href="/services" className="hover:opacity-70 transition">特徴</a></li>
                  
                  <li><a href="/contact" className="hover:opacity-70 transition">連絡する</a></li>
                </ul>
              </div> */}

              <div>
                <p className="text-sm text-muted-foreground mb-4">AREA</p>
                <p className="text-sm leading-relaxed">
                  八ヶ岳・諏訪市・茅野市・富士見町・原村<br />
                  北杜市・韮崎市 ほか
                </p>
              </div>
            </div>
          </div>

          {/* 下段 */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ONE DESIGN. All rights reserved.
            </p>

            <p className="text-xs text-muted-foreground">
              Web Design & Branding
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;