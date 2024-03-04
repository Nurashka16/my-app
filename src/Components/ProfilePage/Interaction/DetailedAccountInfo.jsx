import React from "react";
import {
  Icon28UsersOutline,
  Icon28Users3Outline,
  Icon20Cancel,
  Icon20MentionOutline,
  Icon20ArticleOutline,
  Icon20GiftOutline,
  Icon20HomeOutline,
  Icon20LikeOutline,
  Icon20WorkOutline,
} from "@vkontakte/icons";
import { Link } from "react-router-dom";
import style from "./DetailedAccountInfo.module.css";
import ItemLink from "../../Common/ItemLink/ItemLink";

const DetailedAccountInfo = ({ show, onShow, width, height, radius, info }) => {
  const buttons = [
    {
      id: 1,
      text: "Друзья",
      iconLeft: <Icon28UsersOutline />,
      link: "/friends",
    },
    {
      id: 2,
      text: "Подписки",
      iconLeft: <Icon28Users3Outline />,
      link: "/communities",
    },
    {
      id: 3,
      text: "Сообщества",
      iconLeft: <Icon28Users3Outline />,
      link: "/communities",
    },
  ];
  const infoList = [
    {
      id: 1,
      text: "День рождения: " + info.birthday,
      iconLeft: <Icon20GiftOutline color="#99a2ad" />,
    },
    {
      id: 2,
      text: "Семейное положение: " + info.familyStatus,
      iconLeft: <Icon20LikeOutline color="#99a2ad" />,
    },
    {
      id: 3,
      text: "Город: " + info.city,
      iconLeft: <Icon20WorkOutline color="#99a2ad" />,
    },
    {
      id: 4,
      text: "Место работы: " + info.work,
      iconLeft: <Icon20HomeOutline color="#99a2ad" />,
    },
  ];
  const buttonsList = buttons.map((el) => {
    return (
      <Link className={style.burger_item} to={el.link}>
        <ItemLink id={el.id} text={el.text} iconLeft={el.iconLeft} />
      </Link>
    );
  });
  const infoBlock = infoList.map((el) => {
    return (
      <div id={el.id} className={style.content}>
        {el.iconLeft}
        <div className={style.text}> {el.text} </div>
      </div>
    );
  });
  return (
    <div className={style.body}>
      <div
        className={style.container}
        style={{ borderRadius: radius, height: height, width: width }}
      >
        <div className={style.title}>Подробнее</div>
        <div className={style.statusContainer}>
          <div className={style.content}>
            <Icon20ArticleOutline color="gray" />
            <div className={style.status}>status text</div>
          </div>
          <div className={style.content}>
            <Icon20MentionOutline color="gray" />
            <div className={style.nik}>nik</div>
          </div>
        </div>
        <div className={style.infoContainer}>{infoBlock}</div>
        <div className={style.buttons}>{buttonsList}</div>
      </div>
    </div>
  );
};

export default DetailedAccountInfo;
