import Layout from "../../components/Layout";
import Widgets from "../../components/Widgets/Widgets";
import { widget } from "./data.js";
import vector from "../../assets/Vector.png";
import Barchart from "../../components/Chart/BarChart.js";

const Home = () => {
  const data = [
    200000, 300000, 400000, 50000, 600000, 500000, 60000, 200000, 300000,
    100000, 20000,
  ];
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Layout>
      <div className="mb-[100px]">
        <div className="flex items-center ">
          <h3 className="pr-1">This month</h3>
          <img className="pt-1 text-xs cursor-pointer" src={vector} alt="" />
        </div>
        <div className="grid  grid-cols-3 gap-20  pb-10 pt-2 shadow-sm  ">
          {widget.map((i, index) => (
            <Widgets data={i} key={index} />
          ))}
        </div>
        <div className="w-full h-full border-2 ">
          <div className="flex items-center">

          </div>
          <Barchart data={data} labels={labels} />
        </div>
        {/* <div className="w-full h-full">
          <TopProducts/>
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
