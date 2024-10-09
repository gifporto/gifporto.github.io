import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Canvas from '../canvas';

const Layout = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen pt-5 pb-16">
      <Canvas/>
      <div className="container flex flex-wrap">
        <div className="static lg:fixed lg:w-[276px]">
          <Sidebar />
        </div>
        <div className="lg:ml-[276px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
