import React from "react";
import style from "./SignUp.module.css";
import { NavLink } from "react-router-dom";

const SignUp = (props) => {
  return (
    <div className={style.signUp}>
      <form action="" className={style.textField}>
        <div className={style.textField__container}>
          <input
            type="text"
            className={style.textField__input}
            value={props.email}
            onChange={(e) => props.changeEmail(e.target.value)}
            name=""
            placeholder="Имя"
            id=""
          />
        </div>
        <div className={style.textField__container}>
          <input
            type="text"
            className={style.textField__input}
            value={props.email}
            onChange={(e) => props.changeEmail(e.target.value)}
            name=""
            placeholder="Фамилия"
            id=""
          />
        </div>
        <div className={style.textField__container}>
          <input
            type="text"
            className={style.textField__input}
            value={props.email}
            onChange={(e) => props.changeEmail(e.target.value)}
            name=""
            placeholder="Электронная почта"
            id=""
          />
        </div>
        <div className={style.textField__container}>
          <input
            type="text"
            className={style.textField__input}
            value={props.email}
            onChange={(e) => props.changeEmail(e.target.value)}
            name=""
            placeholder="Пароль"
            id=""
          />
        </div>
      </form>
      <div className={style.footer}>
        <div
          className={style.btn__login}
          onClick={(e) => props.signIn(props.email, props.password)}
        >
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default SignUp;
