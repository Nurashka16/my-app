import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAuth from "../HomeAuth/HomeAuth";
import AuthPageRouter from "../AuthPageRouter/AuthPageRouter";

const RouterAuth = (props) => {
  return (
      <Routes>
        <Route path="/" element={<HomeAuth />} />
        <Route path="/auth/:block" element={<AuthPageRouter />} />
      </Routes>
  );
};

export default RouterAuth;
