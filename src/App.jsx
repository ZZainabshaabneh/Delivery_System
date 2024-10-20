import {Route, Routes } from "react-router-dom";
import DeliverySystem from "./Pages/Home";
//import { DashboardLayoutBranding } from "../components/DashboardLayoutBranding.js";  
import Signin from "./Pages/Signin";  
import Signup from "./Pages/Signup";  
import  Orderlist from "./Pages/Orderlist";
import  Items  from "./Pages/Items";
import PaymentForm from "./Pages/Payment"
import { Foot } from "./components/footer";
import Done from "./Pages/Done";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DeliverySystem />}></Route>
      <Route path="/Signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Services" element={<Orderlist />}></Route>
      <Route path="/Items" element={<Items />}></Route>
      <Route path="/Payment" element={<PaymentForm />}></Route>
      <Route path="/Footer" element={<Foot />}></Route>
      <Route path="/done" element={<Done />}></Route>
    </Routes>
  );
};
