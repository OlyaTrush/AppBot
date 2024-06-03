import { useContext } from "react";
import Button from "../../buttons/Button";
import Orders from "./Orders";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";

const BasketPage = () => {
  const [, , cartItems, , totalPrice] = useContext(AppContext);

  const history = useHistory();

  const onNextStepBtn = () => {
    history.push("/order/delivery");
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark p-2">
      <div className="flex items-center justify-center flex-col p-5 border rounded-xl border-card-bord dark:text-white">
        {cartItems.length === 0 ? (
          <div>
            <p className="text-gray-900 dark:text-white">Ваш кошик порожній</p>
            <svg
              className="mb-6 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#cbc7b4"
                d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
              />
            </svg>
            <div className="p-2 border border-btn-border border-double border-4 flex justify-center items-center rounded-lg">
              <Link to="/" className="text-center">
                Додати товари
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <Orders item={item} key={item.id} />
            ))}
            <textarea
              maxLength={200}
              name="order comment"
              placeholder="Коментар"
              className="w-full mb-5 mt-5 bg-transparent text-black dark:text-grey border rounded-xl p-2 dark:text-white"
            />
            <p className=" mb-6">
              Всього до сплати : {totalPrice.toFixed(2)} $
            </p>
            <div className="flex flex-col items-center">
              <Button
                className="mt-2 text-white px-4 py-2 rounded focus:outline-none "
                type="add"
                title="Замовити"
                onClick={onNextStepBtn}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
