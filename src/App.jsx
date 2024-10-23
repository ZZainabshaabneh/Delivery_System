import {Route, Routes } from "react-router-dom";
import DeliverySystem from "./Pages/Home";
import Signin from "./Pages/Signin";  
import Signup from "./Pages/Signup";  
import  Orderlist from "./Pages/Orderlist";
import  Items  from "./Pages/Items";
import PaymentForm from "./Pages/Payment"
import Homepage from "./Pages/Homepage"
import Done from "./Pages/Done";
import Catalog from "./Pages/Cataloge"
import OrderPage from "./Pages/OrderPage";
import Contacts from "./Pages/Contact"
import OrderPage from "./Pages/OrderPage"
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DeliverySystem />}></Route>
      <Route path="/Contact" element={<Contacts />}></Route>
      <Route path="/Home" element={<Homepage />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/Signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Services" element={<Orderlist />}></Route>
      <Route path="/OrderPage" element={<OrderPage />}></Route>
      <Route path="/Items" element={<Items />}></Route>
      <Route path="/Payment" element={<PaymentForm />}></Route>
      <Route path="/OrderPage" element={<OrderPage />}></Route>
      <Route path="/done" element={<Done />}></Route>
    </Routes>
  );
};
