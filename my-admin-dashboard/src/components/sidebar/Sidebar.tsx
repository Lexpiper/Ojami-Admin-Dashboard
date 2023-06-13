import { useState } from "react";
import { Link } from "react-router-dom";
import dashIcon from "../../assets/dashIcon.png";
import productIcon from "../../assets/productIcon.png";
import reportIcon from "../../assets/reportIcon.png";
import orderIcon from "../../assets/orderIcon.png";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: dashIcon },
  { id: "orders", label: "Orders", icon: orderIcon },
  { id: "products", label: "Products", icon: productIcon },
  { id: "report", label: "Report", icon: reportIcon },
];

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const handleClick = (menu: string) => {
    setActive(menu);
  };

  return (
    <div className=" h-screen flex flex-col w-[240px] bg-white border-r border-gray-200">
      <div className="h-20 flex items-center">
        <Link to="/">
          <span className="logo text-2xl text-[#D8543C] ml-4 font-bold">
            Ojami
          </span>
        </Link>
      </div>
      <div className="flex-grow">
        {menuItems.map((menuItem: MenuItem) => (
          <div
            key={menuItem.id}
            onClick={() => handleClick(menuItem.id)}
            className={`${
              active === menuItem.id ? "bg-[#EBF9EF]" : ""
            } flex items-center py-3 pl-6 pr-4 hover:bg-[#EBF9EF] cursor-pointer`}
          >
            <img className="w-6 h-6" src={menuItem.icon} alt="" />
            <div className="ml-4">{menuItem.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
