import React from "react";
import style from "./IconButton.module.css";

const IconButton = ({ children }) => {
  return <div className={style.icon}>{children}</div>;
};

export default IconButton;
