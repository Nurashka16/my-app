import React from "react";
import style from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=${this.props.currentPage}
        &pageSize=${this.props.pageSize}`
      )
      .then((response) => {
        //const users = response.data.slice(0, 20);
        console.log(response.data);
        this.props.setUsers(response.data.data);
      });
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(
      `http://127.0.0.1:5298/Users/Get?page=${page}
      &pageSize=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.data);
      });
  }
  render() {
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div className="style.pages">
          {pages.map((p) => {
            return (
              <button
                onClick={(e)=> {this.onPageChanged(p)}}
                className={this.props.currentPage === p && style.selectedPage}
              >
                {p}
              </button>
            );
          })}
        </div>
        <div>
          {this.props.users.map((u) => (
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
