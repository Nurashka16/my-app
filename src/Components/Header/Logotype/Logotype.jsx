import React from "react";
import style from "./Logotype.module.css";
import { NavLink } from "react-router-dom";

const Logotype = () => {
  return (
    <NavLink className={style.logo} to={"/"}>
      <div className={style.logo_content}>
        <img
          className={style.logo_img}
          src="https://img.freepik.com/premium-vector/modern-badge-vkontakte-icon_578229-170.jpg"
        />
        <div className={style.logo_text}>ВКОНТАКТЕ</div>
      </div>
    </NavLink>
  );
};
/*
<NavLink className={style.link} key={u.id} 
            to={"/profile/"+ (u.id)}>
*/
export default Logotype;
