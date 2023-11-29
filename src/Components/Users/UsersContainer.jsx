//вынести за пределы record

import { connect } from "react-redux";
import Preloader from "../Preloader/preloader";
import { getUsers, setFollow } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };
  render() {
    return (
      <>
        <Preloader isFetching={this.props.isFetching}/> 
        <Users
          setFollow={this.props.setFollow}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalCount={this.props.totalCount}
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
  getUsers,
  setFollow,
})(UsersContainer);
