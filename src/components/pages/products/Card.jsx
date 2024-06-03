import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Button from "../../buttons/Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { CartFunctionsContext } from "../../../App";
import SliderModal from "../../slider/SliderModal";

function Card({ item }) {
  const [count, setCount] = useState(0);
  const [isShownBtn, setIsShownBtn] = useState(true);
  const [sliderShown, setSliderShown] = useState(false);
  const { onAdd, onRemove } = useContext(CartFunctionsContext);

  const { id, title, image, price, slides } = item;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sliderShown && !event.target.closest(".modal-content")) {
        setSliderShown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sliderShown]);

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(item);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(item);
  };

  const handleShownToggleBtn = () => {
    setIsShownBtn((prevState) => !prevState);
  };

  const openModal = () => {
    setSliderShown(true);
  };

  const closeModal = () => {
    setSliderShown(false);
  };

  return (
    <div className="flex items-center flex-col justify-between relative h-auto pt-8 pb-8 m-3  border border-card-bord rounded-2xl bg-gradient-to-b from-white to-transparent">
      <span
        className={`${
          count > 0 ? "block" : "hidden"
        } absolute top-0 right-0 w-10 h-10 bg-orange-500 rounded-full transform translate-x-3 -translate-y-3 flex justify-center items-center text-white font-bold`}
      >
        {count}
      </span>

      <div
        className="flex items-center justify-center w-full bg-gradient-to-b from-white h-44 pt-6 pb-4 cursor-pointer"
        onClick={openModal}
      >
        <img src={image} alt={title} />
      </div>

      <NavLink to={`/${id}`}>
        <h4 className="text-center h-auto p-5 dark:text-white">
          {title}
          <span className="block text-sm font-normal text-gray-600 dark:text-white mt-4">
            $ {price}
          </span>
        </h4>
      </NavLink>

      <div className="btn-container flex justify-center">
        {isShownBtn ? (
          <Button
            title={"Обрати"}
            type={"add"}
            onClick={handleShownToggleBtn}
          />
        ) : (
          <div className="flex space-x-2">
            <Button title={"+"} type={"add"} onClick={handleIncrement} />
            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
          </div>
        )}
      </div>

      {sliderShown && (
        <SliderModal
          onClose={closeModal}
          isShown={sliderShown}
          slides={slides}
        />
      )}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Card;
