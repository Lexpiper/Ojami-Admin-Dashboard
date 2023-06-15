import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

const Orders = () => {
  return (
    <Layout>
      <div>
        <div className="text-[24px] pl-10 pt-5 pb-10 font-medium">Orders</div>
        <div className="flex items-center w-full px-10 ">
          <div className="w-[700px] search flex items-center shadow-sm rounded-[15px] bg-[#FFFFFF] h-[40px]">
            <span className="cursor-pointer mx-5 text-lg">
              <AiOutlineSearch />
            </span>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className=" w-full h-full rounded-[15px]"
            />
          </div>
          <div className="flex items-center ml-auto space-x-3">
            <div className="flex items-center justify-evenly shadow-sm w-[100px] rounded-[15px] bg-[#FFFFFF] px-2 py-2 ">
              <span>Filters </span>
              <span className="cursor-pointer">
                <BiExport />
              </span>
            </div>
            <div className="flex items-center justify-evenly shadow-sm w-[100px] rounded-[15px] bg-[#FFFFFF] px-2 py-2">
              <span>Export </span>
              <span className="cursor-pointer">
                <BsFilter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
