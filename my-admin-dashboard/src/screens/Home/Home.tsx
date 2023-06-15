import Layout from "../../components/Layout";
import Widgets from "../../components/Widgets/Widgets";
import { widget } from "./data.js";
import vector from "../../assets/Vector.png";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="flex items-center pl-10">
          <h3 className="pr-1">This month</h3>
          <img className="pt-1 text-xs cursor-pointer" src={vector} alt="" />
        </div>
        <div className="grid  grid-cols-3 gap-20 px-10 pt-2 shadow-sm  ">
          {widget.map((i, index) => (
            <Widgets data={i} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
