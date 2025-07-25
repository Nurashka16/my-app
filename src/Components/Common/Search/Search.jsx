import React, { useState } from "react";
import style from "./Search.module.css";
import { Icon16SearchOutline } from "@vkontakte/icons";


const Search = ({
  height,
  borderRadius = "8px",
  text = "Поиск",
  icon = "",
}) => {
  const [isShow, onShow] = useState(false);
  return (
    <div
      className={isShow ? style.containerActive : style.container}
      onClick={(e) => onShow(!isShow)}
      style={{
        backgroundColor: "#ebedf0",
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
        style={{
          borderRadius: borderRadius,
          backgroundColor: "#ebedf0",
        }}
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
