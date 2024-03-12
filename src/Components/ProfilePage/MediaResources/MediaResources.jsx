import { React } from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import style from "./MediaResources.module.css";

const MediaResources = () => {
  return (
    <div className={style.mediaResources}>
      <div className={style.tab}>
        <Menu />
      </div>
      <div className={style.content}>
        <Content />
      </div>
    </div>
  );
};

export default MediaResources;
