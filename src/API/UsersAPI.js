import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5298/Users/",
});
//http://127.0.0.1:5298/Users/Get?page=1&pageSize=20
const UsersAPI = {
  getUsers(page = 1, pageSize = 20) {
    //не работает по default
    return instance
      .get(`Get?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  isFollowed(value, boolean) {
    return instance.get(`${value}/Followed?follow=${boolean}`);
  },
};

export default UsersAPI;
