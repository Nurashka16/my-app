import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setIsFetchingAC,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import style from "./Users.module.css";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=
        ${this.props.currentPage}
        &pageSize=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.data);
      });
      
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=${page}
      &pageSize=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.data);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img
            className={style.load}
            src="https://phonoteka.org/uploads/posts/2022-01/thumbs/1643171694_4-phonoteka-org-p-fon-zagruzki-5.jpg"
          />
        ) : null }
        <Users
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setIsFetching: (value) => {
      dispatch(setIsFetchingAC(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
