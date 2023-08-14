import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Record from "../Record/Record";
import RecordContainer from "../Record/RecordContainer";


//настроить header чтобы он мог работать без других комп

const Entrance = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/record" element={<RecordContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Entrance;
