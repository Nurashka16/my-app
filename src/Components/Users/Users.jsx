import { NavLink } from "react-router-dom";
import style from "./Users.module.css";


const Users = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const followButton = (userId, follow) => (
    <button
      disabled={props.followingInProgress.some((id) => id == userId)}
      onClick={() => props.setFollow(userId, follow)}
    >
      {follow ? "Подписан" : "Не подписан"}
    </button>
  );

  return (
    <div>
      <div className="style.pages">
        {pages.map((p) => {
          return (
            <button
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? style.selectedPage : ""}
            >
              {p}
            </button>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div className={style.user} key={u.id}>
            <span>
              <div>
                <NavLink
                  className={style.link}
                  key={u.id}
                  to={"/profile/" + u.id}
                >
                  <img
                    src="https://flomaster.club/uploads/posts/2022-06/1655430966_4-flomaster-club-p-portreti-lyudei-krasivo-10.jpg"
                    className={style.photo}
                  />
                </NavLink>
              </div>
            </span>
            <div>{followButton(u.id, !u.follow)}</div>
            <span>
              <span>
                <div className={style.text}>Имя: {u.firstName}</div>
              </span>
              <span>
                <div> Город: Москва</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
