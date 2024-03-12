import React from "react";
import Menu from "./Menu";
import Content from "./Content/Content";
import style from "./MediaResources.module.css";

const MediaResources = () => {
  return (
    <div className={style.tab}>
      <Menu />
    </div>
  );
};

export default MediaResources;
