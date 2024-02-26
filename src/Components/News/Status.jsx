import React from "react";
import style from "./News.module.css";
import Avatar from "../Common/Avatar/Avatar";


const Status = ({ stories }) => {
  return (
    <div className={style.status_content} id={stories.id}>
      <div className={style.status_img}>
        <Avatar url={stories.img} height="56px" width="56px" />
      </div>
      <div className={style.status_name}>{stories.name}</div>
    </div>
  );
};

export default Status;
