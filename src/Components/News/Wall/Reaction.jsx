import React from "react";
import style from "./Wall.module.css";
import {
  Icon24LikeOutline,
  Icon24CommentOutline,
  Icon24ShareOutline,
  Icon20View,
} from "@vkontakte/icons";

const Reaction = ({ like, comments, share, viewed }) => {
  return (
    <div className={style.footer}>
      <div className={style.reaction}>
        <div className={style.icon}>
          <Icon24LikeOutline color="#818c99" />
          <div className={style.number}>{like}</div>
        </div>
        <div className={style.icon}>
          <Icon24CommentOutline color="#818c99" />
          <div className={style.number}> {comments}</div>
        </div>
        <div className={style.icon}>
          <Icon24ShareOutline color="#818c99" />
          <div className={style.number}>{share}</div>
        </div>
      </div>
      <div className={style.views}>
        <Icon20View color="#c0c5cc" />
        <div className={style.number}> {viewed}</div>
      </div>
    </div>
  );
};

export default Reaction;
