import ItemLink from "../../Common/ItemLink/ItemLink";
import React from "react";
import {
   Icon28NewsfeedOutline,
   Icon28CheckCircleOn,
   Icon28HistoryForwardOutline,
   Icon28CameraOutline,
   Icon28SettingsOutline,
} from "@vkontakte/icons";

export const NewsActions = () => {
   const list = [
      {
        id: 1,
        text: "Новости",
        iconLeft: <Icon28NewsfeedOutline />,
        iconRight: <Icon28CheckCircleOn />,
      },
      {
        id: 2,
        text: "Обновления",
        iconLeft: <Icon28HistoryForwardOutline />,
      },
      {
        id: 3,
        text: "Фотографии",
        iconLeft: <Icon28CameraOutline />,
      },
      {
        id: 4,
        text: "Настроить новости",
        iconLeft: <Icon28SettingsOutline />,
      },
    ];
  const buttonsList = list.map((el) => {
    return <ItemLink text={el.text} iconLeft={el.iconLeft} iconRight={el.iconRight} />;
  });
  return <div>{buttonsList}</div>;
};
