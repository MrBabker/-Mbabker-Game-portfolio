import { motion } from "framer-motion";

export default function main() {
  return (
    <div>
      <div>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md"
        >
          Click here
        </motion.button>
      </div>
      <div>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#38bdf8",
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md overflow-hidden relative"
        >
          <span className="relative z-10">أرسل</span>
        </motion.button>
      </div>
      <div>
        <motion.button
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0px #3b82f6",
              "0 0 20px #3b82f6",
              "0 0 0px #3b82f6",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px #60a5fa",
            filter: "brightness(1.2)",
          }}
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold"
        >
          اضغط هنا
        </motion.button>
      </div>
      <div>
        <button className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:scale-95 animate-pulse">
          <span className="relative z-10">اضغط هنا</span>

          {/* لمعة تمر فوق الزر */}
          <span className="absolute left-[-100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-[-20deg] group-hover:animate-sheen z-0"></span>
        </button>
      </div>
    </div>
  );
}
