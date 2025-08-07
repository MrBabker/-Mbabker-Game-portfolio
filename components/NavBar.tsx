import { motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import { autoContext } from "./Context";

export default function NaveBar() {
  const context = useContext(autoContext);

  if (!context) throw new Error("Undefide !");

  const { pageNumber, setPagenumber } = context;

  return (
    <nav className=" z-10 absolute hidden md:block p-5 top-3 right-5  ">
      <Link href="/">
        <motion.button
          onClick={() => {
            setPagenumber(0);
          }}
          initial={{ y: -70, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 450 }}
          className={
            pageNumber !== 0
              ? " cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900/30"
              : " cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500 "
          }
        >
          {/* النص فوق الطبقة */}
          <span className="select-none relative z-10">About me</span>

          {/* طبقة التعبئة */}

          <span
            className={
              "absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 group-hover:w-full"
            }
          ></span>
        </motion.button>
      </Link>

      <Link href="/work">
        <motion.button
          onClick={() => {
            setPagenumber(1);
          }}
          initial={{ y: -60, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500 }}
          className={
            pageNumber !== 1
              ? "  cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-blue-900/30"
              : "  cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-emerald-500 "
          }
        >
          {/* النص فوق الطبقة */}
          <span className="select-none relative z-10">Works</span>

          {/* طبقة التعبئة */}
          <span className="absolute left-0 top-0 h-full w-0 bg-emerald-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.button>
      </Link>
      <Link href="/skills">
        <motion.button
          onClick={() => {
            setPagenumber(2);
          }}
          initial={{ y: -56, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          className={
            pageNumber !== 2
              ? " cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-blue-900/30"
              : " cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-emerald-500"
          }
        >
          {/* النص فوق الطبقة */}
          <span className="select-none relative z-10">Skills</span>

          {/* طبقة التعبئة */}
          <span className="absolute left-0 top-0 h-full w-0 bg-emerald-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.button>
      </Link>
      <Link href="/projects">
        {" "}
        <motion.button
          onClick={() => {
            setPagenumber(3);
          }}
          initial={{ y: -50, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={
            pageNumber !== 3
              ? " cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-blue-900/30"
              : " cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-cyan-200 hover:text-white font-semibold shadow-md group bg-emerald-500 "
          }
        >
          {/* النص فوق الطبقة */}
          <span className="select-none relative z-10">Projects</span>

          {/* طبقة التعبئة */}
          <span className="absolute left-0 top-0 h-full w-0 bg-emerald-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
        </motion.button>
      </Link>
    </nav>
  );
}
