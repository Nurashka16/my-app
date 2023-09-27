import React from "react";
import { NavLink } from "react-router-dom";
import style from "../HomeAuth.module.css";

const HomeAuthSignUp = (props) => {
  return (
    <div className={style.container}>
      <div className={style.signUp}>
        <NavLink to={"/auth"} className={style.signUp__link}>
          Зарегистрироваться
        </NavLink>
      </div>
    </div>
  );
};

export default HomeAuthSignUp;
