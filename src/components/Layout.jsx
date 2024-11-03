import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Canvas from '../canvas';
import React, { useEffect, useState } from 'react';

const Layout = () => {
  const [fullScreen, setFullScreen] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFullScreen(false);
      setShowText(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen pt-5 pb-16">

      <div class="fixed -top-48 -right-48 dark:top-auto dark:right-auto dark:-bottom-48 dark:-left-48 bulat1"></div>
      <div class="fixed -bottom-48 -left-48 dark:bottom-auto dark:left-auto dark:-top-48 dark:-right-48 bulat2"></div>

      {/* <div className="md:-ml-6 -ml-3 -mb-6 md:w-40 md:h-40 w-36 h-36 fixed z-50 sm:left-0 bottom-0 md:right-0">
        <Canvas/>
      </div> */}
      
      {showText && (
        <div className="absolute h-screen flex items-end z-40 inset-0 justify-center bg-black bg-opacity-80 text-white text-2xl">
          <div className="font-semibold text-lg mb-4">Welcome to Gifporto.</div>
        </div>
      )}

      <div className={`fixed z-50 flex
          ${fullScreen ? 'w-96 h-96 bottom-0 justify-center items-center md:w-full md:h-full scale-100 translate-y-0' : 'sm:left-0 md:right-0  bottom-0 md:-ml-6 -ml-3 -mb-6 md:w-40 md:h-40 w-36 h-36'} 
          transition-all duration-[1200ms] ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] transform`}>
        <Canvas />
      </div>

      <div className="container flex flex-wrap">
          <Outlet />
      </div>
    </div>
  );
};

export default Layout;
