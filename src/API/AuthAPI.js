import React from 'react';
import axios from "axios";

const instance = axios.create ({
   baseURL: "http://127.0.0.1:5298/auth",
})

const AuthAPI = {
   signIn(email, password) {
      return instance.post('/login', {email, password})
   .then((response) => {
      return response.data;
    });
   },
   signUp(request) {
      return instance.post('/register', request)
      .then((response) => {
         return response.data;
       });
   }
}
export default AuthAPI;