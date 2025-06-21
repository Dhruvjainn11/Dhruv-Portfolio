// src/components/TabBar.jsx
import { X } from "lucide-react";
import {motion , AnimatePresence} from 'framer-motion';

export default function TabBar({ openTabs, activeTab, setActiveTab, closeFile }) {
  return (
    <div className="flex  h-10 bg-transparent border-b border-gray-700 overflow-x-auto items-center px-2 whitespace-nowrap">
      {openTabs.length === 0 ? (
        <p className="text-gray-500 text-sm">No tabs open</p>
      ) : (
        openTabs.map((tab) => (
          <AnimatePresence key={tab}>
          <motion.div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-4 py-1 text-sm cursor-pointer border-r border-gray-700 ${
              tab === activeTab ? "bg-transparent text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <span>{tab}</span>
            <X
              size={14}
              onClick={(e) => {
                e.stopPropagation();
                closeFile(tab);
              }}
              className="hover:text-red-400"
            />
          </motion.div>
          </AnimatePresence>
        ))
      )}
    </div>
  );
}
