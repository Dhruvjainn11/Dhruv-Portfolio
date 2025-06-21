// src/App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import EditorWindow from "./components/EditorWindow";
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

 


  const openFile = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs((prev) => [...prev, fileName]);
    }


    setActiveTab(fileName);
  };

  const closeFile = (fileName) => {
  setOpenTabs((prevTabs) => {
    const newTabs = prevTabs.filter((f) => f !== fileName);
    setActiveTab((prevActive) => {
      if (prevActive === fileName) {
        return newTabs[newTabs.length - 1] || null;
      }
      return prevActive;
    });
    return newTabs;
  });
};


  return (
// App.jsx
<div className="relative z-0 w-full min-h-screen font-mono  bg-[#1e1e1e]/100 text-white overflow-hidden flex flex-col md:flex-row">
  <ParticlesBackground />

  {/* Sidebar on left for desktop, on top for mobile */}
  <Sidebar openFile={openFile} />

  {/* Content area */}
  <div className="flex flex-col flex-1 min-h-screen">
    <TabBar
      openTabs={openTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      closeFile={closeFile}
    />
    <EditorWindow
  activeTab={activeTab}
  openTabs={openTabs}
  openFile={openFile}
  setActiveTab={setActiveTab}
/>

  </div>
</div>

  );
}

export default App;
