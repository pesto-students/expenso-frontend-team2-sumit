import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PrivateRoute = ({ children }) => {
  const [user] = useAuth();
  console.log("user", user);
  return user !== null ? children : <Navigate to="/" />;
};

export default PrivateRoute;
