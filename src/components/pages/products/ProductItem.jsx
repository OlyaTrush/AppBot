import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import Button from "../../buttons/Button";
import SliderModal from "../../slider/SliderModal";
import { AppContext, CartFunctionsContext } from "../../../App";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [items] = useContext(AppContext);
  const { onAdd } = useContext(CartFunctionsContext);
  const [sliderShown, setSliderShown] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const product = items.find((product) => product.id === parseInt(id));

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

  const openModal = () => {
    setSliderShown(true);
  };

  const closeModal = () => {
    setSliderShown(false);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const onAddHandler = () => {
    onAdd({ ...product, quantity });
    history.push("/order");
  };

  const totalPrice = product.price * quantity;
  const onBackButton = () => {
    history.push("/");
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark dark:text-white p-2">
      <IoArrowBackCircleOutline
        className="size-7 mb-7 ml-1 mt-1
         dark:text-bg-light text-bg-dark"
        onClick={onBackButton}
      />
      <div className="p-8 flex flex-col justify-center bg-transperent">
        <div onClick={openModal} className="mb-3 w-40 h-40 mx-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>

        <h4 className="font-normal text-center nb-3">
          {product.title}
          <span className=" mt-4 mb-4 font-bold block">$ {product.price}</span>
        </h4>
        <p className="mb-4">{product.description}</p>
        {typeof product.text !== "string" ? null : product.text}
        <p className="mb-4">{product.categoryName}</p>

        <input
          className="w-12 mb-3 text-center bg-transparent border-2 border-stone-300"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <span className="mb-3">Ціна: ${totalPrice.toFixed(2)}</span>
        <Button type="add" title={"Обрати"} onClick={onAddHandler} />
      </div>
      {sliderShown && (
        <SliderModal
          onClose={closeModal}
          isShown={sliderShown}
          slides={product.slides}
        />
      )}
    </div>
  );
};

export default ProductItem;
