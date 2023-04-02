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
import Home from "./AdminPages/Home";
import Users from "./AdminPages/Users";
import Admins from "./AdminPages/Admins";
import Products from "./AdminPages/Products";
import SimpleSidebar from "../components/Admin/AdminSidebar";
import AdminPrivateRoute from "../hoc/AdminProtectedRoutes";
import CheckoutPage from "./CheckoutPage";

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
          <AdminPrivateRoute>
            {" "}
            <SimpleSidebar /> <Home />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminPrivateRoute>
            {" "}
            <SimpleSidebar /> <Users />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/admins"
        element={
          <AdminPrivateRoute>
            {" "}
            <SimpleSidebar /> <Admins />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminPrivateRoute>
            {" "}
            <SimpleSidebar /> <Products />
          </AdminPrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
