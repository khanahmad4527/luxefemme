import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Singup";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ProductDetailPage from "./ProductDetailPage";
import ProductsPage from "./ProductsPage";
import CheckoutPage from "./CheckoutPage";
import AuthProtectedRoutes from "../hoc/AuthProtectedRoutes";
import OrdersPage from "./OrdersPage";
import Home from "./AdminPages/Home";
import Users from "./AdminPages/Users";
import Admins from "./AdminPages/Admins";
import Products from "./AdminPages/Products";
import SimpleSidebar from "../components/Admin/AdminSidebar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route
        path="/cart"
        element={
          <AuthProtectedRoutes>
            <CartPage />
          </AuthProtectedRoutes>
        }
      />
      <Route
        path="/checkout"
        element={
          <AuthProtectedRoutes>
            <CheckoutPage />
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
      <Route
        path="/admin/"
        element={
          <>
            {" "}
            <SimpleSidebar /> <Home />
          </>
        }
      />
      <Route
        path="/admin/users"
        element={
          <>
            {" "}
            <SimpleSidebar /> <Users />
          </>
        }
      />
      <Route
        path="/admin/admins"
        element={
          <>
            {" "}
            <SimpleSidebar /> <Admins />
          </>
        }
      />
      <Route
        path="/admin/products"
        element={
          <>
            {" "}
            <SimpleSidebar /> <Products />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
