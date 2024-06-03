import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";

const SearchModal = ({ category, isShown, onClose, onCategoryClick }) => {
  if (!isShown) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-bg-light dark:bg-bg-dark dark:text-white p-4 rounded-lg max-w-md w-full">
        <div className="flex justify-end">
          <CgClose
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {category.map((el) => (
            <div key={el.id} className="flex flex-col items-center">
              <img
                src={el.image}
                alt={el.title}
                className="w-20 h-20 object-cover rounded-lg"
                onClick={() => onCategoryClick(el)}
              />
              <h4 className="text-center mt-2 text-sm dark:text-white">
                {el.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchModal.propTypes = {
  category: PropTypes.array.isRequired,
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default SearchModal;
