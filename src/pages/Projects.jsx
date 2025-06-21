import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "DineFlow",
    description:
      "A real-time restaurant management platform built using the MERN stack, tailored for seamless dine-in experiences.",
    features: [
      "📱 QR-based ordering interface",
      "👨‍🍳 Kitchen dashboard with live order tracking",
      "🧾 Admin panel for managing tables, menus, and payments",
      "🔌 Real-time updates using Socket.IO",
    ],
    tech: ["React", "Redux", "Node.js", "MongoDB", "Socket.IO", "TailwindCSS"],
    github: "https://github.com/yourusername/dineflow",
    live: "", // optional
  },
];

export default function Projects() {
  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
  🚀 My Projects
</h1>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.01 }}
          className="rounded-lg border border-gray-700 bg-[#1e1e1e]/80 p-6 shadow-inner backdrop-blur-md transition-all duration-300 group"
        >
          <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <ul className="list-disc ml-6 text-sm text-gray-400 mb-4 space-y-1">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-gray-700/30 text-gray-300 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm mt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <FaGithub size={16} /> GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FaExternalLinkAlt size={16} /> Live Site
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
