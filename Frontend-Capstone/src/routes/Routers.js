import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Medicines from "../pages/Medicines";
import MedicineDetail from "../pages/MedicineDetail";
// import Carts from "../components/UI/cart/Carts";
import Checkout from "../pages/Checkout";
import Request from "../pages/Request";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/medicine/:id" element={<MedicineDetail />} />
      {/* <Route path="/carts" element={<Carts />} /> */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/request" element={<Request />} />
    </Routes>
  );
};

export default Routers;
