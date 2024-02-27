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

const Wall = ({avatar, name, date, text, img, like, comments, share, viewed }) => {
  return (
    <div className={style.wall}>
      <div className={style.news_content}>
        <Header
          img={avatar}
          name={name}
          date={date}
        />
        <Description text={text} />
        <Content img={img} />
        <Reaction
          like={like}
          comments={comments}
          share={share}
          viewed={viewed}
        />
      </div>
    </div>
  );
};

export default Wall;
