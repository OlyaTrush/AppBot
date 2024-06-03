import { useEffect, useState } from "react";
import Button from "../../buttons/Button";
import OrderModal from "../../modals/OrderModal";
import { useHistory } from "react-router-use-history";
import validationSchema from "../../../schemas/form";
import InputMask from "react-input-mask";
import { maskEmail } from "react-email-mask";
import { postOffice, postServices } from "../../../mock";

const Form = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [number, setNumber] = useState(localStorage.getItem("number") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [deliveryService, setDeliveryService] = useState(
    localStorage.getItem("deliveryService") || ""
  );
  const [postOfficeId, setPostOfficeId] = useState(
    localStorage.getItem("postOfficeId") || ""
  );
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [deliveryServiceError, setDeliveryServiceError] = useState("");
  const [postOfficeError, setPostOfficeError] = useState("");
  const [checked, setChecked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("online");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(
        { name, number, email, deliveryService, postOfficeId },
        { abortEarly: false }
      );
      return true;
    } catch (error) {
      error.inner.forEach((e) => {
        if (e.path === "name") setNameError(e.message);
        if (e.path === "number") setNumberError(e.message);
        if (e.path === "email") setEmailError(e.message);
        if (e.path === "deliveryService") setDeliveryServiceError(e.message);
        if (deliveryService && e.path === "postOfficeId")
          setPostOfficeError(e.message);
      });
      return false;
    }
  };

  const onCheckedPayBtn = async () => {
    if (await validateForm()) {
      if (paymentOption === "cash") {
        setIsModalOpen(true);
      } else {
        history.push("/order/pay");
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleChange() {
    setChecked(!checked);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
    setNumberError("");
  };

  const onChangeEmail = (e) => {
    const maskedEmail = maskEmail(e.target.value);
    setEmail(maskedEmail);
    setEmailError("");
  };

  const onChangeDeliveryService = (e) => {
    setDeliveryService(e.target.value);
    setPostOfficeId("");
    setDeliveryServiceError("");
  };

  const onChangePostOffice = (e) => {
    setPostOfficeId(e.target.value);
    setPostOfficeError("");
  };

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
    localStorage.setItem("deliveryService", deliveryService);
    localStorage.setItem("postOfficeId", postOfficeId);
  }, [name, number, email, deliveryService, postOfficeId]);

  return (
    <div className="bg-bg-light items-center dark:bg-bg-dark p-2">
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-md bg-bg-light dark:bg-del-form dark:text-white shadow-lg shadow-stone-500">
        <input
          className={
            "w-full text-text-black dark:text-color-white placeholder-black dark:placeholder-white bg-bg-light dark:bg-input-form border-b border-yellow-500 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          }
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={onChangeName}
        />
        {nameError && <p className="text-red-500 text-xxs">{nameError}</p>}

        <InputMask
          className="w-full text-text-black dark:text-color-white placeholder-black dark:placeholder-white bg-bg-light dark:bg-input-form border-b border-yellow-500 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          mask="+38 (099) 999 99 99"
          value={number}
          onChange={onChangeNumber}
          placeholder="Номер телефону"
        />
        {numberError && <p className="text-red-500 text-xxs">{numberError}</p>}
        <input
          className="w-full text-text-black dark:text-color-white placeholder-black dark:placeholder-white bg-bg-light dark:bg-input-form border-b border-yellow-500 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Електронна пошта"
          value={email}
          onChange={onChangeEmail}
        />
        {emailError && <p className="text-red-500 text-xxs">{emailError}</p>}
        <select
          className="w-full text-text-black dark:text-color-white bg-bg-light dark:bg-input-form border-b border-yellow-500 px-2 py-2 rounded focus:outline-none focus:border-blue-500"
          value={deliveryService}
          onChange={onChangeDeliveryService}
        >
          <option value="">Виберіть службу доставки</option>
          {postServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {deliveryServiceError && (
          <p className="text-red-500 text-xxs">{deliveryServiceError}</p>
        )}
        {deliveryService && (
          <select
            className="w-full text-text-black dark:text-color-white bg-bg-light dark:bg-input-form border-b border-yellow-500 px-2 py-2 rounded focus:outline-none focus:border-blue-500"
            value={postOfficeId}
            onChange={onChangePostOffice}
          >
            <option value="">Виберіть відділення пошти</option>
            {postOffice.map((office) => (
              <option key={office.id} value={office.id}>
                {office.title}
              </option>
            ))}
          </select>
        )}
        {postOfficeError && (
          <p className="text-red-500 text-xxs">{postOfficeError}</p>
        )}
        <div className="flex mt-3 items-center mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="mr-2"
          />
          <p className="dark:text-white">
            Зберегти дані для майбутніх замовлень
          </p>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="radio"
            id="onlinePayment"
            name="paymentOption"
            checked={paymentOption === "online"}
            onChange={() => handlePaymentOptionChange("online")}
            className="mr-2"
          />
          <label htmlFor="onlinePayment" className=" dark:text-white">
            Оплата online
          </label>
        </div>
        <div className="flex items-center mt-3 mb-4">
          <input
            type="radio"
            id="cashPayment"
            name="paymentOption"
            checked={paymentOption === "cash"}
            onChange={() => handlePaymentOptionChange("cash")}
            className="mr-2"
          />
          <label htmlFor="cashPayment" className="dark:text-white">
            Оплата при отриманні
          </label>
        </div>
      </div>

      <div className=" mt-7 flex flex-col items-center">
        <Button
          className="mt-5 text-white px-4 py-2 rounded focus:outline-none "
          type="add"
          title="Замовити"
          onClick={onCheckedPayBtn}
        />
      </div>
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Form;
