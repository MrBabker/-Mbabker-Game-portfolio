import { motion } from "framer-motion";
import React from "react";

export default function HeadBar() {
  return (
    <div>
      <div className=" z-2 absolute w-full h-20 overflow-hidden">
        <svg
          className="absolute w-[200%] h-full animate-wave rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C360,50 1080,520 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
}
