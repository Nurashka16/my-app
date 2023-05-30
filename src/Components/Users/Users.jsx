import React from "react";
import style from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const users = response.data.slice(0, 20);
        this.props.setUsers(users);
      });
  }
  render() {
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    console.log(pages);
    return (
      <div>
        <div className="style.pages">
          {pages.map((p) => {
            return (
              <span className={this.props.currentPage === p && style.selectedPage}>
                {p}
              </span>
            );
          })}
        </div>
        <div>
          {this.props.users.map((u) => (
            <div className={style.user} key={u.id}>
              <span>
                <div>
                  <img src={u.thumbnailUrl} className={style.photo} />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
                      }}
                    >
                      follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.unfollow(u.id);
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
  }
}

export default Users;
