import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../utils/Loading";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { Square } from "@chakra-ui/react";
const CartPage = lazy(() => import("./CartPage"));
const HomePage = lazy(() => import("./HomePage"));
const PageNotFound = lazy(() => import("./PageNotFound"));
const ProductDetailPage = lazy(() => import("./ProductDetailPage"));
const ProductsPage = lazy(() => import("./ProductsPage"));
const CheckoutPage = lazy(() => import("./CheckoutPage"));
const AuthProtectedRoutes = lazy(() => import("../hoc/AuthProtectedRoutes"));
const OrdersPage = lazy(() => import("./OrdersPage"));
const Home = lazy(() => import("./AdminPages/Home"));
const Users = lazy(() => import("./AdminPages/Users"));
const Admins = lazy(() => import("./AdminPages/Admins"));
const Products = lazy(() => import("./AdminPages/Products"));
const SimpleSidebar = lazy(() => import("../components/Admin/AdminSidebar"));

const AllRoutes = () => {
  return (
    <Suspense
      fallback={
        <Square minH={"100vh"}>
          <Loading />
        </Square>
      }
    >
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
          path="/admin"
          element={
            <>
              <SimpleSidebar />
              <Home />
            </>
          }
        />
        <Route
          path="/admin/users"
          element={
            <>
              <SimpleSidebar />
              <Users />
            </>
          }
        />
        <Route
          path="/admin/admins"
          element={
            <>
              <SimpleSidebar />
              <Admins />
            </>
          }
        />
        <Route
          path="/admin/products"
          element={
            <>
              <SimpleSidebar />
              <Products />
            </>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
