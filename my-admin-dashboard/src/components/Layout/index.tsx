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
      <div className=" w-full">
        <div className="sticky bg-[#f5f4f7] ">
          <Navbar />
        </div>
        <div className="bg-[#f5f4f7] h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
