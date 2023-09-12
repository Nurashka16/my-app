import axios from "axios";

const instance = axios.create ({
   baseURL: "http://127.0.0.1:5298/Users/",
})

const UsersAPI = {
  getUsers(currentPage = 2, pageSize = 3) {
    return instance
      .get(`Get?page=
        ${currentPage}
        &pageSize=${pageSize}`
      )
      .then((response) => {
        return response.data;
      });
  },
  isFollowed(value, boolean) {
    return instance.get(
      `${value}/Followed?follow=${boolean}`
    )
  },
};

export default UsersAPI;
