"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BouncyText from "./BouncyText";
import NavBar from "./NavBar";
import Options from "./Options";
import Link from "next/link";
import { autoContext } from "@/components/Context";
//2761F5

export default function Home() {
  const context = useContext(autoContext);

  if (!context) throw new Error("autoContext not found");
  const { pageNumber, setPagenumber } = context;

  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };
  const [rotating, setIsrotating] = useState(false);
  useEffect(() => {
    setPagenumber(3);
  }, []);

  return (
    <section className="  h-full  w-full ">
      <section></section>
      <section className="  h-full   md:justify-items-start justify-items-center w-full  ">
        <section className="  relative w-full pb-7 rounded-bl-2xl rounded-br-4xl rounded-tr-xs bg-gradient-to-b from-[#002e67] via-[#4590FE] to-[#A0C8FF] overflow-hidden ">
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
              className="   text-white text-5xl md:text-6xl p-5 mt-7 text-center  font-bold  select-none h-[20%] md:h-[10%] bg-blue-950/0   rounded-2xl "
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
                <BouncyText text="Projects" col="w" />
              </div>
            </motion.button>
          </div>
        </section>

        <section className=" p-3 mt-3 w-full h-full  ">
          <section className="  p-3 w-[98%]  shadow-2xl   ">
            {" "}
            <section className=" md:flex  w-full  justify-items-center justify-center">
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2"
                    alt="Tabx"
                    src="/Tabx.png"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="itcho"
                      src="/itcho.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-2xl mt-2  "
                    >
                      Tabx
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      A simplified strategy battle game inspired by TABS
                      (Totally Accurate Battle Simulator). In this game, the
                      player strategically places units within a designated zone
                      to form their own army. Once the battle starts, their
                      fighters automatically engage with the enemy units
                      positioned on the opposing side. The goal is to eliminate
                      all enemy forces using smart unit placement and tactical
                      thinking.
                      <br className="select-none" />
                      <br className="select-none" />
                      <br className="select-none" />
                      <br className="select-none" />
                    </p>
                  </div>
                  <div className=" mt-3">
                    <Link href="https://mbabker.itch.io/followers-game">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="TacticalWarefare"
                    src="/twh.jpg"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="Steam"
                      src="/steam.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      Tactical Warfare
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      The tactical war game is a strategic game with a classic
                      perspective system and an enhanced artistic style,
                      featuring an exciting story about a war between two
                      forces, both human, but one group comes from a parallel
                      planet to Earth after the destruction of their planet,
                      seeking a new home. They face resistance from the
                      indigenous inhabitants who consider it an alien invasion.
                      To excel in the game, you must create a tactical battle
                      plan. Based on that plan, you must balance between
                      defense, offense, and resource acquisition.
                    </p>
                  </div>
                  <div className=" mt-3">
                    <Link href="https://store.steampowered.com/app/2599770/Tactical_Warfare/">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="TVs: The Awakening"
                    src="/tvs.jpg"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="Steam"
                      src="/steam.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      TVs: The Awakening
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      TVs is a single player platformer game, focuses on a
                      journey of a tv character called “u” who needs to drive
                      his way on strange events to solve mysterious puzzles till
                      he finds the truth. unknown character appears to the
                      player on the televisions and radios in the game
                      environment and speaks to the player to guide him.The game
                      requires running, jumping, crouching, hanging and most
                      important timing skills to pass the puzzles and need to
                      pay attention to the small details where you may find a
                      clue to move forward.
                    </p>
                  </div>
                  <div className=" mt-3">
                    <Link href="https://store.steampowered.com/app/2063050/TVs_The_Awakening/">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
            </section>
            <section className=" md:flex  w-full  justify-items-center justify-center">
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="SUBS"
                    src="/subs.png"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="Steam"
                      src="/steam.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      SUBS
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      Social Climb is a simple yet challenging precision
                      platformer. You play as a young dreamer who wants to
                      become an internet star, starting his journey from his
                      bedroom and his personal computer, chasing the dream of
                      reaching 10 million subscribers. Every step, every jump,
                      and every like brings you closer to the top… or sends you
                      crashing down.
                    </p>
                  </div>
                  <br className="select-none" />
                  <div className=" mt-3">
                    <Link href="https://store.steampowered.com/app/3784950/SUBS/">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="Dragon ball"
                    src="/db.png"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="itcho"
                      src="/itcho.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      Fighters
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      A casual fighting game featuring well-known fighters. This
                      game offers fast-paced, action-packed battles between
                      iconic characters from various universes. With simple
                      controls and smooth animations, players can jump into
                      quick matches and enjoy dynamic one-on-one combat. Whether
                      you are a casual gamer or a fan of classic fighters, this
                      game delivers fun and familiarity in every round.
                    </p>
                  </div>
                  <div className=" mt-3">
                    <br className=" select-none" />
                    <Link href="https://mbabker.itch.io/fighters">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="Stickman"
                    src="/stk.png"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="itcho"
                      src="/itcho.png"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      Stickman Fighters
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      It is a simple fighting style game that talks about
                      Stickman character and whoever is with him in this game,
                      each character has its own style and gameplay, and each of
                      them has his own strength (that can be modified).The story
                      of Stickman and his friends, in this game the story is in
                      the form of paragraphs that you can read and then enter
                      the battlefield in order to start playing.
                    </p>
                  </div>
                  <br className=" select-none" />
                  <div className=" mt-3">
                    <Link href="https://mbabker.itch.io/stick-fighters">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
            </section>
            <section className=" md:flex  w-full  justify-items-center justify-center">
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="Afrsho"
                    src="/afr.jpeg"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" flex  mt-4  p-2">
                    {" "}
                    <Image
                      className=" rounded-2xl w-10 h-10 mr-5"
                      alt="play Store"
                      src="/gpl.jpg"
                      width={100}
                      height={20}
                    ></Image>
                    <div
                      style={bungeef}
                      className=" select-text  text-justify text-xl md:text-2xl mt-2 w-full "
                    >
                      Afrsho
                    </div>
                  </div>
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      Team up, fight in PvP battles, unlock characters &
                      mini-games. Fun, fast & free! Afrsho is the ultimate PvP
                      squad battle game! Build your dream team from unique
                      characters and crush your enemies in real-time fights.
                      Main Mode: Choose your squad, use special skills, and
                      enter fast-paced PvP battles. Outsmart your opponents,
                      collect loot, and dominate the arena!
                    </p>
                  </div>
                  <div className=" mt-3">
                    <br className=" select-none" />
                    <Link href="https://play.google.com/store/apps/details?id=sa.naphora.afrsho&pli=1">
                      <motion.button
                        initial={{ y: -60, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        className="  w-[100%] cursor-pointer relative overflow-hidden px-6 py-2 rounded-xl text-white hover:text-white font-semibold shadow-md group bg-emerald-700/50"
                      >
                        {/* النص فوق الطبقة */}
                        <span className="select-none relative z-10">
                          {" "}
                          Link to the game 🌐
                        </span>

                        {/* طبقة التعبئة */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-sky-500  opacity-100 z-0 transition-all duration-500 group-hover:w-full"></span>
                      </motion.button>
                    </Link>
                  </div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -50, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 60 }}
                className=" relative w-[100%]  md:w-[40%]  overflow-hidden m-2 rounded-xl bg-amber-50 font-semibold shadow-md group  transition-all duration-20
                 "
              >
                {" "}
                <div className=" p-3">
                  {" "}
                  <Image
                    className=" rounded-2xl shadow-xl p-1 mt-2 h-30"
                    alt="Nizal"
                    src="/niz.png"
                    width={200}
                    height={200}
                  ></Image>
                  {/* النص فوق الطبقة */}
                  <div className=" text-justify mt-2 p-2 ">
                    {" "}
                    <p>
                      A fun-styled strategy game packed with cutting-edge
                      mechanics and rich in features. This game blends enjoyable
                      visuals with deep strategic gameplay, offering players a
                      fresh experience full of powerful abilities, unique
                      mechanics, and tactical possibilities. From deploying
                      units to unleashing special powers mid-battle, every match
                      feels dynamic and full of surprises.
                    </p>
                  </div>
                  <br className="select-none" />
                  <div className=" mt-3">Still working in it</div>
                  {/* طبقة التعبئة */}
                </div>
              </motion.div>
            </section>
          </section>
        </section>
      </section>
      <NavBar />
      <Options />
    </section>
  );
}
