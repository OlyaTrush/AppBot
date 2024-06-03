import PropTypes from "prop-types";

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-bg-light dark:bg-bg-dark dark:text-white p-4 rounded-md flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2">Дякуємо за замовлення</h2>
        <p className="text-gray-700 dark:text-white">
          Очікуйте повідомлення про доставку
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default OrderModal;

OrderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
