"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FancyTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0); // المفتاح الجديد

  const bars = [
    {
      color: "bg-emerald-400",
      width: "w-[110%]",
      delay: 0,
      exitDelay: 0.1,
      duration: 1.2,
    },
    {
      color: "bg-emerald-200",
      width: "w-[130%]",
      delay: 0,
      exitDelay: 0.2,
      duration: 1.3,
    },
    {
      color: "bg-emerald-600",
      width: "w-[120%]",
      delay: 0,
      exitDelay: 0.3,
      duration: 1.4,
    },
    {
      color: "bg-yellow-300",
      width: "w-[103%]",
      delay: 0,
      exitDelay: 0.4,
      duration: 1.2,
    },
    {
      color: "bg-orange-500",
      width: "w-[100%]",
      delay: 0,
      exitDelay: 0.5,
      duration: 1.0,
    },
    {
      color: "bg-blue-400",
      width: "w-[111%]",
      delay: 0,
      exitDelay: 0.6,
      duration: 1.1,
    },
    {
      color: "bg-teal-500",
      width: "w-[109%]",
      delay: 0,
      exitDelay: 0.7,
      duration: 1.3,
    },
    {
      color: "bg-cyan-400",
      width: "w-[120%]",
      delay: 0,
      exitDelay: 0.8,
      duration: 1.5,
    },
    {
      color: "bg-lime-400",
      width: "w-[105%]",
      delay: 0,
      exitDelay: 0.0,
      duration: 1.2,
    },
  ];

  // نحسب أطول مدة خروج
  const maxExitTime =
    Math.max(...bars.map((bar) => bar.exitDelay + bar.duration)) * 10;

  useEffect(() => {
    setVisible(true);
    setAnimKey(Date.now()); // تغيير الـ key لإعادة تشغيل الأنيميشن
    const timer = setTimeout(() => setVisible(false), maxExitTime + 10); // هامش احتياطي
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={animKey}
          className="fixed top-0 left-0 w-1000 h-full z-[9999] pointer-events-none flex flex-col justify-between justify-items-center  overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          // ❌ بدون exit: { opacity: 0 } علشان الخط يكمل خروجه
        >
          {bars.map((bar, idx) => (
            <motion.div
              key={idx}
              initial={{ x: "-120vw" }}
              animate={{ x: 0 }}
              exit={{ x: "300vw" }}
              transition={{
                delay: bar.delay,
                duration: 0.6, // دخول سريع
                type: "tween",
              }}
              className={`${bar.color} ${bar.width} h-[11%]  rounded-full self-center `}
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: "100vw" }} // يخرج لليمين بالكامل
                transition={{
                  delay: bar.exitDelay,
                  duration: bar.duration,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
