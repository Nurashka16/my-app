import React from "react";
import style from "./Users.module.css";
import Search from "../Common/Search/Search";
import User from "./User";
import { useSelector } from "react-redux";
import { Icon24Search } from "@vkontakte/icons";

const UsersCopy = () => {
  const users = useSelector((state) => state.usersPage.users);
  const items = users.map((user) => <User user={user} />);
  return (
    <div className={style.users}>
      <div className={style.users_container}>
        <div className={style.users_header}>
          <div className={style.users_search}>
            <Search
              width={"570px"}
              height={"36px"}
              text={"Введите имя и фамилию"}
              icon={
                <Icon24Search
                  style={{ color: "#fff", width: "24px", height: "24px" }}
                />
              }
            />
          </div>
          <div className={style.users_recommendation}>
            Рекомендации{/*<Recommendation />*/}
          </div>
        </div>
        <div className={style.users_main}>{items/*[...items.reverse()]*/}</div>
      </div>
    </div>
  );
};

export default UsersCopy;
