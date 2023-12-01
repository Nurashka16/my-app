import React from "react";
import style from "./Footer.module.css";
import { useNavigate, Link } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate("/auth");

  return (
    <div>
      <div className={style.item}>
        <Link className={style.link} to="/123">
          Настройки
        </Link>
      </div>
      <div className={style.item}>
        <Link className={style.link} to="/2">
          Помощь
        </Link>
      </div>
      <div className={style.item}>
        <Link className={style.link} to="/3">
          Версия для компьютера
        </Link>
      </div>
      <div className={style.item} onClick={goBack}>
        <Link className={style.link} onClick={(e) => props.clearData()} to="/">
          Выход
        </Link>
      </div>
    </div>
  );
};

export default Footer;
