import React, { useEffect, useState } from "react";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Certificates from "@/pages/Certificates";
import Resume from "@/pages/Resume";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import SplashCursor from "./components/SplashCursor";

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("about"); // ⬅️ kontrol manual page aktif

  // Cek theme dari browser/OS
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(prefersDark.matches);
    const listener = (e: MediaQueryListEvent) => setDark(e.matches);
    prefersDark.addEventListener("change", listener);
    return () => prefersDark.removeEventListener("change", listener);
  }, []);

  // Update class HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const renderPage = () => {
    switch (activePage) {
      case "portfolio":
        return <Portfolio />;
      case "certificates":
        return <Certificates />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <body className="relative overflow-x-hidden min-h-screen flex w-full justify-center text-text bg-bg">
      <SplashCursor SPLAT_RADIUS={0.005} SPLAT_FORCE={30000} />

      {/* Card Background Layer */}
      <div className="absolute overflow-hidden -z-10 inset-0 flex items-center justify-center h-full">
        <div className="absolute w-full h-full bg-[#0f172a] transition-all duration-700"></div>
        <div
          className={`absolute w-full h-full bg-[#ebebeb] transition-transform duration-700 ${
            dark ? "translate-x-full" : "translate-x-0"
          }`}
        />
      </div>

      <div className="flex w-full xl:w-7xl relative z-10">
        <div className="w-full hidden xl:flex lg:w-1/12 xl:sticky xl:top-0 h-screen py-8 z-20">
          <Sidebar
            dark={dark}
            toggleDark={() => setDark((prev) => !prev)}
            activePage={activePage}
            onNavigate={setActivePage}
          />
        </div>
        <div className="w-full xl:w-11/12 flex flex-col py-8">
          <Topbar />
          <main className="mt-4">{renderPage()}</main>
        </div>
      </div>
      <div className="sticky z-10 bottom-0 p-2 xl:hidden w-full">
        <Bottombar
          dark={dark}
          toggleDark={() => setDark((prev) => !prev)}
          activePage={activePage}
          onNavigate={setActivePage}
        />
      </div>
    </body>
  );
};

export default App;
