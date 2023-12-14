//вынести за пределы record

import { connect, useSelector } from "react-redux";
import Preloader from "../Preloader/preloader";
import { getUsers, setFollow } from "../../redux/users-reducer";
import React, { useEffect } from "react";
import Users from "./Users";
import UsersCopy from "./UsersCopy";

export const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.page, props.pageSize);
  }, []);

  /*componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize); //с useEffect
  };*/
  return (
    <>
      <UsersCopy />
      {/*
        <Preloader isFetching={this.props.isFetching}/> 
        <Users
          setFollow={this.props.setFollow}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
          followingInProgress={this.props.followingInProgress}
        />*/}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    page: state.usersPage.page,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  setFollow,
})(UsersContainer);
