import React from "react";
import style from "./Friends.module.css";
import Avatar from "../../Common/Avatar/Avatar";

const Friends = ({ users, count }) => {
  const getFavoriteFriends = (users) => users.slice(0, 3);

  const avatars = getFavoriteFriends(users).map((user, i) => (
    <div
      className={style.avatar}
      style={{ zIndex: "100" - i, position: "relative", left: `-${i*2}px` }}
    >
      <Avatar
        outline="2.5px white solid "
        url={user.avatar}
        height="24px"
        width="24px"
      />
    </div>
  ));

  const getCountFriends = (count) => {
    return count > 2 || count == 0 ? count + " друзей" : count + " друг";
  };

  return (
    <div className={style.friends}>
      <div className={style.content}>
        <div className={style.count}>{getCountFriends(count)}</div>
        <div className={style.avatars}>{avatars}</div>
      </div>
    </div>
  );
};

export default Friends;
