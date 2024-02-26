import React from "react";
import style from "./Wall.module.css";

const Description = ({ text }) => {
  return <div className={style.text}>{text}</div>;
};

export default Description;
