import React from "react";
import Title from "./Title";
import { connect } from "react-redux";
import { closeBlock, openBlock } from "../../../redux/header-reducer";
import { useParams, useLocation } from "react-router-dom";

export const TitleContainer = (props) => {
  const url= useLocation();
  const newUrl = url.pathname.split("/")[1];
  console.log(newUrl);
  return <div>{newUrl}</div>;
};

let mapStateToProps = (state) => {
  return { 
    block: state.headerPage.block,
    elemsBurger: state.headerPage.elemsBurger,
  };
};
export default connect(mapStateToProps, {
  closeBlock,
  openBlock,
})(TitleContainer);
