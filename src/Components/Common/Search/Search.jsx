import React from "react";
import style from "./Search.module.css";
import { Icon16SearchOutline } from "@vkontakte/icons";
import { useClickOutside } from "../clickOutside";
import { useEffect } from "react";

const Search = ({
  width,
  height,
  borderRadius = "8px",
  text = "Поиск",
  icon = "",
}) => {
  // const extension = (e) => {
  //   const a = e.target.parentElement.style;
  //   a.width = "300px";
  //   a.background = "black"
  //   return a
  // };

  const { ref: menuRef, isShow, onShow } = useClickOutside();
  // console.log(isShow)
    useEffect(() => {
  }, [isShow]);
  return (
    <div
      className={style.container} ref={menuRef}
      // onFocus={(e) => extension(e)}
      onClick={(e)=>onShow()}

      style={{
        backgroundColor: "#ebedf0",
        width:`${isShow ? "356px" : width}`,
        position: isShow && "absolute",
        top:isShow && "20.5%",
        left:isShow && "56.15%",
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
