import React from "react";
import style from "./Wall.module.css";
import {
  Icon24AddSquareOutline,
  Icon24CancelOutline,
} from "@vkontakte/icons";
//нужны для подписки для группу и убрать из рекомендации
import Reaction from "./Reaction";
import Content from "./Content";
import Header from "./Header";
import Description from "./Description";

const Wall = ({ post }) => {
  return (
    <div className={style.wall}>
      <div className={style.news_content}>
        <Header
          img={post.communityImg}
          name={post.communityName}
          date={post.date}
        />
        <Description text={post.text} />
        <Content img={post.img} />
        <Reaction
          like={post.like}
          comments={post.comments}
          share={post.share}
          viewed={post.viewed}
        />
      </div>
    </div>
  );
};

export default Wall;
