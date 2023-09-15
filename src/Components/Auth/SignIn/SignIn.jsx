import React from "react";
import style from "./SignIn.module.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div className={style.login}>
      <div className={style.container}>
        <div className={style.login_memo}>
          Lorem ipsum dolor sit amet consectetur,
          <br />
          adipisicing elit. Voluptate dolores eveniet
          <br />
          maxime eaque omnis eum eos dolorum <br />
          sapiente repudiandae. Impedit rerum <br />
          cupiditate eligendi! Aliquam quasi
          <br />
          molestias eligendi repellat, reprehenderit.
        </div>
        <div className={style.login_area}>
          <div className={style.login_logotype}>
            <div className={style.logotype_img}>
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
            <div className={style.title}>Вход ВКонтакте</div>
          </div>
          <form action="" className={style.textarea}>
            <div className={style.emailContainer}>
              <div className={style.description}>Адрес электронной почты</div>
              <input
                type="text"
                className={style.email_input}
                value={props.email}
                onChange={(e) => props.changeEmail(e.target.value)}
                name=""
                id=""
              />
            </div>
            <div className={style.passwordContainer}>
              <div className={style.description}>Пароль</div>
              <input
                value={props.password}
                onChange={(e) => props.changePassword(e.target.value)}
                type="text"
                className={style.password_input}
                name=""
                id=""
              />
            </div>
          </form>
          <div className={style.footer}>
            <div
              className={style.btn_login}
              onClick={(e) => props.signIn(props.email, props.password)}
            >
              Войти
            </div>
            <NavLink to={"/"} className={style.btn_exit}>
              Вернуться назад
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
