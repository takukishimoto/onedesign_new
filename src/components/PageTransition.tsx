import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={pageVariants}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // hirosesaki系の上品な動き
      }}
    >
      {children}
    </motion.div>
  );
}