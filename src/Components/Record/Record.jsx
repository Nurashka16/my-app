import React from "react";
import style from "./Record.module.css";
import { NavLink } from "react-router-dom";

function Record() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>Создайте аккаунт</div>
        <form className={style.lists}>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Имя:
            </label>
            <input className={style.input} type="text" />
          </div>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Фамилия:
            </label>
            <input className={style.input} type="text" />
          </div>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Эл. почта:
            </label>
            <input className={style.input} type="text" />
          </div>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Пароль:
            </label>
            <input className={style.input} type="text" />
          </div>
        </form>
        <div className={style.register}>
            <input className={style.btn_register} type="submit" value="Регистрация" />  
        </div>
        <div className={style.description}>
          Уже есть аккаунт?
          <NavLink to={"/"}
               className={style.btn_sign}
              >
               Войти
         </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Record;
