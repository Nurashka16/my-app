import React from "react";
import style from "./Title.module.css";
import Burger from "../../menuBurger/Burger";

const Title = (props) => {
  const elems = props.elemsBurger;
  const block = props.block;
  return (
    <>
      {block ? (
        <Burger elems={elems} closeBlock={props.closeBlock} />
      ) : (
        <div className={style.title} onClick={(e) => props.openBlock()}>
          <div className={style.title_content}>
            <span className={style.title_text}>новости</span>
            <div className={style.title_icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21"
                width="28"
                fontWeight="bold"
                viewBox="-4 -4 24 20"
                id="dropdown_outline_16"
                x="140"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h16v12H0z" />
                  <path
                    d="M8 6.778l3.773-3.107a.75.75 0 11.954 1.158l-4.25 3.5a.75.75 0 01-.954 0l-4.25-3.5a.75.75 0 01.954-1.158z"
                    fill="#2e8dec"
                    fillRule="nonzero"
                    strokeWidth="6"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Title;
/*
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="24" viewBox="-4 -4 24 20" id="dropdown_outline_16" x="140"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v12H0z"/><path d="M8 6.778l3.773-3.107a.75.75 0 11.954 1.158l-4.25 3.5a.75.75 0 01-.954 0l-4.25-3.5a.75.75 0 01.954-1.158z" fill="#397ecc" fill-rule="nonzero"/></g></svg>
*/
