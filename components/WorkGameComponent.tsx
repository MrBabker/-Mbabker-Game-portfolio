"use client";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Skyland from "@/moduls/Skyland";
import Sky from "@/moduls/Sky";
import Bird from "@/moduls/Bird";
import Plane from "@/moduls/Plane";
import Coin from "@/moduls/Coin";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import Rubiks from "@/moduls/Rubiks";
import BouncyText from "./BouncyText";
import MarioCoin from "@/moduls/MarioCoin";
import WhoAmI from "./WhoAmI";
import WhoImIPhone from "./WhoImIPhone";
import MobileCube from "./MobileCube";
import NavBar from "./NavBar";
import HeadBar from "./HeadBar";
import Options from "./Options";
import WhoAmIGamePhone from "./WhoAmIGamePhone";
import WhoAmIGame from "./WhoAmIGame";
import Link from "next/link";
import { autoContext } from "@/components/Context";
//2761F5
export default function Home() {
  const { pageNumber, setPagenumber } = useContext(autoContext);

  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };
  const [rotating, setIsrotating] = useState(false);
  useEffect(() => {
    setPagenumber(1);
  }, []);

  return (
    <section className="  h-full  w-full ">
      <section>
        <HeadBar />
      </section>
      <section className="  h-full p-5  md:justify-items-start justify-items-center w-full  ">
        <section className="  relative w-full pb-7 rounded-bl-2xl rounded-br-4xl rounded-t-3xl bg-gradient-to-b from-[#4590FE] via-[#4590FE] to-[#A0C8FF] overflow-hidden ">
          <Image
            alt="animate_BackGround"
            src="/bg.gif"
            fill
            className="object-cover z-0 opacity-20 "
          />
          <div className="h-20"></div>
          <div className=" w-full flex  justify-items-center justify-center">
            <motion.button
              style={bungeef}
              className="   text-white text-6xl p-5 mt-7 text-center  font-bold  select-none h-[20%] md:h-[10%] bg-blue-950/0   rounded-2xl "
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
                <BouncyText text="Where did i work ?" col="w" />
              </div>
            </motion.button>
          </div>
        </section>

        <br />
        <br />
        <br />
        <section>
          <div className=" w-full">
            <div className=" justify-items-center md:justify-items-start ">
              <div>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <strong
                    style={bungeef}
                    className="text-cyan-500 text-3xl  md:ml-6   "
                  >
                    <a>Break Logic studios</a>
                  </strong>
                </motion.button>
              </div>
              <div className=" mt-3">
                <Link href="https://breaklogic249.com/">
                  <motion.button
                    initial={{ y: -60, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="  cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                  >
                    {/* النص فوق الطبقة */}
                    <span className="select-none relative z-10">
                      {" "}
                      Link to the company website 🌐
                    </span>

                    {/* طبقة التعبئة */}
                    <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className=" md:hidden block overflow-hidden w-[100%] mt-5">
              <motion.div
                className=" justify-items-center w-[100%]"
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Image
                  alt="BreakLogic image"
                  src="/bbl.png"
                  width={250}
                  height={100}
                  className="p-2 ml-3 "
                ></Image>
              </motion.div>
            </div>
            <div className=" md:flex z-10">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 100, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="p-10 text-gray-500 text-justify text-lg  shadow-lg">
                  Designed and developed various game projects at{" "}
                  <a className=" font-extrabold">Breaklogic </a>
                  using Unity, including platformer, strategy, and online
                  multiplayer games. Responsibilities included implementing core
                  gameplay mechanics, designing game architecture, and
                  integrating backend services such as Steam SDK and PlayFab for
                  player authentication, matchmaking, cloud saves, and real-time
                  analytics. Focused on delivering smooth multiplayer
                  experiences and scalable backend systems to support online
                  features across different genres.
                </p>
              </motion.div>
              <div className=" hidden md:block overflow-hidden w-[100%]">
                <motion.div
                  className=" justify-items-center w-[100%]"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Image
                    alt="BreakLogic image"
                    src="/bbl.png"
                    width={250}
                    height={100}
                    className="p-2 ml-3 "
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className=" w-full">
            <div className=" justify-items-center md:justify-items-start ">
              <div>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <strong
                    style={bungeef}
                    className="text-amber-700 text-3xl  md:ml-6   "
                  >
                    <a>Mizrab Studio</a>
                  </strong>
                </motion.button>
              </div>
              <div className=" mt-3">
                <Link href="https://www.mizrab.co/">
                  <motion.button
                    initial={{ y: -60, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="  cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                  >
                    {/* النص فوق الطبقة */}
                    <span className="select-none relative z-10">
                      {" "}
                      Link to the company website 🌐
                    </span>

                    {/* طبقة التعبئة */}
                    <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className=" md:hidden block overflow-hidden w-[100%] mt-5">
              <motion.div
                className=" justify-items-center w-[100%]"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Image
                  alt="Mizrab image"
                  src="/mizz.png"
                  width={250}
                  height={100}
                  className="p-2 ml-3 "
                ></Image>
              </motion.div>
            </div>
            <div className=" md:flex z-10">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                //animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="p-10  text-gray-500 text-justify text-lg shadow-lg ">
                  Led the development of two major game projects at{" "}
                  <a className="font-extrabold">Mizrab</a> using Unity: a
                  large-scale online strategy game featuring real-time
                  multiplayer, advanced backend integration with Steam SDK and
                  PlayFab, and detailed game systems; and a professionally
                  crafted platformer game focused on tight controls, polished
                  level design, and engaging gameplay. Worked extensively on
                  gameplay mechanics, UI/UX, backend connectivity, and
                  performance optimization to ensure a seamless player
                  experience across both projects.
                </p>
              </motion.div>
              <div className=" hidden md:block overflow-hidden w-[100%]">
                <motion.div
                  className=" justify-items-center w-[100%]"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Image
                    alt="Mizrab image"
                    src="/mizz.png"
                    width={250}
                    height={100}
                    className="p-2 ml-3 "
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className=" w-full">
            <div className=" justify-items-center md:justify-items-start ">
              <div>
                <motion.button
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <strong
                    style={bungeef}
                    className="text-purple-600 text-3xl  md:ml-6   "
                  >
                    <a>Rahebeen Studio</a>
                  </strong>
                </motion.button>
              </div>
              <div className=" mt-3">
                <Link href="https://raheebeen.com/en/">
                  <motion.button
                    initial={{ y: -60, opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="  cursor-pointer relative overflow-hidden px-6 py-2 m-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                  >
                    {/* النص فوق الطبقة */}
                    <span className="select-none relative z-10">
                      {" "}
                      Link to the company website 🌐
                    </span>

                    {/* طبقة التعبئة */}
                    <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className=" md:hidden block overflow-hidden w-[100%] mt-5">
              <motion.div
                className=" justify-items-center w-[100%]"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Image
                  alt="Rahebeen image"
                  src="/rah.png"
                  width={250}
                  height={100}
                  className="p-2 ml-3 "
                ></Image>
              </motion.div>
            </div>
            <div className=" md:flex z-10">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                //animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="p-10  text-gray-500 text-justify text-lg shadow-lg ">
                  I worked as a gameplay programmer on Afrsho, a large-scale PvP
                  challenger developed by{" "}
                  <a className="font-extrabold">Rahebeen Studio</a>, where I
                  contributed to core gameplay mechanics, networking systems,
                  and backend integration. I also collaborated with the studio
                  team on additional projects, supporting gameplay features,
                  user interface, and performance optimization across various
                  games.
                </p>
              </motion.div>
              <div className=" hidden md:block overflow-hidden w-[70%] right-0">
                <motion.div
                  className=" justify-items-center w-[100%]"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Image
                    alt="Rahebeen image"
                    src="/rah.png"
                    width={250}
                    height={100}
                    className="p-2 ml-3 "
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <NavBar />
      <Options />
    </section>
  );
}
