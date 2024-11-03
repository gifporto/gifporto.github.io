import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Canvas from '../canvas';

const Layout = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen pt-5 pb-16">

      <div class="fixed -top-48 -right-48 dark:top-auto dark:right-auto dark:-bottom-48 dark:-left-48 bulat1"></div>
      <div class="fixed -bottom-48 -left-48 dark:bottom-auto dark:left-auto dark:-top-48 dark:-right-48 bulat2"></div>

      <div className="w-24 h-24 fixed z-50 sm:left-0 bottom-0 md:right-0">
        <Canvas/>
      </div>
      <div className="container flex flex-wrap">
          <Outlet />
      </div>
    </div>
  );
};

export default Layout;
