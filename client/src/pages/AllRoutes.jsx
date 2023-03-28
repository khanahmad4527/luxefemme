import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Singup";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ProductDetailPage from "./ProductDetailPage";
import ProductsPage from "./ProductsPage";
import AuthProtectedRoutes from "../hoc/AuthProtectedRoutes";
import OrdersPage from "./OrdersPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={
          <AuthProtectedRoutes>
            <ProductsPage />
          </AuthProtectedRoutes>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthProtectedRoutes>
            <ProductDetailPage />
          </AuthProtectedRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthProtectedRoutes>
            <CartPage />
          </AuthProtectedRoutes>
        }
      />
      <Route
        path="/orders"
        element={
          <AuthProtectedRoutes>
            <OrdersPage />
          </AuthProtectedRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
