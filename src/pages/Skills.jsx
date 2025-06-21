import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiSocketdotio } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const skills = {
  "Frontend": [
    { name: "HTML", icon: <span className="text-orange-400 font-bold">HTML</span> },
    { name: "CSS", icon: <span className="text-blue-400 font-bold">CSS</span> },
    { name: "JavaScript", icon: <span className="text-yellow-300 font-bold">JS</span> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Framer Motion", icon: <span className="text-pink-300 font-bold">FM</span> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
  ],
  "Tools & Utilities": [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <span className="text-orange-500 font-bold">Postman</span> },
    { name: "JWT", icon: <span className="text-green-300 font-bold">JWT</span> },
    { name: "Cloudinary", icon: <span className="text-blue-200 font-bold">CDN</span> },
  ],
  "Other Skills": [
    { name: "REST APIs", icon: <span className="text-teal-300 font-bold">API</span> },
    { name: "Responsive Design", icon: <span className="text-indigo-300 font-bold">📱</span> },
    { name: "State Management", icon: <span className="text-yellow-200 font-bold">State</span> },
  ],
};


export default function Skills() {
  return (
    <motion.div
      className="space-y-6 p-6 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-xl font-bold text-lime-400">🧠 Tech Skills</h1>

      {Object.entries(skills).map(([category, skillList]) => (
        <motion.div key={category} className="space-y-2">
          <h2 className="text-md font-semibold text-gray-300">{category}</h2>
          <div className="flex flex-wrap gap-4">
            {skillList.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-md"
              >
                <div className="text-lg">{skill.icon}</div>
                <span className="text-sm text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
