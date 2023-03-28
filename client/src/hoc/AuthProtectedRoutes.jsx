import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProtectedRoutes = ({ children }) => {
  return children;
};

export default AuthProtectedRoutes;
