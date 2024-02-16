import ItemTabl from "../Common/ItemTabl/ItemTabl";
import React from "react";
import {
  Icon28QuestionOutline,
  Icon28HistoryBackwardOutline,
  Icon28ListLikeOutline,
} from "@vkontakte/icons";
import style from "./ProfileActions.module.css";

export const ServiceActions = () => {
  const list = [
    { id: 1, text: "Вопросы в историях", iconLeft: <Icon28QuestionOutline /> },
    {
      id: 2,
      text: "Воспоминания",
      iconLeft: <Icon28HistoryBackwardOutline />,
    },
    { id: 3, text: "Мои желания", iconLeft: <Icon28ListLikeOutline /> },
  ];
  const buttonsList = list.map((el) => {
    return <ItemTabl text={el.text} iconLeft={el.iconLeft} />;
  });
  return (
    <div className={style.wrap}>
      <div className={style.title}>Сервисы</div>
      <div className={style.buttons}>{buttonsList}</div>
    </div>
  );
};