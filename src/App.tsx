import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Certificates from "@/pages/Certificates";
import Resume from "@/pages/Resume";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import SplashCursor from "./components/SplashCursor";

// Komponen ScrollToTop
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // langsung ke atas tanpa animasi
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <body className="relative min-h-screen flex w-full justify-center text-text bg-bg">
      <SplashCursor 
        SHADING={true} 
        BACK_COLOR={{ r: 0, g: 0, b: 0.1 }} 
        COLOR_UPDATE_SPEED={5} 
      />

      {/* Card Background Layer */}
      <div className="absolute overflow-hidden -z-10 inset-0 flex items-center justify-center h-full">
        <div className="absolute w-full h-full bg-[#0f172a] transition-all duration-700" >
          
        </div>
        <div
          className={`absolute w-full h-full bg-[#ebebeb] transition-transform duration-700 ${dark ? "translate-x-full" : "translate-x-0"
            }`}
        />
      </div>

      <div className="flex w-full md:w-7xl">
        <div className="w-fit hidden md:block md:w-1/12 md:sticky md:top-0 h-screen py-8 z-10">
          <Sidebar dark={dark} toggleDark={() => setDark((prev) => !prev)} />
        </div>
        <div className="w-full md:w-11/12 flex flex-col py-8">
          <Topbar />
          <main className="mt-4">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </div>
      <div className="sticky z-10 bottom-0 p-2 md:hidden w-full">
        <Bottombar dark={dark} toggleDark={() => setDark((prev) => !prev)} />
      </div>
    </body>
  );
};

export default App;
