import React, { useEffect } from "react";
import style from "../ProfilePage/Profile/Profile.module.css";
import { cloneElement } from "react";
import { useRef } from "react";
import { useClickOutside } from "./clickOutside";

const Popup = ({ children, burger }) => {
  const windowHeight = window.innerHeight;
  const ref = useRef();

  const clonedElement = cloneElement(burger, { right: "-30%", top: "-128%" });
  const { ref: menuRef, isShow, onShow } = useClickOutside();
  // useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   }
  // }, [ref.current]);
  const showBurger = () => {
    const burgerBottom =
      ref.current?.firstChild?.getBoundingClientRect()?.bottom;
    console.log("firstChild", ref.current?.firstChild);
    console.log(burgerBottom);
    return burgerBottom >= windowHeight ? clonedElement : burger;
  };
  return (
    <div ref={menuRef} className={style.info_avatar} onClick={onShow}>
      {children}
      <div>
        <div ref={ref}>{isShow && showBurger()}</div>
      </div>
    </div>
  );
};

export default Popup;
