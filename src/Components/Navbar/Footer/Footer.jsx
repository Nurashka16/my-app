import React from "react";
import CostumLink from "../../CostumLink";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');

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
      <div className={style.item} onClick={goBack}>
        <CostumLink className={style.link} to="/" >
          Выход
        </CostumLink>
      </div>
    </div>
  );
};

export default Footer;
