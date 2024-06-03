import { useNavigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AppContext } from "../../../App";

const OrderPage = () => {
  const navigate = useNavigate();
  const [, , cartItems] = useContext(AppContext);
  const onBackButton = () => {
    navigate(-1);
  };
  function getRandomNumber(min, max) {
    min = 1000000;
    max = 9999999;
    return Math.random() * (max - min) + min;
  }

  const getCurrentRouteName = () => {
    const pathname = window.location.pathname;
    switch (pathname) {
      case "/order":
        return cartItems.length !== 0
          ? `Замовлення № ${getRandomNumber()}`
          : "";
      case "/order/delivery":
        return "Введіть дані доставки";
      case "/order/pay":
        return "Оберіть спосіб доставки";
      default:
        return "";
    }
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark p-2">
      <div className="flex items-center mb-3">
        <IoArrowBackCircleOutline
          className="size-7 dark:text-bg-light text-bg-dark"
          onClick={onBackButton}
        />
        <h1 className="text-center text-l dark:text-white ml-2">
          {getCurrentRouteName()}
        </h1>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderPage;
