import { connect } from "react-redux";
import style from "./Users.module.css";
import Preloader from "../../Preloader/preloader";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setIsFetching,
  inProgressOfSwitching
} from "../../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import { NavLink, Outlet, useParams } from "react-router-dom";
import UsersAPI from "../../../API/UsersAPI";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data);
      });
  }

  onPageChanged = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    UsersAPI.getUsers(page, this.props.pageSize)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data);
      });
  };
  render() {
    return (
      <>
        {Preloader(this.props.isFetching)}
        <Users
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          isFetching={this.props.isFetching}
          inProgressOfSwitching={this.props.inProgressOfSwitching}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setIsFetching,   inProgressOfSwitching
})(UsersContainer);
