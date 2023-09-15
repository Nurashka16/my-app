import React from "react";
import style from "./SignUp.module.css";
import { NavLink } from "react-router-dom";

function Record(props) {
  const lists = props.inputFields.map((el) => {
    return (
      <div className={style.item} key={el.id}>
        <label className={style.text}>{el.text}</label>
        <input
          name={el.name}
          onChange={props.onChangeHandler}
          className={style.input}
          type="text"
          required={el.name !== "avatar"}
          value={props.authPage[el.name] ? props.authPage[el.name] : ""}
        />
      </div>
    );
  });
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>Создайте аккаунт</div>
        <form className={style.form}>
          {lists}
        <div className={style.register}>
          <input
            className={style.btn_register}
            onClick={(e) =>props.register()}
            type="button"
            value="Регистрация"
          />
        </div>
        </form>
        <div className={style.description}>
          Уже есть аккаунт?
          <NavLink to={"/login"} className={style.btn_sign}>
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Record;
