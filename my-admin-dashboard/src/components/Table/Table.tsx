import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import chicken from "../../assets/chicken.jpg";
import green from "../../assets/green.png";
import red from "../../assets/red.png";

const Table = () => {
  return (
    <div className="grid grid-cols-3 gap-4 font-Sfd font-medium text-[15px] leading-[22px]">
      <div className=" py-2 px-4">Product Name</div>
      <div className=" py-2 px-4">Total Orders</div>
      <div className=" py-2 px-4">Total Deliveries</div>
      <div className="py-2 px-4">
        <div className="flex items-center">
          <img
            src={product1}
            alt="Product 1"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm">Fresh Tomatoes</span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>1000</span>
        <img src={green} alt="" />
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>5</span>
        <img src={red} alt="" />
      </div>
      <div className="py-2 px-4">
        <div className="flex items-center">
          <img
            src={product2}
            alt="Product 2"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm">Onions</span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>50</span>
        <img src={green} alt="" />
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>110</span>
        <img src={green} alt="" />
      </div>
      <div className="py-2 px-4">
        <div className="flex items-center">
          <img
            src={chicken}
            alt="Product 3"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm">Chicken</span>
        </div>
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>7</span>
        <img src={red} alt="" />
      </div>
      <div className="flex items-center py-2 px-4 space-x-3">
        <span>2</span>
        <img src={red} alt="" />
      </div>
    </div>
  );
};

export default Table;
