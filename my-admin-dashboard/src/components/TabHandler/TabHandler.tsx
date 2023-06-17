import { List } from "./data";
import { useState } from "react";

interface TabHandlerprops {
  title: string;
}

const TabHandler = ({ title }: TabHandlerprops) => {
  const [active, setactive] = useState("Al time");
  const handleClick = (menu: string) => {
    setactive(menu);
  };

  return (
    <div className="flex items-center justify-between mb-10 font-Sfd leading-7 bg-white py-2 px-4 rounded-[10px]">
      <h3 className="text-[16px] font-semibold">{title}</h3>
      <div className="flex items-center justify-between font-Sfd text-[14px] font-normal">
        {List.map((i) => (
          <span
            key={i.id}
            onClick={() => handleClick(i.item)}
            className={`${
              active === i.item ? "text-black" : null
            } mr-10 cursor-pointer text-[#8E8E8E] font-medium text-[14px] `}
          >
            {i.item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TabHandler;
