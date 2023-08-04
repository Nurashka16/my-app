import React, { useState } from "react";
import style from "./Burger.module.css";

const Burger = (props) => {
  let links = props.elems.map((elem) => (
    <div className={style.link}>
      <div className={style.icon}>{elem.icon}</div>
      <div className={style.text}>{elem.text}</div>
      <div className={style.btn}>{elem.btn}</div>
    </div>
  ));
  return (
    <div className={style.navbar}>
      <div className={style.links}>{links}</div>
      <div className={style.btn_close} onClick={(e)=> props.closeBlock()}>x</div>
    </div>
  );
};

export default Burger;
