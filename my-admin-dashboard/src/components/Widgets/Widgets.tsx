import dashIcon from "../../assets/dashIcon.png";

interface Props {
  data: {
    title: string;
    amount: number;
    percentage: number;
    time: string;
    iconType: string;
    bgColor: string;
    color: string;
  };
}

const Widgets = ({ data }: Props) => {
  console.log(data);
  return (
    <div
      className={`rounded-[10px] ${data.bgColor} px-6 py-4 shadow-sm ${data.color} w-[300px]`}
    >
      <div className="flex flex-col justify-center ">
        <div className="flex items-center">
          <div
            className={`font-Sfd font-400 text-[14.23px] leading-[17.92px] text-left align-top `}
          >
            {data.title}
          </div>
          {data.iconType && <img className="" src={dashIcon} alt="" />}
        </div>
        <div className="font-Sfd font-bold text-[25.61px] leading-[38.46px] py-4 ">
          NGN <span>{data.amount.toLocaleString(undefined)}</span>
        </div>
        <div
          className={`text-[14.23px] font-Sfd leading-[16.92px] text-left align-top ${data.color}`}
        >
          <span className={"text-[#1FC305]"}>{data.percentage}%</span> vs{" "}
          {data.time}
        </div>
      </div>
    </div>
  );
};

export default Widgets;
