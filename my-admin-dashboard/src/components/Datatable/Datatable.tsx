import React from "react";
import generateRandomData from "./datagenerator";

interface RowData {
  orderId: number;
  dateTime: string;
  orderList: string;
  paymentMethod: string;
  amount: string;
  status: string;
}

const Datatable: React.FC = () => {
  const handleOrderClick = (orderId: number) => {
    console.log("Clicked on Order ID:", orderId);
    // Implement your logic to show order details
  };

  const rows: RowData[] = generateRandomData();

  return (
    <div className="grid grid-cols-6 gap-4 font-Sfd font-semibold text-[14px] leading-[22px] ">
      <div className="py-2 px-4">Order ID</div>
      <div className="py-2 px-4">Date and Time</div>
      <div className="py-2 px-4">Order List</div>
      <div className="py-2 px-4">Payment Method</div>
      <div className="py-2 px-4">Amount</div>
      <div className="py-2 px-4">Status</div>
      {rows.map((row) => (
        <React.Fragment key={row.orderId}>
          <div className="py-2 px-4 font-normal text-[12px] leading-[22px]">
            {row.orderId}
          </div>
          <div className="py-2 px-4 font-normal text-[12px] leading-[22px]">
            {row.dateTime}
          </div>
          <div className="py-2 px-4 font-normal text-[12px] leading-[22px]">
            {row.orderList}
          </div>
          <div className="py-2 px-4 font-normal text-[12px] leading-[22px]">
            {row.paymentMethod}
          </div>
          <div className="py-2 px-4 font-normal text-[12px] leading-[22px]">
            {row.amount}
          </div>
          <div
            className={`${
              row.status === "On Way" ? "text-[#34A853] bg-[#D8F3DF]" : null
            } ${
              row.status === "Pending" ? "text-[#C46F08] bg-[#FEF4E8]" : null
            } ${
              row.status === "Delivered" ? "text-[#306956] bg-[#E9F5F1]" : null
            } ${
              row.status === "Cancelled" ? "text-[#8E350B] bg-[#FDECE4]" : null
            } text-center w-fit py-1 border justify-center rounded-[5px] px-2 cursor-pointer font-normal text-[12px] leading-[22px]`}
            onClick={() => handleOrderClick(row.orderId)}
          >
            {row.status}
          </div>
        </React.Fragment>
      ))}
      <style>
          
      </style>
    </div>
  );
};

export default Datatable;
