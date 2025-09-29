import React, { useEffect, useState } from "react";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Certificates from "@/pages/Certificates";
import Resume from "@/pages/Resume";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import SplashCursor from "./components/SplashCursor";
import Particles from "./components/Particles";

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("about");

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
        return <About onNavigate={setActivePage} />;
    }
  };

  return (
    <body className="relative overflow-x-hidden min-h-screen w-full text-text bg-bg">
      {/* <SplashCursor SPLAT_RADIUS={0.005} SPLAT_FORCE={30000} /> */}

      <div className="fixed overflow-hidden z-0 inset-0 flex items-center justify-center h-full">
        <Particles
          particleColors={['#3D74B6', '#B4E50D']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={300}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Card Background Layer */}
      <div className="absolute overflow-hidden -z-10 inset-0 flex items-center justify-center h-full">
        <div className="absolute w-full h-full bg-[#0f172a] transition-all duration-700"></div>
        <div
          className={`absolute w-full h-full bg-[#ebebeb] transition-transform duration-700 ${dark ? "translate-x-full" : "translate-x-0"
            }`}
        />
      </div>

      <div className="fixed w-full h-screen overflow-hidden">
        {/* Bulat besar kanan atas */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

        {/* Bulat besar kiri bawah */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

        {/* Bulat kecil tengah */}
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>

        {/* Bulat tambahan (opsional biar mirip desain) */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>


      <div className="relative z-10 w-full max-w-7xl mx-auto flex">
        <div className="w-full hidden xl:flex lg:w-1/12 xl:sticky xl:top-0 h-screen py-8 z-20">
          <Sidebar
            dark={dark}
            toggleDark={() => setDark((prev) => !prev)}
            activePage={activePage}
            onNavigate={setActivePage}
          />
        </div>
        <div className="w-full xl:w-11/12 flex flex-col py-8">
          <Topbar onNavigate={setActivePage} />
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
