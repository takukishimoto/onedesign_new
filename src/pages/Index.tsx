import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import PriceIntro from "@/components/PriceIntro";
import { motion } from "framer-motion";


const Index = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Heroが見えている間は true / 通り過ぎたら false
        setIsHero(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="個人事業主・中小企業向けホームページ制作 ・WEB集客 | 八ヶ岳 諏訪市,茅野市,岡谷市,原村,富士見町,北杜市,韮崎市| ONE DESIGN"
        description="八ヶ岳,諏訪市,茅野市,岡谷市,原村,富士見町,北杜市のホームページ作成、WEB集客、グラフィックデザインはONE DESIGN（ワンデザイン）にお任せください"
      />

      {/* ここで状態を渡す */}
      <Navigation isHero={isHero} />

      {/* Heroの“観測対象” */}
      <motion.section
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1], // 上品なイージング
  }}
>


      <div ref={heroRef}>
        <Hero />  {/* Heroの中身 */}
      </div>
</motion.section>


      {/* 以降はいつも通り */}
      <Services />      
      <About />
      <PriceIntro />
      <Portfolio />
      <Contact />
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
      <a
        href="#top"
        className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur text-sm text-muted-foreground hover:text-foreground hover:bg-background transition shadow-sm"
      >
        ↑ 上へ
      </a>
  </div>
    </div>
  );
};

export default Index;