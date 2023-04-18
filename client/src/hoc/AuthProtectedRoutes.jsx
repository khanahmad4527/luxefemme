import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtectedRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  const location = useLocation();

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default AuthProtectedRoutes;
