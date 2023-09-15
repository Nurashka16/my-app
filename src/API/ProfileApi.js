import React from 'react';
import axios from "axios";

const instance = axios.create ({
   baseURL: "http://127.0.0.1:5298/Users/Get",
})

const ProfileApi = {
   getProfile(id) {
      return instance.get(`${id}`)
   .then((response) => {
      return response.data;
    });
   }
}
export default ProfileApi;