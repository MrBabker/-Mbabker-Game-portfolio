import { motion } from "framer-motion";

export default function Home() {
  const bungeef = {
    fontFamily: "var(--font-bungee), sans-serif",
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <section className="text-justify z-10  ml-7 relative  shadow-2xl text-gray-600 bg-amber-50/90 hover:bg-amber-50 md:w-[480px] p-5 rounded-br-2xl rounded-bl-2xl rounded-tr-4xl h-52 hover:h-162  md:hover:h-112  transition-all duration-500 overflow-hidden">
          <span className="font-extrabold"> I am MOHAMMED BABIKER</span>
          <br />A passionate Frontend, Full-stak Developer with a strong focus
          on building modern, responsive web applications using
          <span style={bungeef} className=" text-gray-600 ">
            {" "}
            Next.js
          </span>
          ,{" "}
          <span style={bungeef} className=" text-cyan-600">
            {" "}
            React
          </span>
          , and{" "}
          <span style={bungeef} className=" text-blue-700">
            {" "}
            Tailwind CSS
          </span>
          . I love turning ideas into elegant user interfaces and continuously
          learning new technologies to improve my work. I aim to contribute to
          impactful projects and grow within innovative teams.
          <br />I have diverse and extensive experience in analysis, planning,
          software application design, and programming. I am highly passionate
          and motivated to continue learning and gaining expertise, particularly
          in Artificial Intelligence, Business Analysis, and Business
          Management. I aim for a deep and comprehensive understanding of these
          fields and their integration.
          {/* طبقة التدرج السفلي */}
          <div className=" absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-amber-50/90  rounded-2xl to-transparent pointer-events-none"></div>
        </section>
      </motion.div>
    </motion.div>
  );
}
