import React from "react";
import style from "./Stories.module.css";
import Avatar from "../../Common/Avatar/Avatar";

const Story = ({ id, img, name }) => {
  return (
    <div className={style.story_content} id={id}>
      <div className={style.story_img}>
        <Avatar url={img} height="56px" width="56px" />
      </div>
      <div className={style.story_name}>{name}</div>
    </div>
  );
};

export default Story;
