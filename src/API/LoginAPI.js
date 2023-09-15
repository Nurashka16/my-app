import React from 'react';
import axios from "axios";

const instance = axios.create ({
   baseURL: "http://127.0.0.1:5298/auth",
})

const LoginAPI = {
   signIn(email, password) {
      return instance.post('/login', {email, password})//
   .then((response) => {
      return response.data;
    });
   }
}
export default LoginAPI;