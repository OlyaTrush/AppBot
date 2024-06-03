import { Route, Routes } from "react-router-dom";
import ProductList from "../components/pages/products/ProductList.jsx";
import ProductItem from "../components/pages/products/ProductItem.jsx";
import OrderPage from "../components/pages/basket/OrderPage.jsx";
import PaymentForm from "../components/pages/forms/PaymentForm.jsx";
import BasketPage from "../components/pages/basket/BasketPage.jsx";
import Form from "../components/pages/forms/FormPage.jsx";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:id" element={<ProductItem />} />
      <Route path="/order" element={<OrderPage />}>
        <Route index element={<BasketPage />} />
        <Route path="delivery" element={<Form />} />
        <Route path="pay" element={<PaymentForm />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
