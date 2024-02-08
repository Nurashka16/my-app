import React from "react";
import style from "./Search.module.css";
import { Icon16SearchOutline } from "@vkontakte/icons";
import { useClickOutside } from "../clickOutside";
import { useEffect } from "react";
//Нужно придумать что делать с анимацией при исчезновении.
//Либо как у вк или же поставить absolute, но уже через css.

const Search = ({
  width,
  height,
  borderRadius = "8px",
  text = "Поиск",
  icon = "",
}) => {
  const { ref: menuRef, isShow, onShow } = useClickOutside();
  useEffect(() => {}, [isShow]);
  return (
    <div
      className={style.container}
      ref={menuRef}
      onClick={(e) => onShow()}
      style={{
        backgroundColor: "#ebedf0",
        width: `${isShow ? "356px" : width}`,
        transitionDuration: isShow && "0.5s",
        position: isShow && "absolute",
        top: isShow && "20.8%",
        right: isShow && "20.95%",
        height: height,
        borderRadius: borderRadius,
      }}
    >
      <div className={style.icon}>
        <Icon16SearchOutline
          style={{ color: "#818c99", width: "16px", height: "16px" }}
        />
      </div>
      <input
        className={style.input}
        style={{ borderRadius: borderRadius }}
        type="search"
        placeholder={text}
      />
      {icon && (
        <div
          className={style.icon_outline}
          style={{
            backgroundColor: "#2688eb",
            width: "53.5px",
            height: height,
            borderRadius: "0 8px 8px 0",
          }}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default Search;
