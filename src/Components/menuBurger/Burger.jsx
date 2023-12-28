import React, { useState } from "react";
import style from "./Burger.module.css";

const Burger = ({ arr }) => {
  let links = arr.map((elem) => (
    <div className={style.link}>
      <div className={style.icon}>{elem.iconLeft}</div>
      <div className={style.text}>{elem.text}</div>
      {elem.iconRight && (
        <div className={style.icon_right}>{elem.iconRight}</div>
      )}
    </div>
  ));
  return (
    <div className={style.navbar}>
      <div className={style.links}>{links}</div>
    </div>
  );
};

export default Burger;
