import PropTypes from "prop-types";
import Button from "../../buttons/Button";
import { useState, useContext } from "react";
import { CartFunctionsContext } from "../../../App";

function Orders({ item }) {
  const [count, setCount] = useState(0);
  const { onAdd, onRemove, onRemoveAll } = useContext(CartFunctionsContext);

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(item);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(item);
  };
  const orderPrice = item.price * item.quantity;

  const handleCancelAll = () => {
    onRemoveAll(item);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b rounded-xl border-gray-200 py-4 relative">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-16 h-16">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h4 className="text-base font-medium p-1">{item.title}</h4>
            <span> Ціна: $ {item.price}</span>
            <span> Кількість: {item.quantity}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex space-x-2 justify-between p-2">
            <Button
              className="ml-2 "
              title={"+"}
              type={"basket"}
              onClick={handleIncrement}
            />
            <Button title={"-"} type={"basket"} onClick={handleDecrement} />
            <button
              onClick={handleCancelAll}
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p> {orderPrice}$</p>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Orders;

Orders.propTypes = {
  item: PropTypes.object.isRequired,
};
