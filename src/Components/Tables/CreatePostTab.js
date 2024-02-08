import React from "react";
import {
  Icon28WriteSquareOutline,
  Icon28PictureOutline,
  Icon28LogoClipsOutline,
  Icon20Cancel,
} from "@vkontakte/icons";
import { Link } from "react-router-dom";
import style from "./Tables.module.css";
import ItemTabl from "../Common/ItemTabl/ItemTabl";

const CreatePostTab = ({show, onShow, width,
  height,
  radius}) => {
  const list = [
    {
      id: 1,
      text: "Запись",
      iconLeft: <Icon28WriteSquareOutline />,
      link: "/createPost",
    },
    {
      id: 2,
      text: "Фото",
      iconLeft: <Icon28PictureOutline />,
    },
    { id: 3, text: "Клип", iconLeft: <Icon28LogoClipsOutline /> },
  ];
  const buttonsList = list.map((el) => {
    return (
      <Link className={style.burger_item} to={el.link && el.link}>
        <ItemTabl text={el.text} iconLeft={el.iconLeft} />
      </Link>
    );
  });
  return (
    <div className={style.body}>
      <div className={style.wrap} style={{borderRadius:radius, height:height, width:width }}>
        <div className={style.title}>Публикация</div>
        <div className={style.buttons}>{buttonsList}</div>
      </div>
      <div
        className={style.btn_close}
         onClick={() => onShow(!show)}
      >
        <Icon20Cancel />
      </div>
    </div>
  );
};

export default CreatePostTab;
