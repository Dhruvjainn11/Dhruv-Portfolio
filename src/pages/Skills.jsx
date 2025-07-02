import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, } from "react-icons/fa";
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
    { name: "Next.js", icon: (
  <svg
    viewBox="0 0 148 90"
    fill="currentColor"
    className="w-5 h-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M34.992 23.495h8.588v42.472h-8.588V23.495ZM64.6 30.344c-1.939 0-3.535 1.416-4.238 3.113h-.077V31.58H52.53v34.386h7.755V46.98c0-3.525 1.332-6.351 4.008-6.351 2.48 0 3.535 2.022 3.535 5.065v20.272h7.755V45.694c0-8.363-4.006-12.084-10.983-12.084ZM82.137 39.032c2.25 0 3.525 1.178 3.996 3.055h-7.49c.472-1.877 1.75-3.055 3.494-3.055Zm.707-8.688c-8.363 0-12.89 6.273-12.89 13.936 0 7.663 4.527 13.936 12.89 13.936 5.53 0 8.048-2.1 9.805-4.367l-5.883-4.296c-1.06 1.296-1.86 2.133-3.992 2.133-2.633 0-4.344-1.76-4.716-4.677h15.272v-1.178c0-8.097-4.344-15.487-11.486-15.487Zm31.425 8.637h-7.62c.404-2.016 2.078-3.049 3.801-3.049 1.493 0 2.662.723 3.816 2.49l5.606-4.344c-2.1-3.201-5.486-4.61-9.42-4.61-7.382 0-12.598 5.883-12.598 13.936 0 8.053 5.216 13.936 12.675 13.936 4.973 0 7.621-2.195 9.53-5.065l-5.924-3.816c-.934 1.493-2.031 2.547-3.606 2.547-1.965 0-3.637-1.493-4.055-3.492h15.291v-1.265c0-3.611-.799-6.251-2.5-8.263Z"/>
    <path d="M114.91 23.494h8.588v42.472h-8.588V23.494Z"/>
    <path fill="currentColor" d="M0 0h1.855l124.646 89.163-1.461 1.837L0 0Z"/>
  </svg>
)},

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
