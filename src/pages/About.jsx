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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hey, I'm Dhruv 👋</h1>

      <motion.section
        className="space-y-3 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-base md:text-lg leading-relaxed">
          I’m a <span className="font-semibold text-cyan-400">full-stack developer</span> focused on building fast, reliable, and beautiful web applications.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          My core stack is <span className="text-white font-medium">MERN</span> — MongoDB, Express, React, and Node.js. I enjoy using tools like{" "}
          <span className="text-white">Redux, TailwindCSS, and Framer Motion</span> to craft modern UIs and seamless experiences.
        </p>
      </motion.section>

      <motion.section
        className="space-y-3 mt-6 border-l-4 border-cyan-500 pl-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white">🔧 Recent Work</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          I recently built <span className="text-white font-semibold">DineFlow</span> — a real-time restaurant management system. It enables customers to order via QR codes, helps kitchen staff track orders, and gives admins full control over dine-in operations.
        </p>
      </motion.section>

      <motion.section
        className="space-y-3 mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-white">🚀 What Drives Me</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          I learn best by building. I’m currently diving deeper into <span className="text-white">animations, responsive design, and advanced backend patterns</span>.
          This portfolio is part of that journey — built from scratch to reflect who I am as a developer.
        </p>
      </motion.section>

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
