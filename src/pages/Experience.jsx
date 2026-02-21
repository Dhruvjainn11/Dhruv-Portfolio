import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      className="px-4 sm:px-6 py-6 max-w-4xl mx-auto text-left text-gray-300 space-y-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Work Experience
      </h1>

      <motion.section
        className="space-y-3 mt-6 border-l-4 border-cyan-500 pl-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold text-white">Full Stack Intern</h2>
        <p className="text-base text-gray-400 leading-relaxed">
          <span className="font-semibold text-cyan-400">Optimity Logics</span> | Nov 2025 - Feb 2026
        </p>
        <ul className="list-disc list-inside text-base text-gray-400 leading-relaxed space-y-2">
          <li>Converted Figma designs into pixel-perfect, responsive webpages using HTML, CSS, and React.</li>
          <li>Built a complete Role-Based Access Control (RBAC) system from scratch, implementing it with both MySQL and MongoDB to compare performance and scalability.</li>
          <li>Developed a full-featured order management system which included:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Product listing with dynamic searching and sorting capabilities.</li>
              <li>Shopping cart functionality to add, remove, and manage items.</li>
              <li>A streamlined order placement and checkout process.</li>
              <li>Order management dashboard for tracking and updating order statuses.</li>
            </ul>
          </li>
          <li>Gained hands-on experience in both frontend and backend development, bridging the gap between design and implementation.</li>
        </ul>
      </motion.section>
    </motion.div>
  );
}
