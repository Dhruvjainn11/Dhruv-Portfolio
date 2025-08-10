import { motion } from "framer-motion";

export default function About({ openFile, setActiveTab, openTabs }) {
  const scrollToContact = () => {
    const tabName = "Contact.connect";

    if (!openTabs.includes(tabName)) openFile(tabName);
    setActiveTab(tabName);

    setTimeout(() => {
      const section = document.getElementById(tabName);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return (
    <motion.div
      className="px-4 sm:px-6 py-6 max-w-4xl mx-auto text-left text-gray-300 space-y-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Intro */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Hey, I'm Dhruv 👋
      </h1>

      <motion.section
        className="space-y-3 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-base md:text-lg leading-relaxed">
          I’m a <span className="font-semibold text-cyan-400">full-stack developer</span> passionate about crafting high-performance, scalable, and visually stunning web applications.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          My core stack is <span className="text-white font-medium">MERN</span> — MongoDB, Express, React, and Node.js — powered with{" "}
          <span className="text-white">Redux, TailwindCSS, and Framer Motion</span> for modern, dynamic interfaces.
        </p>
      </motion.section>

      {/* Recent Work */}
      <motion.section
        className="space-y-3 mt-6 border-l-4 border-cyan-500 pl-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white">🔧 Recent Work</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          Recently, I built <span className="text-white font-semibold">Mahavir Studio</span> — an e-commerce platform for selling premium hardware products. 
          It features a modern product catalog, secure checkout, and responsive design for a seamless shopping experience.
        </p>
        <p className="text-base text-gray-400 leading-relaxed">
          I also developed <span className="text-white font-semibold">DineFlow</span>, a real-time restaurant management system enabling QR-code ordering, kitchen order tracking, and complete admin control over operations.
        </p>
      </motion.section>

      {/* What Drives Me */}
      <motion.section
        className="space-y-3 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-white">🚀 What Drives Me</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          I learn best by building. My focus right now is mastering{" "}
          <span className="text-white">complex animations, responsive UI patterns, and robust backend architectures</span>.
          This portfolio reflects my journey — hand-crafted to represent who I am as a developer.
        </p>
      </motion.section>

      {/* Closing */}
      <motion.section
        className="pt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="italic text-gray-500 border-t border-gray-700 pt-4">
          “Great software is crafted — not just coded.” 🧠
        </p>

        <button
          onClick={scrollToContact}
          className="inline-block mt-4 px-4 py-2 border border-cyan-400 hover:bg-cyan-500 hover:text-white text-cyan-400 rounded-lg transition"
        >
          Let's Connect
        </button>
      </motion.section>
    </motion.div>
  );
}
