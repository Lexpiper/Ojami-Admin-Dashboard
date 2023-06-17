const generateRandomOrderId = () => {
  return Math.floor(Math.random() * 1000000);
};

const generateRandomDate = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = Math.floor(Math.random() * 28) + 1;
  const month = Math.floor(Math.random() * 12);
  const year = Math.floor(Math.random() * 100) + 2000;

  return `${daysOfWeek[new Date(year, month, day).getDay()]}, ${day
    .toString()
    .padStart(2, "0")}-${(month + 1).toString().padStart(2, "0")}-${year
    .toString()
    .substring(2)}`;
};

const generateRandomOrderList = () => {
  const foodItems = ["Tomatoes", "Chicken", "Hot Dog", "Onions"];
  const randomIndex = Math.floor(Math.random() * foodItems.length);
  return foodItems[randomIndex];
};

const generateRandomPaymentMethod = () => {
  const paymentMethods = ["Cash", "Online Transfer"];
  const randomIndex = Math.floor(Math.random() * paymentMethods.length);
  return paymentMethods[randomIndex];
};

const generateRandomAmount = () => {
  let amount = Math.floor(Math.random() * 10000) + 1000;
  return `₦ ${amount.toLocaleString("en-NG")}`;
};

const generateRandomStatus = () => {
  const statuses = ["Delivered", "Cancelled", "On Way", "Pending"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const generateRandomData = () => {
  const rows = Array.from({ length: 8 }).map(() => ({
    orderId: generateRandomOrderId(),
    dateTime: generateRandomDate(),
    orderList: generateRandomOrderList(),
    paymentMethod: generateRandomPaymentMethod(),
    amount: generateRandomAmount(),
    status: generateRandomStatus(),
  }));

  return rows;
};

export default generateRandomData;
