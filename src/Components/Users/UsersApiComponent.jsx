import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=${this.props.currentPage}
        &pageSize=${this.props.pageSize}`
      )
      .then((response) => {
        console.log(response.data);
        this.props.setUsers(response.data.data);
      });
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `http://127.0.0.1:5298/Users/Get?page=${page}
      &pageSize=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.data);
      });
  };
  render() {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <Users
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalCount={this.props.totalCount}
      />
    );
  }
}
export default UsersApiComponent;
