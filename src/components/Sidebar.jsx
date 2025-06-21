// src/components/Sidebar.jsx
import { FileText, Terminal, Mail, Layers } from "lucide-react";
import {motion} from 'framer-motion';

export default function Sidebar({ openFile }) {
  const files = [
    { name: "Intro.me", icon: FileText },
    { name: "Stack.tools", icon: Terminal },
    { name: "Project.show", icon: Layers },
    { name: "Contact.connect", icon: Mail },
  ];

  return (
<div className="w-full  md:w-56 bg-transparent backdrop-blur-lg border-b md:border-r border-white/10 p-4 shadow-inner">
      <h2 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">EXPLORER</h2>
      <ul className="space-y-2">
        {files.map((file) => (
          <motion.li
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            key={file.name}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => openFile(file.name)}
          >
            <file.icon size={16} />
            <span className="text-sm">{file.name}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
