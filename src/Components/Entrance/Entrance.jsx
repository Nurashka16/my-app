import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Record from "../Record/Record";


//настроить header чтобы он мог работать без других комп

const Entrance = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/record" element={<Record/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Entrance;
