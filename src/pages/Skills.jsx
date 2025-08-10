import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { skillsData } from "../data/skillsData";

const iconLibraries = { ...FaIcons, ...SiIcons, ...MdIcons };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.div
      className="space-y-12 p-6 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-2xl font-bold text-lime-400 border-b border-lime-400/50 pb-2 inline-block">
        🧠 Tech Skills
      </h1>

      {skillsData.map(({ category, items }) => (
        <motion.div
          key={category}
          className="space-y-5 pb-6 border-b border-white/5 last:border-none"
        >
          <h2 className="text-lg font-semibold text-gray-300 tracking-wide">
            {category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {items.map(({ name, icon, color }) => {
              const IconComponent = iconLibraries[icon];
              return (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 4px 14px rgba(132, 255, 167, 0.2)",
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg 
                    backdrop-blur-sm bg-white/5 border border-white/10 
                    hover:border-lime-400/40 transition-all duration-300"
                >
                  {IconComponent && (
                    <IconComponent
                      className={`text-3xl mb-2 opacity-90 ${color}`}
                    />
                  )}
                  <span className="text-sm text-gray-200">{name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
