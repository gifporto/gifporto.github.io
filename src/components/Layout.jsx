import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 min-h-screen py-10">
      {/* <Header/> */}
      <div className="container flex flex-wrap">
        <div className="static lg:fixed lg:w-[276px]">
          <Sidebar />
        </div>
        <div className="lg:ml-[276px]">
        <Outlet />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
