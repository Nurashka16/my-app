import style from "./Users.module.css";

const Users = () => {

  return (
    <div>
      <div className="style.pages">
        {pages.map((p) => {
          return (
            <button
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p && style.selectedPage}
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
                <img
                  src="https://flomaster.club/uploads/posts/2022-06/1655430966_4-flomaster-club-p-portreti-lyudei-krasivo-10.jpg"
                  className={style.photo}
                />
              </div>
              <div>
                {u.follow ? (
                  <button
                    onClick={() => {
                     props.follow(u.id);
                    }}
                  >
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div className={style.text}>{u.firstName}</div>
              </span>
              <span>
                <div>Москва</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;