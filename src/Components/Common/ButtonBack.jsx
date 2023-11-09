import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Header/Title/Title.module.css";

const ButtonBack = ({ children, width, height, color }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      style={((width = { width }), (height = { height }), (color = { color }))}
    >
      {children}
    </div>
  );
};

export default ButtonBack;
