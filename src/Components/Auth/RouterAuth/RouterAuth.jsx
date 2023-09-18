import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAuth from "../HomeAuth/HomeAuth";
import SignUpContainer from "../SignUp/SignUpContainer";
import SignInContainer from "../SignIn/SignInContainer";

const RouterAuth = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAuth />} />
        <Route path="/signUp" element={<SignUpContainer />} />
        <Route path="/signIn" element={<SignInContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterAuth;
