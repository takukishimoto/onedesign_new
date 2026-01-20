import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景（霧→クリア + 少しだけドリーイン） */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, filter: "blur(18px) saturate(1.15)", opacity: 0 }}
        animate={{ scale: 1.0, filter: "blur(0px) saturate(1)", opacity: 1 }}
        transition={{ duration: 1.35, ease }}
      >
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-[-50%] color-flow-layer" />
        <div className="absolute -inset-24 blob-layer" />
        <div className="absolute -inset-24 light-sweep" />
        <div className="absolute inset-0 noise-layer" />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

        {/* ここが“おおっ”の正体：中央線 → 上下に割れて開く */}
      {/* 上の幕 */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-1/2 z-[2] pointer-events-none bg-background"
        initial={{ y: 0 }}
        animate={{ y: "-102%" }}
        transition={{ duration: 1.05, delay: 0.10, ease }}
      />

      {/* 下の幕 */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-1/2 z-[2] pointer-events-none bg-background"
        initial={{ y: 0 }}
        animate={{ y: "102%" }}
        transition={{ duration: 1.05, delay: 0.10, ease }}
      />

      {/* 中央の線（先に出て、割れる合図になる） */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 z-[3] pointer-events-none -translate-y-1/2"
        initial={{ opacity: 0, scaleX: 0.35 }}
        animate={{ opacity: [0, 1, 0.0], scaleX: [0.35, 1, 1] }}
        transition={{ duration: 0.55, delay: 0.02, ease }}
      >
        <div className="mx-auto h-px w-[78%] bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
      </motion.div>

      {/* 幕のエッジに薄いハイライト（上下それぞれ） */}
      <motion.div className="absolute inset-0 z-[2] pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.06 }}>
        <motion.div
          className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-foreground/10 to-transparent"
          initial={{ y: 0 }}
          animate={{ y: "-110%" }}
          transition={{ duration: 1.05, delay: 0.10, ease }}
        />
        <motion.div
          className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-foreground/10 to-transparent"
          initial={{ y: 0 }}
          animate={{ y: "110%" }}
          transition={{ duration: 1.05, delay: 0.10, ease }}
        />
      </motion.div>

      {/* 幕のエッジに薄いハイライト（映画っぽい“抜け”） */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        <motion.div
          className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-foreground/10 to-transparent"
          initial={{ y: 0 }}
          animate={{ y: "-110%" }}
          transition={{ duration: 1.05, delay: 0.08, ease }}
        />
      </motion.div>

      {/* Scroll indicator（少し遅らせて“場が整ってから”出す） */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] text-white/70">SCROLL</span>
          <span className="block w-2 h-2 rounded-full bg-white/80 animate-[scrollPulse_1.8s_ease-in-out_infinite]" />
        </div>
      </motion.div>

      {/* SEO用h1（表示しない） */}
      <h1 className="sr-only">
        八ヶ岳・諏訪市・茅野市・富士見町・原村・北杜市・韮崎市のホームページ制作・WEBデザイン
      </h1>

      {/* 左下コピー：幕が開いた“直後”に乗せる（おおっが増す） */}
      <motion.div
        className="absolute left-8 bottom-8 md:left-24 md:bottom-24 z-10 text-left"
        initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.0, delay: 0.55, ease }}
      >
        <p className="font-serif text-xl md:text-3xl !leading-[1.7] text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]">
          <AnimatedText text="俯瞰して見る、もう「ひとつ」の目。" delay={0.72} />
          <br />
          <AnimatedText text="事業の本質をとらえ、価値を伝えるデザイン。" delay={1.05} />
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;