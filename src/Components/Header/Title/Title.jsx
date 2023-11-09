import React from "react";
import style from "./Title.module.css";
import Avatar from "../../Common/Avatar";
import ButtonBack from "../../Common/ButtonBack";

export const Title = (props) => {
  const user = (name, img, date, login) => {
    return (
      <div className={style.user}>
        <div className={style.user__img}>
          <Avatar url={img} width="36px" height="36px" />
        </div>
        <div className={style.user__data}>
          <div className={style.user__name}>{name}</div>
          <div className={style.user__lastVisited}>
            <div className={style.user__date}>был в сети {date}</div>
            {login == "phone" ? (
              <div className={style.user__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
                  <path
                    d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98zm0 3H2a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 3z"
                    fill="#C4C8CC"
                  ></path>
                </svg>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };
  const isUrl = (list, url) => {
    return list.map((el) => {
      if (el?.pathMatcher(url)) {
        return (
          <div key={el.id} className={style.title}>
            <div
              className={style.title_container}
              style={{
                paddingLeft: el.title.paddingForLeft
                  ? el.title.paddingForLeft
                  : "9px",
              }}
            >
              <div className={style.title_content}>
                {el.title.left ? (
                  <div className={style.title_icon_left}>
                    <ButtonBack width="44px" color="#2688eb" height="44px">
                      {el.title.left}
                    </ButtonBack>
                  </div>
                ) : (
                  ""
                )}
                {el.id == 18 ? (
                  user(
                    props.userDialog.fullName,
                    props.userDialog.avatar,
                    props.userDialog.time,
                    props.userDialog.login
                  )
                ) : (
                  <>
                    <span
                      className={style.title_text}
                      style={{ fontSize: el.title.fontsize }}
                    >
                      {el.title.name ? el.title.name : el.navbar.name}
                    </span>
                    {el.title.amount ? (
                      <span className={style.title_amount}>
                        {el.title.amount}
                      </span>
                    ) : (
                      ""
                    )}
                    {el.title.near ? (
                      <div
                        className={style.title_icon_near}
                        style={{ paddingTop: el.title.paddingForNear }}
                      >
                        {el.title.near}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
              {el.title.right ? (
                <div
                  className={style.title_icon_right}
                  style={{ paddingRight: el.title.paddingForRight }}
                >
                  {el.title.right}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      }
    });
  };
  return <>{isUrl(props.list, props.url)}</>;
};
/*
      {/*{block ? (
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
      )}*/
/*const hat = (title) => {
      return (
        <>
          <span
            className={style.title_text}
            style={{ fontSize: el.title.fontsize }}
          >
            {el.title.name ? el.title.name : el.navbar.name}
          </span>
          {el.title.amount ? (
            <span className={style.title_amount}>{el.title.amount}</span>
          ) : (
            ""
          )}
          {el.title.near ? (
            <div
              className={style.title_icon_near}
              style={{ paddingTop: el.title.paddingForNear }}
            >
              {el.title.near}
            </div>
          ) : (
            ""
          )}
        </>
      );
    };
  };*/
