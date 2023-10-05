import React from "react";
import style from "./SignIn.module.css";

const SignIn = (props) => {
  return (
    <div className={style.signIn}>
      <form action="" className={style.textField}>
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
            value={props.password}
            className={style.textField__input}
            onChange={(e) => props.changePassword(e.target.value)}
            type="text"
            name=""
            placeholder="Пароль"
            id=""
          />
        </div>
      </form>
      <div className={style.footer}>
        <div
          className={style.btn__login}
          onClick={(e) => props.signIn(props.email, 
            props.password)}
        >
          Продолжить
        </div>
      </div>
    </div>
  );
};

export default SignIn;
