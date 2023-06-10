import Ellipse9 from "../../assets/Ellipse9.png"
import Ellipse10 from "../../assets/Ellipse10.png"

const Navbar = () => {
  return (
    <div className="h-16 w-full flex px-4 py-4">
      <div className="flex items-center  w-[168px] h-[28px] font-Sfd leading-[28px] font-medium text-[20px]">
        <span className="text-[#B3B3B3]">Home{">"}</span>
        <span className="ml-2 text-[#1C1C1C]">Dashboard</span>
      </div>
      <div className="flex items-center justify-around ml-auto border w-[119.26px] h-[50.01px]">
        <img className="w-[50px] h-[49.38px]" src={Ellipse10} alt="image1" />
        <img className="w-[50px] h-[49.38px]" src={Ellipse9} alt="image1" />
      </div>
    </div>
  );
};

export default Navbar;
