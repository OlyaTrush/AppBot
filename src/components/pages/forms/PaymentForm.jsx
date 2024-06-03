import { useContext } from "react";
import PropTypes from "prop-types";
import Cancel from "../../buttons/CancelButton";
import { AppContext } from "../../../App";
import Apple from "../../../../public/img/Apple.jpeg";
import Gpay from "../../../../public/img/google.webp";
import Pb24 from "../../../../public/img/pb24.png";
import MonoPay from "../../../../public/img/mono.png";
import CardPay from "../../../../public/img/card.png";

function PaymentForm() {
  const [, , , , totalPrice] = useContext(AppContext);

  return (
    <div className="bg-bg-light dark:bg-bg-dark mx-auto p-5 dark:text-white">
      <div className="grid grid-cols-2 gap-4 pb-4">
        <PaymentMethod img={Apple} name="Apple Pay" />
        <PaymentMethod img={Gpay} name="Google Pay" />
        <PaymentMethod img={Pb24} name="Приват24" />
        <PaymentMethod img={CardPay} name="Card Pay" />
        <PaymentMethod img={MonoPay} name="MonoPay" />
      </div>

      <span className="dark:text-white mb-4 block text-center text-lg">
        Сума до сплати {totalPrice.toFixed(2)} $
      </span>

      <div className="text-center">
        <Cancel />
        <button
          type="submit"
          className="bg-btn-green text-white px-4 py-2 mt-2 rounded focus:outline-none"
        >
          Оплатити
        </button>
      </div>
    </div>
  );
}

function PaymentMethod({ img, name }) {
  return (
    <div className="flex flex-col items-center border border-slate-150 rounded-lg py-10">
      <img
        src={img}
        alt={name}
        className="w-20 h-20 mb-2 object-cover rounded-lg"
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default PaymentForm;

PaymentMethod.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
