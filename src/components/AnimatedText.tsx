import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number; // 文字アニメ開始の遅延（秒）
};

const ease = [0.22, 1, 0.36, 1] as const;

export const AnimatedText = ({ text, className, delay = 0 }: Props) => {
  const reduce = useReducedMotion();

  // ✅ Array.from を使うと TS の lib 設定次第で赤くなることがあるので
  // ✅ 文字分割はスプレッドで安全に
  const letters = [...text];

  // prefers-reduced-motion の場合はアニメしない（アクセシビリティ）
  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      aria-label={text}
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.055, // 文字間隔（強めに見せたいなら 0.06〜0.09）
            delayChildren: delay,
          },
        },
      }}
      style={{ display: "inline-block" }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.9, ease },
            },
          }}
        >
          {/* ✅ スペースが潰れないように */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};