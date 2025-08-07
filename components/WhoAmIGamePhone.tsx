import { motion } from "framer-motion";

export default function Home() {
  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };

  return (
    <div className="">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <section className="text-justify z-10 m-5 md:hidden absolute shadow-2xl text-gray-600 bg-amber-50/80 hover:bg-amber-50 md:w-[400px] p-5 rounded-br-2xl rounded-bl-2xl rounded-tr-4xl h-52 hover:h-222  md:hover:h-112  sm:hover:h-142 transition-all duration-500 overflow-hidden">
            <span className="font-extrabold"> I am MOHAMMED BABIKER</span>
            <br />I am a highly skilled Software Engineer and Game Developer
            with a strong focus on systems analysis and gameplay architecture. I
            have extensive hands-on experience with the Unity engine, and I
            specialize in developing both offline and multiplayer online games
            for PC and mobile platforms. Over the years, I have collaborated
            with several game studios on a variety of projects published on
            platforms such as Google Play and Steam. Throughout my journey, I
            have worked with a wide range of development tools and services,
            including platform-specific tools like the Steamworks SDK for Steam
            integration and Google Play Console tools for mobile deployment and
            services. I also have experience with external backend solutions
            such as PlayFab, which I’ve used to implement features like cloud
            saving, authentication, leaderboards, and in-game economy systems.
            My deep understanding of networking frameworks such as NetCode and
            Photon has enabled me to build robust and scalable multiplayer
            experiences across different platforms. I approach game development
            with a systems-thinking mindset, focusing on clean architecture,
            reusability, and performance optimization. Whether working
            independently or as part of a team, I bring a passion for building
            engaging and technically sound gameplay systems.
            {/* طبقة التدرج السفلي */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-amber-50/90  rounded-2xl to-transparent pointer-events-none"></div>
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}
