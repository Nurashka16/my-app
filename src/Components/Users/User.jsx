import React from "react";
import style from "./Users.module.css";
import Avatar from "../Common/Avatar/Avatar";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link to={`/profile/${user.id}`} className={style.user} key={user.id}>
      <div className={style.user_container}>
        <div className={style.user_avatar}>
          <Avatar url={user.avatar} />
        </div>
        <div className={style.user_info}>
          <div className={style.user_name}>
            {user.firstName + " " + user.lastName}
          </div>
          <div className={style.user_icon}></div>
          <div className={style.user_buttons}>
            <div className={style.user_btn__call}></div>
            <div className={style.user_btn__write}></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default User;
