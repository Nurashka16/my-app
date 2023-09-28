import React from "react";
import style from "./SignUp.module.css";
import { NavLink } from "react-router-dom";

const SignUp = (props) => {
  const list = props.inputFields.map((el) => {
    return (
      <div className={style.textField__container} key={el.id}>
        <input
          type="text"
          className={style.textField__input}
          onChange={props.onChangeHandler}
          name={el.name}
          required={el.name !== "avatar"}
          placeholder={el.text}
          id=""
          value={props.authPage[el.name] ? props.authPage[el.name] : ""}
        />
      </div>
    );
  });
  return (
    <div className={style.signUp}>
      <form action="" className={style.textField}>
        {list}
      </form>
      <div className={style.footer}>
        <div className={style.btn__login} onClick={(e) => props.register()}>
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default SignUp;
