"use client";
import BouncyText2 from "@/components/BouncyText2";
import { motion } from "framer-motion";
import React from "react";

export default function loading() {
  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };
  return (
    <div className=" flex w-screen justify-center justify-items-center mt-50">
      {" "}
      <motion.button
        style={bungeef}
        className="  text-cyan-500 text-3xl p-5 mt-7  font-bold  select-none h-[20%] md:h-[10%] bg-blue-950/0   rounded-2xl "
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div>
          <BouncyText2 text=" LOADING . . ." col="w" />
        </div>
      </motion.button>
    </div>
  );
}
