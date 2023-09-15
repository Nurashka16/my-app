import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import RecordContainer from "../Record/RecordContainer";
import LoginContainer from "../Login/LoginContainer";


//настроить header чтобы он мог работать без других комп

const Entrance = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/record" element={<RecordContainer/>}/>
        <Route path="/login" element={<LoginContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Entrance;
