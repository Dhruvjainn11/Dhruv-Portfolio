// src/components/ParticlesBackground.jsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
  initParticlesEngine(async (engine) => {
    console.log("🔧 Initializing tsParticles engine...");
    await loadSlim(engine);
  }).then(() => {
    console.log("✅ Engine initialized!");
    setInit(true);
  });
}, []);


const options = useMemo(
  () => ({
   
    background: {
      color: { value: "transparent" }, // deep dark grey
    },
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 800,
        },
      },
     color: {
  value: ["#ffffff"], // cyan, magenta, gold
},
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 2,
        random: true,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      links: {
        enable: true,
        distance: 130,
        color: "#ffffff",
        opacity: 0.01,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 2,
        },
      },
    },
    detectRetina: true,
  }),
  []
);


  if (!init) return null;

  return (
    
    <div className="fixed inset-0 -z-10 bg-red ">
      {console.log("✅ Particles component rendering")
}
      <Particles id="tsparticles" options={options}/>
    </div>
  );
}
