import React from "react";
import { useState } from "react";
/*
import style from "./NoticePage.module.css";*/
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BurgerPost from "../BurgerPost/BurgerPost";
import { Icon16SearchOutline } from "@vkontakte/icons";
import style from "./NoticePage.module.css";

const NoticePage = (props) => {
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: "white",
        width: "566.55px",
        height: "36px",
        borderRadius: "8px",
      }}
    >
      <div className={style.icon}>
        <Icon16SearchOutline
          style={{ color: "#818c99", width: "16px", height: "16px" }}
        />
      </div>
      <input
        className={style.input}
        style={{ borderRadius: "8px", backgroundColor: "white" }}
        type="search"
        placeholder="Введите текст"
      />
      <div
        className={style.icon_outline}
        style={{
          backgroundColor: "blue",
          width: "50px",
          height: "36px",
          borderRadius: "0px 8px 8px 0px",
        }}
      >
        <Icon16SearchOutline
          style={{ color: "#818c99", width: "16px", height: "16px" }}
        />
      </div>
    </div>
  );
};

export default NoticePage;
