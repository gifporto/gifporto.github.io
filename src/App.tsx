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
  const [dark, setDark] = useState<boolean>(false);

  // Cek theme dari browser/OS saat pertama kali load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Set sesuai system preference
    setDark(prefersDark.matches);

    // Listener kalau user ubah theme OS/browser
    const listener = (e: MediaQueryListEvent) => setDark(e.matches);
    prefersDark.addEventListener("change", listener);

    return () => prefersDark.removeEventListener("change", listener);
  }, []);

  // Update class HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <body className="relative overflow-x-hidden min-h-screen flex w-full justify-center text-text bg-bg">
      {/* <div
        className="fixed overflow-hidden -z-0 inset-0 flex items-center justify-center h-full"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(255,0,0,0.4), rgba(255,255,0,0.3), rgba(0,0,255,0.4), rgba(255,0,0,0.4))",
          filter: "blur(60px)",
        }}
      /> */}

      <SplashCursor
        SPLAT_RADIUS={0.005}   // lebih kecil radius percikan
        SPLAT_FORCE={30000}
      />

      {/* Card Background Layer */}
      <div className="absolute overflow-hidden -z-10 inset-0 flex items-center justify-center h-full">
        <div className="absolute w-full h-full bg-[#0f172a] transition-all duration-700"></div>
        <div
          className={`absolute w-full h-full bg-[#ebebeb] transition-transform duration-700 ${dark ? "translate-x-full" : "translate-x-0"
            }`}
        />
      </div>

      <div className="flex w-full xl:w-7xl relative z-10">
        <div className="w-full hidden xl:flex lg:w-1/12 xl:sticky xl:top-0 h-screen py-8 z-20">
          {/* Sidebar dengan switch geser */}
          <Sidebar dark={dark} toggleDark={() => setDark((prev) => !prev)} />
        </div>
        <div className="w-full xl:w-11/12 flex flex-col py-8">
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
      <div className="sticky z-10 bottom-0 p-2 xl:hidden w-full">
        {/* Bottombar juga ada switch geser */}
        <Bottombar dark={dark} toggleDark={() => setDark((prev) => !prev)} />
      </div>
    </body>
  );
};

export default App;
