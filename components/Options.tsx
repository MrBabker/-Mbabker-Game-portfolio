import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { autoContext } from "./Context";

export default function StickyControl() {
  const { pageNumber, setPagenumber } = useContext(autoContext);

  const [isSticky, setIsSticky] = useState(true);

  const [isClicked, setIsClicked] = useState(false);
  const optionRef = useRef(null);

  const cliks = (isclik: boolean, num: number) => {
    setIsClicked(isclik);
    setPagenumber(num);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // if (optionRef.current && !optionRef.current.contains(e.target))
      // setIsClicked(false); // أغلق القائمة لو كبس خارجها
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      {" "}
      <div
        className={
          isSticky === false
            ? " fixed    top-10 right-5 z-50   "
            : "  md:hidden absolute     top-40 right-5 z-50   "
        }
      >
        <motion.button
          ref={optionRef}
          initial={{ y: -70, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 450 }}
          viewport={{ once: false, amount: 0.3 }}
          className={
            "  relative overflow-hidden px-4 py-2 rounded-full m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900/30"
          }
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          {/* النص فوق الطبقة */}
          <span className=" cursor-pointer select-none relative z-10">☰</span>

          {/* طبقة التعبئة */}
          <span
            className={
              isClicked === false
                ? "absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 "
                : "absolute left-0 top-0 h-full  bg-emerald-500   opacity-100 z-0 transition-all duration-500 w-full"
            }
          ></span>
        </motion.button>
      </div>
      {isClicked && (
        <div className=" ">
          <motion.div
            initial={{ x: 100, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 450 }}
            viewport={{ once: false, amount: 0.3 }}
            className={
              isSticky === false
                ? "  top-30 right-5 fixed overflow-hidden px-15 py-22  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                : "  top-50 right-5  md:hidden absolute  overflow-hidden px-15 py-22  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
            }
          >
            {/* النص فوق الطبقة */}

            {/* طبقة التعبئة */}
            <span className=" absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 "></span>
          </motion.div>
          <Link href="/">
            <motion.button
              onClick={() => {
                cliks(!isClicked, 0);
              }}
              initial={{ x: 100, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350 }}
              viewport={{ once: false, amount: 0.3 }}
              className={
                pageNumber !== 0
                  ? isSticky === false
                    ? "  top-30 right-5 fixed overflow-hidden px-6 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                    : "  top-50 right-5  md:hidden absolute  overflow-hidden px-6 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                  : isSticky === false
                  ? "  top-30 right-5 fixed overflow-hidden px-6 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500  z-10"
                  : "  top-50 right-5  md:hidden absolute  overflow-hidden px-6 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500  z-10"
              }
            >
              {/* النص فوق الطبقة */}
              <span className=" cursor-pointer select-none relative z-10">
                About me
              </span>

              {/* طبقة التعبئة */}
              <span className=" absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </Link>

          <Link href="/work">
            <motion.button
              onClick={() => {
                cliks(!isClicked, 1);
              }}
              initial={{ x: 100, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250 }}
              viewport={{ once: false, amount: 0.3 }}
              className={
                pageNumber !== 1
                  ? isSticky === false
                    ? "  top-41 right-5 fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                    : "  top-61 right-5  md:hidden absolute  overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                  : isSticky === false
                  ? "  top-41 right-5 fixed overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500  z-10"
                  : "  top-61 right-5  md:hidden absolute  overflow-hidden px-9 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500  z-10"
              }
            >
              {/* النص فوق الطبقة */}
              <span className=" cursor-pointer select-none relative z-10">
                Works
              </span>

              {/* طبقة التعبئة */}
              <span className=" absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </Link>
          <Link href="/skills">
            {" "}
            <motion.button
              onClick={() => {
                cliks(!isClicked, 2);
              }}
              initial={{ x: 100, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 150 }}
              viewport={{ once: false, amount: 0.3 }}
              className={
                pageNumber !== 2
                  ? isSticky === false
                    ? "  top-52 right-5 fixed overflow-hidden px-10 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                    : "  top-72 right-5  md:hidden absolute  overflow-hidden px-10 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                  : isSticky === false
                  ? "  top-52 right-5 fixed overflow-hidden px-10 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500 z-10"
                  : "  top-72 right-5  md:hidden absolute  overflow-hidden px-10 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500 z-10"
              }
            >
              {/* النص فوق الطبقة */}
              <span className=" cursor-pointer select-none relative z-10">
                Skills
              </span>

              {/* طبقة التعبئة */}
              <span className=" absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </Link>
          <Link href="/projects">
            {" "}
            <motion.button
              onClick={() => {
                cliks(!isClicked, 3);
              }}
              initial={{ x: 100, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 50 }}
              viewport={{ once: false, amount: 0.3 }}
              className={
                pageNumber !== 3
                  ? isSticky === false
                    ? "  top-63 right-5 fixed overflow-hidden px-7 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                    : "  top-83 right-5  md:hidden absolute  overflow-hidden px-7 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-blue-900 z-10"
                  : isSticky === false
                  ? "  top-63 right-5 fixed overflow-hidden px-7 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500   z-10"
                  : "  top-83 right-5  md:hidden absolute  overflow-hidden px-7 py-2  mr-2  rounded-xl m-2 hover:text-white text-cyan-200 font-semibold shadow-md group bg-emerald-500   z-10"
              }
            >
              {/* النص فوق الطبقة */}
              <span className=" cursor-pointer select-none relative z-10">
                Projects
              </span>

              {/* طبقة التعبئة */}
              <span className=" absolute left-0 top-0 h-full w-0 bg-emerald-500   opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
}
