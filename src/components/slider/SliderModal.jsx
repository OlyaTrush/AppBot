import Slider from "./Slider";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";

const SliderModal = ({ isShown, onClose, slides }) => {
  if (!isShown) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="modal-content bg-bg-light dark:bg-bg-dark dark:text-white p-2 rounded-lg max-w-md w-full">
        <Slider slides={slides} />
        <GrClose
          className="close-button absolute top-4 right-4 text-black dark:text-white cursor-pointer text-white size-5"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

SliderModal.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SliderModal;
