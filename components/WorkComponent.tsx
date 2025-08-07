"use client";
import { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";

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
import { autoContext } from "@/components/Context";

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
    <section className="bg-cyan-400">
      <section className="w-full h-200 relative bg-gradient-to-b from-blue-950 via-blue-500 to-cyan-400">
        <HeadBar />
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200 "
        >
          <path
            fill="white"
            d="M0,0 C480,200 960,-100 1440,200 L1440,300 L0,300 Z"
          />
        </svg>
        <div className=" flex ">
          {" "}
          <div className=" hidden md:block w-12 ml-5  h-1/6  md:w-30.5 md:ml-0">
            {" "}
            <Canvas camera={{ fov: 35, near: 0.1, far: 1000 }}>
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight />
                <spotLight />
                <hemisphereLight
                  skyColor="#b1e1ff"
                  groundColor="#000000"
                  intensity={2}
                />
                <Coin />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minDistance={2} // أقرب شي تقدر تزوم فيه
                  maxDistance={10} // أبعد شي تقدر تزوم له
                  rotateSpeed={0}
                />{" "}
                {/* ✨ هذا المهم */}
              </Suspense>
            </Canvas>
          </div>
          <motion.button
            style={bungeef}
            className="  text-white text-3xl p-5 mt-7  font-bold  select-none h-[20%] md:h-[10%] bg-blue-950/0  shadow-2xl rounded-2xl "
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
              <BouncyText text="  Mohammed Babiker Alamin Alsunni" col="w" />
            </div>
          </motion.button>
          <div className=" hidden md:block w-[5%]"></div>
          <NavBar />
        </div>
        <div className=" flex  md:h-100 ">
          <div className=" p-10 w-full md:w-[930px]">
            {/* Summary */}
            <div className="flex">
              <div className=" w-20 h-20">
                {" "}
                <Canvas camera={{ fov: 35, near: 0.1, far: 1000 }}>
                  <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight
                      skyColor="#b1e1ff"
                      groundColor="#000000"
                      intensity={2}
                    />
                    <MarioCoin />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      minDistance={2} // أقرب شي تقدر تزوم فيه
                      maxDistance={10} // أبعد شي تقدر تزوم له
                      rotateSpeed={0}
                    />{" "}
                    {/* ✨ هذا المهم */}
                  </Suspense>
                </Canvas>
              </div>
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <strong
                  style={bungeef}
                  className="text-amber-300 text-2xl w-full mt-5 
                   "
                >
                  Who am i ?
                </strong>
              </motion.button>
            </div>
            <div className="  hidden md:block">
              <WhoAmI />
            </div>
          </div>
          <div className=" md:w-full  justify-items-center">
            {" "}
            <div className=" hidden md:block w-80 h-90">
              {/* PC Cube */}
              <Canvas
                className=" hover:cursor-grab "
                camera={{ fov: 35, near: 0.1, far: 1000 }}
              >
                <Suspense fallback={<Loader />}>
                  <directionalLight position={[1, 1, 1]} intensity={2} />
                  <ambientLight intensity={0.5} />
                  <pointLight />
                  <spotLight />
                  <hemisphereLight
                    skyColor="#b1e1ff"
                    groundColor="#000000"
                    intensity={2}
                  />
                  <Rubiks />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={2} // أقرب شي تقدر تزوم فيه
                    maxDistance={10} // أبعد شي تقدر تزوم له
                    rotateSpeed={0}
                  />{" "}
                  {/* ✨ هذا المهم */}
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        <MobileCube />
        <WhoImIPhone />
        <div className="md:hidden flex h-2/4"></div>
      </section>
      <section className="p-5 bg-gradient-to-b from-white to-amber-100 md:justify-items-start justify-items-center w-full ">
        <div>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <strong
              style={bungeef}
              className="text-cyan-500 text-3xl w-full md:ml-10 "
            >
              Software enginnering
            </strong>
          </motion.button>
        </div>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", stiffness: 100 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="p-10 text-amber-700 text-justify text-lg">
            I am a software engineer specializing in systems analysis, with a
            solid understanding of building full-stack web applications using
            <span className=" text-gray-700 font-extrabold"> Next.js</span>. I
            have experience integrating front-end and back-end systems, and
            working with various databases such as{" "}
            <span className=" text-cyan-600 font-extrabold"> MongoDB</span> and
            <span className=" text-blue-800 font-extrabold"> PostgreSQL</span>.
            My backend development skills include using{" "}
            <span className=" text-green-600 font-extrabold"> Node.js</span> to
            create scalable APIs and manage server-side logic. This combination
            of expertise allows me to develop robust, efficient, and data-driven
            web applications from start to finish.
          </p>
        </motion.button>
      </section>
      <Options />
    </section>
  );
}
