import React from "react";
import style from "./Button.module.css";

const Button = ({
  children,
  background = "#2688eb",
  color = "white",
  icon,
  radius = "8px",
  height,
  width,
}) => {
  return (
    <div
      style={{ backgroundColor: background, color: color, borderRadius: radius }}
      className={style.btn}
    >
      {children}
    </div>
  );
};

export default Button;
