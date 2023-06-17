import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import vector1 from "../../assets/vector1.svg";
import vector2 from "../../assets/vector2.svg";
import vector3 from "../../assets/vector3.svg";
import vector4 from "../../assets/vector4.svg";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: "/", label: "Dashboard", icon: vector1 },
  { id: "/orders", label: "Orders", icon: vector3 },
  { id: "/products", label: "Products", icon: vector2 },
  { id: "/report", label: "Report", icon: vector4 },
];

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const handleClick = (menu: string) => {
    setActive(menu);
  };
  console.log(menuItems);
  return (
    <div className=" h-screen flex flex-col w-[240px] bg-white border-r border-gray-200">
      <div className="h-20 flex items-center">
        <Link to="/">
          <span className="logo text-2xl text-[#34A853] ml-4 font-bold">
            Ojami
          </span>
        </Link>
      </div>
      <div className="flex-grow border">
        {menuItems.map((menuItem: MenuItem) => (
          <NavLink
            key={menuItem.id}
            to={menuItem.id}
            className={({ isActive, isPending }) =>
              isActive ? "bg-green-400" : isPending ? " " : " "
            }
          >
            <div
              onClick={() => handleClick(menuItem.id)}
              className={`${
                active === menuItem.id ? "bg-[#EBF9EF]" : ""
              } flex items-center py-3 pl-6 pr-4 hover:bg-[#EBF9EF] cursor-pointer mb-4`}
            >
              <img
                className={`w-4 h-4 ${
                  active === menuItem.id ? "text-green-600" : null
                }`}
                src={menuItem.icon}
                alt=""
              />
              <div className="ml-4 font-Sfd text-[14px]">{menuItem.label}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
