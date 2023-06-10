import Navbar from "../components/Navbar/Navbar";
import Widgets from "../components/Widgets/Widgets";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-6">
      <Sidebar />
      <div className="ml-64 flex-1 bg-[#f5f4f7] h-screen">
        <Navbar />
        <div className="widgets flex md:flex-row flex-col gap-[20px] py-[5px] px-[10px] mt-5 shadow-sm  ">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
