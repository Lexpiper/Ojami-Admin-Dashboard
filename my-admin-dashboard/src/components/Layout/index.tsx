import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface Props{
  children: JSX.Element;
}
const Layout = ({ children } :Props) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-start">
      <div className="">
        <Sidebar />
      </div>
      <div className="border-2 w-full">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
