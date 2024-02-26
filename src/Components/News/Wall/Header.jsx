import React from "react";
import style from "./Wall.module.css";
import Avatar from "../../Common/Avatar/Avatar";
import { Icon24MoreHorizontal } from "@vkontakte/icons";

const Header = ({ img, name, date }) => {
  return (
    <div className={style.header}>
      <div className={style.info}>
        <div className={style.info_img}>
          <Avatar height="36px" width="36px" url={img} />
        </div>
        <div className={style.info_data}>
          <div className={style.name}>{name}</div>
          <div className={style.date}>{date}</div>
        </div>
      </div>
      <Icon24MoreHorizontal color="#99a2ad" />
    </div>
  );
};

export default Header;
