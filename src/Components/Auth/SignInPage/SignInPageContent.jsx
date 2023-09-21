import React from "react";
import style from "./SignInPage.module.css";
import { NavLink } from "react-router-dom";

const SignInPageContent = (props) => {
  return (
    <div className={style.content}>
      <div className={style.content__logotype}>
        <div className={style.logotype__img}>
          <svg
            width="48"
            height="48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M0 9.6c0-4.5 0-6.8 1.4-8.2C2.8 0 5.1 0 9.6 0h.8c4.5 0 6.8 0 8.2 1.4C20 2.8 20 5.1 20 9.6v.8c0 4.5 0 6.8-1.4 8.2-1.4 1.4-3.7 1.4-8.2 1.4h-.8c-4.5 0-6.8 0-8.2-1.4C0 17.2 0 14.9 0 10.4v-.8Z"
              fill="#07F"
            ></path>
            <path
              d="M10.7 14.3c-4.5 0-7.2-3.1-7.3-8.3h2.3c0 3.8 1.8 5.4 3.1 5.8V6H11v3.3c1.3-.1 2.6-1.6 3-3.3h2.2c-.3 2-1.8 3.5-2.8 4.2 1 .5 2.7 1.8 3.3 4.1h-2.3c-.5-1.6-1.8-2.8-3.4-3v3h-.3Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className={style.logotype__title}>Вход ВКонтакте</div>
      </div>
      <form action="" className={style.textField}>
        <div className={style.textField__container}>
          <div className={style.textField__description}>
            Адрес электронной почты
          </div>
          <input
            type="text"
            className={style.textField__input}
            value={props.email}
            onChange={(e) => props.changeEmail(e.target.value)}
            name=""
            id=""
          />
        </div>
        <div className={style.textField__container}>
          <div className={style.textField__description}>Пароль</div>
          <input
            value={props.password}
            className={style.textField__input}
            onChange={(e) => props.changePassword(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
      </form>
      <div className={style.buttons}>
        <div
          className={style.btn__login}
          onClick={(e) => props.signIn(props.email, props.password)}
        >
          Войти
        </div>
        <NavLink to={"/"} className={style.btn__exit}>
          Вернуться назад
        </NavLink>
      </div>
    </div>
  );
};

export default SignInPageContent;
