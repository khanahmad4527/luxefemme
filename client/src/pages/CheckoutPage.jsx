import React from "react";
import Checkout from "../components/Checkout/Checkout";
import CheckoutNavbar from "../components/Checkout/CheckoutNavbar";

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutNavbar />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
