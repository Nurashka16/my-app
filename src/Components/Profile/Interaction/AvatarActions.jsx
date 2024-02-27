import ItemTabl from "../../Common/ItemTabl/ItemTabl";
import React from "react";
import {
  Icon20UserCircleOutline,
  Icon20WriteOutline,
  Icon20DeleteOutline,
} from "@vkontakte/icons";

export const AvatarActions = () => {
  const list = [
    { id: 1, text: "Открыть фото", icon: <Icon20UserCircleOutline /> },
    { id: 2, text: "Изменить фото", icon: <Icon20WriteOutline /> },
    { id: 3, text: "Удалить фото", icon: <Icon20DeleteOutline /> },
  ];
  const buttonsList = list.map((el) => {
    return <ItemTabl text={el.text} iconLeft={el.icon} />;
  });
  return <div>{buttonsList}</div>;
};
