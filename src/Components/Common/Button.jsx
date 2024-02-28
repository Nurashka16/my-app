import React from "react";
import style from "./Button.module.css";

const Button = ({
  children,
  background = "#2688eb",
  color = "white",
  radius = "8px",
  height = "100%",
  width = "100%",
  isShow,
  setShow,
  margin, fontsize
}) => {
  return (
    <div
      style={{
        backgroundColor: background,
        color: color,
        borderRadius: radius,
        height: height,
        width: width,  margin:margin, fontSize: fontsize
      }}
      className={style.btn}
      onClick={() => setShow(!isShow)}
    >
      {children}
    </div>
  );
};

export default Button;
