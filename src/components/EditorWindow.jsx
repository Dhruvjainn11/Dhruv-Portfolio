// src/components/EditorWindow.jsx
import { AnimatePresence, motion } from "framer-motion";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

export default function EditorWindow({ activeTab ,openFile,openTabs,setActiveTab }) {
  return (
    <div className="flex-1 text-sm overflow-auto p-4 relative min-h-screen bg-transparent">
      <AnimatePresence mode="wait">
        {activeTab === "Intro.me" && (
          <motion.div
            key="about"
            id="Intro.me"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
           <About openFile={openFile} openTabs={openTabs} setActiveTab={setActiveTab} />

          </motion.div>
        )}

        {activeTab === "Stack.tools" && (
          <motion.div
            key="skills"
            id="Stack.tools"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Skills />
          </motion.div>
        )}

        {activeTab === "Project.show" && (
          <motion.div
            key="Projects"
            id="Project.show"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Projects />
          </motion.div>
        )}

        {activeTab === "Contact.connect" && (
          <motion.div
            key="contact"
            id="Contact.connect"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Contact />
          </motion.div>
        )}

        {!activeTab && (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 text-gray-400"
          >
            <p>No file selected. Open a file from the sidebar.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
