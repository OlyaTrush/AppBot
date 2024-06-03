import PropTypes from "prop-types";
function Button({ type, title, disable, onClick }) {
  return (
    <button
      className={`btn ${
        (type === "add" && "bg-btn-yellow") ||
        (type === "remove" && "bg-btn-red") ||
        (type === "checkout" && "bg-btn-green") ||
        (type === "basket" && "bg-btn-white dark:text-white shadow-stone-500")
      } px-4 py-2 text-black font-semibold rounded-md shadow-md hover:bg-opacity-75 disabled:opacity-50 disabled:pointer-events-none`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  disable: PropTypes.string,
  onClick: PropTypes.func,
};
