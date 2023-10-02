import React from "react";
import { useNavigate } from "react-router-dom";

const logoStyles = {
  fontFamily: "'Courgette', cursive",
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
};

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div style={logoStyles} onClick={() => navigate("/")}>
      LuxeFemme
    </div>
  );
};

export default Logo;
