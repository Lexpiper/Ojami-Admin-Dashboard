import TabHandler from "../TabHandler/TabHandler";
import Table from "../Table/Table";

const TopProducts = () => {
  return (
    <div className="">
      <TabHandler title={"Top Selling Products"} />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default TopProducts;
