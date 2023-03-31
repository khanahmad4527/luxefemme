import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProtectedRoutes = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProtectedRoutes;
