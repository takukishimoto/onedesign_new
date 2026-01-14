

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== 背景レイヤー ===== */}
      <div className="absolute inset-0 animated-gradient" />
      {/* ===== Color Flow Layer ===== */}
      <div className="absolute inset-[-50%] color-flow-layer" />

      <div className="absolute -inset-24 blob-layer" />
      <div className="absolute -inset-24 light-sweep" />
      <div className="absolute inset-0 noise-layer" />

      {/* ★ 鳥の影：ここに挟む */}


      <div className="absolute inset-0 bg-black/35" />
      {/* ======================= */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] text-white/70">SCROLL</span>
          <span className="block w-2 h-2 rounded-full bg-white/80 animate-[scrollPulse_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* ===== コンテンツ ===== */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 text-white">
        {/* Logo */}
        <div className="flex justify-center mb-4 mt-20">
          <img
            src="/images/logo_mark.svg"
            alt="ホームページ制作 ONE DESIGN ロゴ"
            className="h-[48px] md:h-[56px] w-auto animate-[subtleFloat_6.5s_ease-in-out_infinite]"
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-2xl font-light leading-tight mb-6 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          八ヶ岳・諏訪市・茅野市・富士見町・原村・北杜市・韮崎市の
          <br />
          ホームページ制作・WEBデザイン
        </h1>

        {/* Description */}
        <h2 className="text-sm md:text-base lg:text-base font-light text-white/80 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.20)]">
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

        {/* Buttons ※ここ重要：+ を消す */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition"
          >
            無料相談・お問い合わせ
          </a>

          <a
            href="/works"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition"
          >
            制作実績を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;