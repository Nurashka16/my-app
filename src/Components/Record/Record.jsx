import React from "react";
import style from "./Record.module.css";
import { NavLink } from "react-router-dom";

function Record(props) {

  const onChangeHandler = (e) => 
  (props.setUserData({...props.authPage,
     [e.target.name]: e.target.value}))

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>Создайте аккаунт</div>
        <form className={style.lists}>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Имя:
            </label>
            <input name="firstName" className={style.input} type="text" onChange={onChangeHandler}/>
          </div>
          <div className={style.item}>
            <label className={style.text} for="fname">
              Фамилия:
            </label>
            <input name="lastName" className={style.input} type="text" onChange={onChangeHandler}/>
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
          <div className={style.item}>
            <label className={style.text} for="fname">
              Аватар:
            </label>
            <input className={style.input} type="text" />
          </div>
        </form>
        <div className={style.register}>
            <input className={style.btn_register}
            onClick={()=> console.log(2)}
            type="submit" value="Регистрация" />  
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
