"use client";
import { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import BouncyText from "./BouncyText";

import NavBar from "./NavBar";
import HeadBar from "./HeadBar";
import Options from "./Options";

import { autoContext } from "@/components/Context";
//2761F5
export default function Home() {
  const context = useContext(autoContext);

  if (!context) throw new Error("Undefide !");

  const { pageNumber, setPagenumber } = context;

  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };
  const [rotating, setIsrotating] = useState(false);
  useEffect(() => {
    setPagenumber(2);
  }, []);

  return (
    <section className="   object-cover max-h-full md:h-screen  w-full bg-gradient-to-b from-cyan-100 via-blue-500 to-cyan-500 ">
      <HeadBar />
      <div className="h-10"></div>
      <section className=" justify-items-center w-full  ">
        {/*<section>
            <Image
              alt="animate_BackGround"
              src="/ptb.gif"
              fill
              className="object-cover z-0 opacity-10 "
            />
          </section>*/}
        <div className="h-20"></div>
        <div className=" mb-10 w-full flex  justify-items-center justify-center">
          <motion.div
            style={bungeef}
            className="   text-whit text-3xl shadow-2xl md:shadow-2xs/0 md:text-6xl p-5 mt-7 text-center  font-bold  select-none h-[20%] md:h-[10%] bg-blue-950/0   rounded-2xl "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div>
              <BouncyText text="My Skills" col="w" />
            </div>
          </motion.div>
        </div>
        <div className=" md:flex w-full justify-items-center justify-center">
          <motion.div
            className=" p-4  rounded-full "
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
            <motion.button
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className=" relative w-20 h-20 overflow-hidden p-4 rounded-full text-white hover:text-white font-semibold shadow-md group bg-gray-50"
            >
              <Image
                alt="blender"
                src="/bln.png"
                width={50}
                height={50}
              ></Image>
            </motion.button>
          </motion.div>

          <motion.div
            className=" p-4  rounded-full "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className=" relative w-40 h-17 p-3 rounded-full text-white hover:text-white font-semibold shadow-md group bg-gray-50"
            >
              <Image
                alt="photon"
                src="/phot.png"
                width={100}
                height={100}
              ></Image>
            </motion.button>
          </motion.div>

          <motion.div
            className=" p-4  rounded-full "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=" relative w-20 h-20 p-4 rounded-full text-white hover:text-white font-semibold shadow-md group bg-gray-50"
            >
              {" "}
              <Image alt="unity" src="/un.png" width={50} height={50}></Image>
            </motion.button>
          </motion.div>

          <motion.div
            className=" p-4  rounded-full "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              style={bungeef}
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100 }}
              className=" relative w-40 h-18 p-3 rounded-full text-xl text-gray-500 shadow-md group bg-gray-50"
            >
              <div className=" flex">
                <Image
                  alt="Csharp"
                  src="/Csh.png"
                  width={50}
                  height={50}
                ></Image>

                <div>
                  <div className="mt-3"></div>: Unity
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>
        <div className=" md:flex w-full justify-items-center justify-center">
          <motion.div
            className=" p-4  rounded-full "
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
            <motion.button
              style={bungeef}
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 600 }}
              className=" relative overflow-hidden text-xl p-4 rounded-full text-gray-600   shadow-md group bg-gray-50"
            >
              🎮 PC Games
            </motion.button>
          </motion.div>

          <motion.div
            className=" p-4  rounded-full "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              style={bungeef}
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500 }}
              className=" relative overflow-hidden text-xl p-4 rounded-full text-gray-600   shadow-md group bg-gray-50"
            >
              🎮 Mobile Games
            </motion.button>
          </motion.div>

          <motion.div
            className=" p-4  rounded-full "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={{ y: -56, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 50 }}
              className=" relative w-20 h-20 overflow-hidden p-4 rounded-full text-white hover:text-white font-semibold shadow-md group bg-gray-50"
            >
              <Image
                alt="playfab"
                src="/plyf.png"
                width={50}
                height={50}
              ></Image>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <div className="h-20"></div>

      <NavBar />
      <Options />
    </section>
  );
}
