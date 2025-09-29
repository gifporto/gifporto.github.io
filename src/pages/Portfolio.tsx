import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dataFrontend from "@/data/frontend.json";
import dataUiux from "@/data/uiux.json";
import dataDesign from "@/data/design.json";

import IconLaravel from "@/assets/tech/icon-laravel";
import IconReact from "@/assets/tech/icon-react";
import IconTailwind from "@/assets/tech/icon-tailwind";
import IconCodeIgniter from "@/assets/tech/icon-codeIgniter";
import IconBotstrap from "@/assets/tech/icon-botstrap";
import IconJava from "@/assets/tech/icon-java";
import IconVue from "@/assets/tech/icon-vue";

type TabKey = "frontend" | "uiux" | "design";


const iconMap: Record<string, React.ReactNode> = {
  IconLaravel: <IconLaravel />,
  IconReact: <IconReact />,
  IconTailwind: <IconTailwind />,
  IconCodeIgniter: <IconCodeIgniter />,
  IconBotstrap: <IconBotstrap />,
  IconJava: <IconJava />,
  IconVue: <IconVue />,
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "uiux", label: "UI/UX" },
  { key: "design", label: "Design" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const [prevTab, setPrevTab] = useState<TabKey>("frontend");

  const handleTabChange = (tab: TabKey) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
  };

  const getDirection = (current: TabKey, previous: TabKey) => {
    const currentIndex = tabs.findIndex((t) => t.key === current);
    const prevIndex = tabs.findIndex((t) => t.key === previous);
    return currentIndex > prevIndex ? "right" : "left";
  };

  // Variants animasi slide horizontal
  type Direction = "left" | "right";
  const variants = {
    enter: (direction: Direction) => ({
      opacity: 0,
      x: direction === "right" ? 50 : -50,
    }),
    center: { opacity: 1, x: 0 },
    exit: (direction: Direction) => ({
      opacity: 0,
      x: direction === "right" ? -50 : 50,
    }),
  };

  const direction = getDirection(activeTab, prevTab);

  return (
    <div className="w-full xl:px-0 px-2">
      {/* Navbar Tabs */}
      <div className="flex space-x-6 mb-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`relative px-4 py-2 font-semibold ${activeTab === tab.key
              ? "text-primary"
              : "text-text-secondary hover:text-primary/70"
              }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content with Slide Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        {activeTab === "frontend" && (
          <motion.div
            key="frontend"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Frontend Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dataFrontend.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="card-glass flex flex-col justify-between rounded-3xl p-2 h-full">
                    <div>
                      <a href={item.link} target="blank">
                        <img
                          className="w-full mx-auto transition duration-500 hover:scale-110 hover:rotate-3 hover:shadow-primary/20 hover:shadow-lg rounded-2xl"
                          src={item.img}
                          alt={item.title}
                        />
                      </a>
                      <h5 className="text-text mt-3 font-semibold">
                        {item.title}
                      </h5>
                      <p className="text-text-seconday text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs">{item.date}</div>
                      <div className="flex gap-1 items-center">
                        {iconMap[item.tech1]}
                        {iconMap[item.tech2]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "uiux" && (
          <motion.div
            key="uiux"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">UI/UX Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dataUiux.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <img
                    className="transition duration-500 rounded-2xl"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="card-glass rounded-xl p-4 mt-2">
                    <h5 className="text-text font-semibold">{item.title}</h5>
                    <p className="text-text-seconday text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "design" && (
          <motion.div
            key="design"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Design Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {dataDesign.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <img
                    className="transition duration-500 rounded-2xl"
                    src={item.img}
                    alt={`Design ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
