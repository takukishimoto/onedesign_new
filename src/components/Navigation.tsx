import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

type NavigationProps = {
  isHero?: boolean; // Hero上なら true（白系）、それ以外は false（黒系）
};

const Navigation = ({ isHero = false }: NavigationProps) => {
  // Hero上：白文字 / それ以外：黒文字
  const navText = isHero ? "text-white" : "text-foreground";
  const border = isHero ? "border-white/70" : "border-foreground/70";
  const btnHover = isHero
    ? "hover:bg-white hover:text-black"
    : "hover:bg-foreground hover:text-background";

  // ロゴ：Hero上は白ロゴ、それ以外は黒ロゴ（ファイル名は必要に応じて調整OK）
  const logoSrc = isHero ? "/images/logo_dark.svg" : "/images/logo_light.svg";

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
      

          {/* 右ナビ（常時fixed） */}
          <div className="fixed top-0 right-0 z-[60] pointer-events-none">
            <div className="pointer-events-auto px-8 py-8">
              <nav className={`flex items-center gap-10 text-sm ${navText}`}>
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

                <Link
                  to="/contact"
                  className={`whitespace-nowrap border px-4 py-2 rounded-full transition ${border} ${btnHover}`}
                >
                  相談する
                </Link>
              </nav>
            </div>
          </div>
     </header>     
    </>
  );
};

export default Navigation;