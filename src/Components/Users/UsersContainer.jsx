import { connect, useSelector } from "react-redux";
import Preloader from "../Preloader/preloader";
import React, { useEffect, useState } from "react";
import Users from "./Users";

import Pagination from "../Common/Pagination";
import UsersCopy from "./UsersCopy";
import axios from "axios";

const UsersContainer = (props) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    /*props.getUsers(props.page, props.pageSize);*/
    if (isFetching) {
      console.log(1);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=35&_page=${currentPage}`
        )
        .then((response) => {
          setUsers([...users, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setIsFetching(false));
    }
  }, [isFetching]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      users.length < totalCount
    ) {
      setIsFetching(true);
    }
  };
  const friends = users.map((u) => {
    return (
      <div style={{ marginBottom: "20px" }} key={u.id}>
        {u.title}
      </div>
    );
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {friends}
      {/*<UsersCopy />*/}
      {/*
        <Preloader isFetching={this.props.isFetching}/> 
        <Users
          setFollow={this.props.setFollow}
          followingInProgress={this.props.followingInProgress}
        />*/}
    </div>
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
