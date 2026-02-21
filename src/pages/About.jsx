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
          I’m a <span className="font-semibold text-cyan-400">full-stack developer</span> passionate about crafting high-performance, scalable, and visually stunning web applications. My journey is fueled by a desire to turn complex problems into elegant, user-friendly solutions.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          With hands-on experience as a Full Stack Intern, I've honed my skills in converting intricate Figma designs into responsive web pages, building robust Role-Based Access Control (RBAC) systems with both <span className="text-white font-medium">MySQL</span> and <span className="text-white font-medium">MongoDB</span>, and developing comprehensive order management systems. My core stack is <span className="text-white font-medium">MERN</span> — MongoDB, Express, React, and Node.js — complemented by <span className="text-white">Redux, TailwindCSS, and Framer Motion</span> for creating modern and dynamic interfaces.
        </p>
      </motion.section>

      {/* Recent Work */}
      <motion.section
        className="space-y-4 mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">🔧 Key Projects & Contributions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-cyan-400">Full-Featured RBAC System</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Engineered a comprehensive Role-Based Access Control (RBAC) system from the ground up, demonstrating my ability to design and implement critical security infrastructure. This project, built with Node.js and Express, supports both MySQL and MongoDB, showcasing my versatility in database management and backend architecture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-400">E-commerce & Restaurant Management Systems</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Developed and contributed to multiple high-impact applications, including <span className="text-white">Annsh</span>, a real-time restaurant management platform, and <span className="text-white">Mahavir Studio</span>, a full-fledged e-commerce site. My work involved translating Figma designs into pixel-perfect UIs, implementing features like digital menus, order tracking, and secure payment gateways, and building scalable admin panels.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="pt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-base text-gray-400 leading-relaxed">
          I am passionate about building solutions that are not only functional and scalable but also provide a seamless user experience. Let's connect and create something amazing together.
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
