import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const BlurText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  as: Component = "span",
}: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Component className="inline">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Component>
    </motion.div>
  );
};

export default BlurText;
