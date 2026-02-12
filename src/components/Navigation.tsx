import { Link } from "react-router-dom";
import { Instagram, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavigationProps = {
  isHero?: boolean; // Hero上なら true（白系）、それ以外は false（黒系）
};

const Navigation = ({ isHero = false }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Hero上：白文字 / それ以外：黒文字
  const navText = isHero ? "text-white" : "text-foreground";
  const border = isHero ? "border-white/70" : "border-foreground/70";
  const btnHover = isHero
    ? "hover:bg-white hover:text-black"
    : "hover:bg-foreground hover:text-background";

  // ロゴ：Hero上は白ロゴ、それ以外は黒ロゴ
  const logoSrc = isHero ? "/images/logo_dark.svg" : "/images/logo_light.svg";

  // モバイルボタン（白背景でも見えるように切替）
  const burgerWrap = isHero
    ? "border-white/25 bg-white/10"
    : "border-foreground/20 bg-white/70";
  const burgerLine = isHero ? "bg-white" : "bg-foreground";

  return (
    <>
      {/* 左ロゴ（常時fixed） */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 py-8 flex items-start justify-between">
          <Link to="/" className="pointer-events-auto">
            <img
              src={logoSrc}
              alt="ホームページ制作 ONE DESIGN ロゴ"
              className="w-[220px] block"
            />
          </Link>
        </div>

        {/* ===== Mobile Hamburger（lg未満だけ表示） ===== */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className={`lg:hidden pointer-events-auto fixed top-6 right-6 z-[70]
                      w-11 h-11 rounded-full border backdrop-blur-md
                      shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                      transition hover:scale-[1.03] active:scale-[0.99]
                      ${burgerWrap}`}
        >
          <span className="sr-only">Menu</span>

          <div className="relative w-full h-full">
            <span
              className={`absolute left-3 right-3 top-[15px] h-px transition-all ${burgerLine}`}
            />
            <span
              className={`absolute left-3 right-3 top-[21px] h-px transition-all ${burgerLine}`}
            />
            <span
              className={`absolute left-3 right-3 top-[27px] h-px transition-all ${burgerLine}`}
            />
          </div>
        </button>

        {/* 右ナビ（PCのみ表示） */}
        <div className="fixed top-0 right-0 z-[60] pointer-events-none">
          <div className="pointer-events-auto px-8 py-8">
            <nav className={`hidden lg:flex items-center gap-10 text-sm ${navText}`}>
              <Link to="/services" className="hover:opacity-70 transition whitespace-nowrap">
                特徴
              </Link>
              <Link to="/price" className="hover:opacity-70 transition whitespace-nowrap">
                料金
              </Link>
              <Link to="/work" className="hover:opacity-70 transition whitespace-nowrap">
                制作実績
              </Link>
              <Link to="/about" className="hover:opacity-70 transition whitespace-nowrap">
                私について
              </Link>

              <div className="flex items-center gap-6">
                <Link to="/blog" className="hover:opacity-70 transition whitespace-nowrap">
                  日記
                </Link>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-70 transition"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

             {/* ✅ PC：無料診断（控えめ） → 相談する（主役） */}
              <div className="flex items-center gap-4">
                  {/* 無料診断（サブ） */}
                <Link
                  to="/freediagnosis"
                  className={[
                    "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                    "border backdrop-blur-md",
                    isHero
                      ? "border-white/40 bg-white/10 text-white hover:bg-white/20"
                      : "border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10",
                  ].join(" ")}
                >
                  無料診断
                </Link>

                  {/* 相談する（メイン） */}
                  <Link
                    to="/contact"
                    className={[
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition",
                      "border", // ← 枠線
                      isHero
                        ? "border-white text-white hover:bg-white hover:text-black"
                        : "border-foreground text-foreground hover:bg-foreground hover:text-background",
                    ].join(" ")}
                  >
                    相談する
                  </Link>
                </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== Mobile Menu Overlay ===== */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[80] transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* 背景 */}
        <div
          className="absolute inset-0 bg-black/45 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* パネル */}
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm
            bg-neutral-950/70 backdrop-blur-xl border-l border-white/10
            shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
            transition-transform duration-500 ease-$begin:math:display$cubic\-bezier\(0\.22\,1\,0\.36\,1\)$end:math:display$
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="メニューを閉じる"
            className="absolute top-6 right-6 w-11 h-11 rounded-full
                       border border-white/15 bg-white/5
                       grid place-items-center
                       transition hover:scale-[1.03] active:scale-[0.99]"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="pt-24 px-7 text-white">
            <nav className="space-y-1 text-[17px] tracking-wide">
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-white/10 hover:opacity-80 transition"
              >
                特徴
              </Link>
              <Link
                to="/price"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-white/10 hover:opacity-80 transition"
              >
                料金
              </Link>
              <Link
                to="/work"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-white/10 hover:opacity-80 transition"
              >
                制作実績
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-white/10 hover:opacity-80 transition"
              >
                私について
              </Link>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-white/10 hover:opacity-80 transition"
              >
                日記
              </Link>
            </nav>

            {/* ✅ Mobile CTA */}
            <div className="mt-10 space-y-3">
              {/* 1) 無料診断（目立つ） */}
              <Link
                to="/freediagnosis"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-2xl bg-white text-black px-6 py-3 font-medium tracking-widest"
              >
                無料診断
              </Link>

              {/* 2) 相談する（左） + Instagram（右） */}
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center border border-white/70 rounded-2xl px-6 py-3 tracking-widest whitespace-nowrap"
                >
                  相談する
                </Link>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-14 h-12 grid place-items-center rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;