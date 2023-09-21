import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAuth from "../HomeAuth/HomeAuth";
import SignUpPageContainer from "../SignUpPage/SignUpPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";

const RouterAuth = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAuth />} />
        <Route path="/signUp" element={<SignUpPageContainer />} />
        <Route path="/signIn" element={<SignInPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterAuth;
