import React from "react";
import style from "./Search.module.css";
import { Icon16SearchOutline } from "@vkontakte/icons";

const Search = ({ width, height, borderRadius = "8px" }) => {
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: "#ebedf0",
        width: width,
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
        placeholder="Поиск"
      />
    </div>
  );
};

export default Search;
