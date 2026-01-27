import { useEffect, useState } from "react";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "私たちについて", href: "#about" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // ESCで閉じる + open中はbodyスクロール停止
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 右上トグル */}
      <button
        type="button"
        aria-label="メニューを開閉"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden fixed top-4 right-4 z-[60] w-11 h-11 rounded-full border border-white/15 bg-white/10 backdrop-blur-md shadow-sm"
      >
        <span className="sr-only">Menu</span>
        <span className="relative block w-full h-full">
          {/* 3本線 → × */}
          <span
            className={[
              "absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-300",
              open ? "rotate-45" : "-translate-y-[7px]",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-300",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-1/2 top-1/2 block h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 bg-white transition-all duration-300",
              open ? "-rotate-45" : "translate-y-[7px]",
            ].join(" ")}
          />
        </span>
      </button>

      {/* オーバーレイ */}
      <div
        className={[
          "fixed inset-0 z-50 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* 背景 */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* パネル */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-black/55 backdrop-blur-xl",
            "transition-transform duration-500 will-change-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="pt-20 px-6">
            <p className="text-xs tracking-[0.25em] text-white/60">MENU</p>

            <nav className="mt-6">
              <ul className="space-y-3">
                {NAV.map((item, idx) => (
                  <li
                    key={item.href}
                    style={{ transitionDelay: open ? `${120 + idx * 60}ms` : "0ms" }}
                    className={[
                      "transition-all duration-500",
                      open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    ].join(" ")}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg text-white/90 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                    <div className="h-px bg-white/10" />
                  </li>
                ))}
              </ul>
            </nav>

            <div
              style={{ transitionDelay: open ? "420ms" : "0ms" }}
              className={[
                "mt-8 transition-all duration-500",
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
            >
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full h-12 rounded-full bg-white text-black text-sm tracking-widest"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}