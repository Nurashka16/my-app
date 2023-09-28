import React from "react";
import style from "../HomeAuth.module.css";
import { NavLink } from "react-router-dom";

const HomeAuthSignIn = (props) => {
  return (
    <div className={style.container}>
      <div className={style.signIn}>
        <h1 className={style.signIn__title}>Вход ВКонтакте</h1>
        <p className={style.signIn__text}>
          Мобильная версия поможет вам оставаться ВКонтакте, даже если <br/> вы далеко
          от компьютера.
        </p>
        <NavLink value="signIn" to={"/auth/signIn"} className={style.signIn__link}>
          Войти по телефону или почте
        </NavLink>
      </div>
    </div>
  );
};

export default HomeAuthSignIn;
