import React from "react";
import style from "./Title.module.css";

const Title = (props) => {
  console.log(props.block);
  return (
    <div className={style.title}>
      <div className={style.title_content}>
        <div className={style.title_text}>Новости</div>
        <div className={style.title_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="24"
            viewBox="-4 -4 24 20"
            id="dropdown_outline_16"
            x="140"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h16v12H0z" />
              <path
                d="M8 6.778l3.773-3.107a.75.75 0 11.954 1.158l-4.25 3.5a.75.75 0 01-.954 0l-4.25-3.5a.75.75 0 01.954-1.158z"
                fill="#2e8dec"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Title;
