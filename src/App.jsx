import { useEffect, createContext, useState } from "react";
import { useTelegram } from "./hooks/useTelegram.js";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent.jsx";
import { products } from "./mock.js";

export const AppContext = createContext();
export const CartFunctionsContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState(products);
  const { tg } = useTelegram();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    tg.ready();
  }, [tg]);

  const onAdd = (item) => {
    let isInCart = false;
    const updatedCartItems = [...cartItems];
    updatedCartItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity += 1;
        isInCart = true;
      }
    });
    if (!isInCart) {
      updatedCartItems.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  };

  const onRemove = (item) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.forEach((cartItem, index) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity === 1) {
          updatedCartItems.splice(index, 1);
        }
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else return;
      }
    });
    setCartItems(updatedCartItems);
  };

  const onRemoveAll = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={[items, setItems, cartItems, setCartItems, totalPrice]}
    >
      <CartFunctionsContext.Provider value={{ onAdd, onRemove, onRemoveAll }}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </CartFunctionsContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
