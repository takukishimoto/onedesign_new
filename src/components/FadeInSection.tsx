import React from "react";
import { motion } from "framer-motion";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;

  // 追加パラメータ（任意）
  once?: boolean;          // 1回だけ発火
  amount?: number;         // 何割見えたら発火
  duration?: number;       // アニメ時間
  delay?: number;          // 遅延
  y?: number;              // 下から上へ
  blur?: number;           // ブラー（弱め推奨）
  ease?: number[];         // イージング
};

export default function FadeInSection({
  children,
  className,
  once = true,
  amount = 0.25,
  duration = 1.15,
  delay = 0,
  y = 18,
  blur = 2,
  ease = [0.22, 1, 0.36, 1],
}: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}