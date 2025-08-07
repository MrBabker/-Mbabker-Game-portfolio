import { motion } from "framer-motion";

export default function BouncyText({ text, col }) {
  const letters = text.split("");

  return (
    <div
      className={
        col === "w"
          ? "flex flex-wrap text-white text-center"
          : "flex flex-wrap text-white text-center"
      }
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 15,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
