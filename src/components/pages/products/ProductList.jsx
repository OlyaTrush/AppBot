import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Button from "../../buttons/Button";
import { VscLayout } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";
import { category } from "../../../mock";
import { useHistory } from "react-router-use-history";
import { Tooltip } from "react-tooltip";
import SearchModal from "../../modals/SearchModal";

const tg = window.Telegram.WebApp;

function ProductList() {
  const [on, setOn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [items, , cartItems] = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [categoryElement, setCategoryElement] = useState("");
  const history = useHistory();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showModal && !event.target.closest(".modal-content")) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  const onCheckout = () => {
    tg.MainButton.text = "Переглянути замовлення";
    tg.MainButton.show();
  };

  const onChangeStyle = () => {
    setOn(!on);
  };

  const onThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onBasketClick = () => {
    history.push("/order");
  };

  const filteredItems = items.filter((item) => {
    const titleMatch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const categoryMatch = item.categoryName
      .toLowerCase()
      .includes(categoryElement.toLowerCase());

    if (!searchQuery) {
      return categoryMatch;
    }

    if (!categoryElement) {
      return titleMatch;
    }

    return titleMatch && categoryMatch;
  });

  const onCategoryClick = (el) => {
    const value = el.title.toString();
    setCategoryElement(value);
    setShowModal(false);
  };

  return (
    <div
      className="justify-center items-center overflow-y-scroll p-1 
         dark:bg-bg-dark dark:text-text-dark
          bg-bg-light text-text-light"
    >
      {showModal && (
        <SearchModal
          category={category}
          isShown={showModal}
          onClose={closeModal}
          onCategoryClick={onCategoryClick}
        />
      )}
      <div className="flex justify-around items-center p-2 ">
        <form className="relative inline-block justify-center w-full mr-5">
          <input
            type="text"
            className="w-full p-1 pl-8 pr-10 rounded-lg border border-stone-400 focus:border-blue-500 text-xs 
             text-text-dark
                bg-bg-light 
            "
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <HiOutlineSearch className="absolute top-1.5 left-2" />
          <GrCatalog
            id="catalog"
            className="absolute top-1.5 right-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <Tooltip
            anchorSelect="#catalog"
            place="bottom"
            className="bg-gray-700 dark:bg-white text-black dark:text-black p-2 rounded-md shadow-xl z-50 font-medium"
          >
            Переглянути категорії
          </Tooltip>
        </form>

        <div className="flex items-center ">
          <FaCartShopping
            onClick={onBasketClick}
            className="mr-3 size-7
               dark:text-stone-200 text-text-dark"
          />
          <VscLayout
            onClick={onChangeStyle}
            className="mr-3 size-7
               dark:text-stone-200 text-text-dark"
          />
          <div>
            {theme === "dark" ? (
              <MdLightMode
                className="size-7 text-stone-200"
                onClick={onThemeChange}
              />
            ) : (
              <MdDarkMode
                className="size-7 text-dark"
                onClick={onThemeChange}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`grid ${
          on ? "grid-cols-1" : "grid-cols-2"
        } justify-center w-full h-auto`}
      >
        {filteredItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-2 pb-4">
        <Link to={cartItems.length !== 0 ? "/order" : "/"}>
          <Button
            type={"checkout"}
            title={"Переглянути замовлення"}
            className="bg-btn-green w-full text-white px-4 py-2 rounded focus:outline-none "
            onCheckout={onCheckout}
          />
        </Link>
      </div>
    </div>
  );
}

export default ProductList;

ProductList.propTypes = {
  items: PropTypes.array,
  item: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  filterProducts: PropTypes.func,
};
