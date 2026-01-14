import React from "react";

type PageHeroProps = {
  label: string;
  enTitle?: string; // ← ロゴだけでも使えるように optional に
  jpTitle?: React.ReactNode;
  lead?: React.ReactNode;
  bottom?: React.ReactNode;

  logoSrc?: string;
  logoAlt?: string;

  // ページごとの微調整
  logoClassName?: string;
};

const PageHero = ({
  label,
  enTitle,
  jpTitle,
  lead,
  bottom,
  logoSrc,
  logoAlt = "ONE DESIGN",
  logoClassName = "max-h-[34px] md:max-h-[40px] w-auto", // ← 小さめに変更
}: PageHeroProps) => {
  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tracking-[0.35em] text-xs text-muted-foreground mb-8">
            {label}
          </p>

          {logoSrc ? (
            <div className="flex justify-center">
              <img
                src={logoSrc}
                alt={logoAlt}
                className={`${logoClassName} dark:invert dark:brightness-0`}
              />
            </div>
          ) : (
           <p className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.15] tracking-[0.02em] text-foreground">
  {enTitle}
</p>
          )}

          {jpTitle && (
            <div className="mt-6 font-serif text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.6] tracking-wide text-foreground/90">
              {jpTitle}
            </div>
          )}

          {lead && (
            <div className="mt-8 text-sm md:text-base leading-relaxed tracking-wide text-muted-foreground">
              {lead}
            </div>
          )}

          {bottom && (
            <div className="mt-6 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              {bottom}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;