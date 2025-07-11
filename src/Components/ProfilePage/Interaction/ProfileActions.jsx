import ItemLink from "../../Common/ItemLink/ItemLink";
import React from "react";
import {
  Icon28Profile,
  Icon28WriteOutline,
  Icon28CopyOutline,
  Icon28LinkCircleOutline,
  Icon28ArchiveOutline,
  Icon28StatisticsOutline,
} from "@vkontakte/icons";
import style from "./ProfileActions.module.css";

const ProfileActions = ({ padding }) => {
  const list = [
    { id: 1, text: "Редактировать профиль", iconLeft: <Icon28Profile /> },
    {
      id: 2,
      text: "Изменить обложку",
      iconLeft: <Icon28WriteOutline />,
    },
    { id: 3, text: "Скопировать ссылку", iconLeft: <Icon28CopyOutline /> },
    {
      id: 4,
      text: "Поделиться с профилем",
      iconLeft: <Icon28LinkCircleOutline />,
    },
    {
      id: 5,
      text: "Архив историй",
      iconLeft: <Icon28ArchiveOutline />,
    },
    {
      id: 6,
      text: "Статистика профиля",
      iconLeft: <Icon28StatisticsOutline />,
    },
  ];
  const buttonsList = list.map((el) => {
    return (
      <>
        <ItemLink text={el.text} iconLeft={el.iconLeft} padding={padding} />
        {(el.id == 2 || el.id == 4) && (
          <div
            style={{
              height: "1.05px",
              margin: "0 auto",
              width: "90%",
              backgroundColor: "rgba(199, 199, 199, 0.7)",
            }}
          ></div>
        )}
      </>
    );
  });
  return (
    <div className={style.wrap}>
      <div className={style.buttons}>{buttonsList}</div>
    </div>
  );
};

export default ProfileActions;
