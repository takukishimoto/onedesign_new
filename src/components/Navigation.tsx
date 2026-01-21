import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-8 flex items-start justify-between mix-blend-difference text-white">
        
        {/* ロゴ */}
        <Link to="/" className="block">
          <img
            src="/images/logo_dark.svg"
            alt="ホームページ制作 ONE DESIGN ロゴ"
            className="w-[220px]"
          />
        </Link>

        {/* ナビ */}
        <nav className="flex items-center gap-10 text-sm">
          <Link to="/work" className="hover:opacity-70 transition whitespace-nowrap">
            制作実績
          </Link>

          <Link to="/services" className="hover:opacity-70 transition whitespace-nowrap">
            特徴
          </Link>

          <Link to="/price" className="hover:opacity-70 transition whitespace-nowrap">
            料金
          </Link>

          <Link to="/about" className="hover:opacity-70 transition whitespace-nowrap">
            私について
          </Link>

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

          <Link
            to="/contact"
            className="whitespace-nowrap border border-white/70 px-4 py-2 rounded-full transition hover:bg-white hover:text-black"
          >
            相談する
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navigation;