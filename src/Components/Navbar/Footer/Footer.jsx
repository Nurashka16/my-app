import React from "react";
import CostumLink from "../../CostumLink";
import style from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/123">
          Настройки
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/2">
          Помощь
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/3">
          Версия для компьютера
        </CostumLink>
      </div>
      <div className={style.item}>
        <CostumLink className={style.link} to="/4">
          Выход
        </CostumLink>
      </div>
    </div>
  );
};

export default Footer;
