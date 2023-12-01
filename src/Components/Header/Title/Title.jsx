/*import React from "react";
import style from "./Title.module.css";
import Avatar from "../../Common/Avatar";
import ButtonBack from "../../Common/ButtonBack";
import IsNotEmpty from "../../Common/IsNotEmpty";

export const Title = (props) => {
  const user = (name, img = "", date = "", login = "", text = "") => {
    return (
      <div className={style.user}>
        <div className={style.user__img}>
          <Avatar url={img} width="36px" height="36px" />
        </div>
        <div className={style.user__data}>
          <div className={style.user__name}>{name}</div>
          <div className={style.user__lastVisited}>
            <div className={style.user__date}>был в сети {date}</div>
            {login == "phone" && (
              <div className={style.user__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
                  <path
                    d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98zm0 3H2a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 3z"
                    fill="#C4C8CC"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  const isUrl = (list, url) => {
    return list.map((el) => {
      console.log(Array.isArray(el.title.name));
      if (el?.pathMatcher(url)) {
        return (
          <div key={el.id} className={style.title}>
            <div
              className={style.title_container}
              style={{
                paddingLeft: el.title.paddingForLeft
                  ? el.title.paddingForLeft
                  : "9px",
                paddingTop: el.title.paddingForTop && el.title.paddingForTop,
              }}
            >
              <div className={style.title_content}>
                <IsNotEmpty props={el.title.left}>
                  <div className={style.title_icon_left}>
                    <ButtonBack width="44px" color="#2688eb" height="44px">
                      {el.title.left}
                    </ButtonBack>
                  </div>
                </IsNotEmpty>
                {Array.isArray(el.title.name) ? (
                  user(
                    props.userDialog.fullName,
                    props.userDialog.avatar,
                    props.userDialog.time,
                    props.userDialog.login
                  )
                ) : (
                  <>
                    <IsNotEmpty props={el.title.name}>
                      <span
                        className={style.title_text}
                        style={{
                          fontSize: el.title.fontsize,
                          fontWeight: el.title.fontWeight,
                        }}
                      >
                        {el.navbar.name}
                      </span>
                    </IsNotEmpty>
                    <IsNotEmpty props={el.title.amount}>
                      <span className={style.title_amount}>
                        {el.title.amount}
                      </span>
                    </IsNotEmpty>
                    <IsNotEmpty props={el.title.near}>
                      <div
                        className={style.title_icon_near}
                        style={{ paddingTop: el.title.paddingForNear }}
                      >
                        {el.title.near}
                      </div>
                    </IsNotEmpty>
                  </>
                )}
              </div>
              <IsNotEmpty props={el.title.right}>
                <div
                  className={style.title_icon_right}
                  style={{
                    paddingRight: el.title.paddingForRight,
                    color: el.title.iconColor,
                  }}
                >
                  {el.title.right}
                </div>
              </IsNotEmpty>
            </div>
          </div>
        );
      }
    });
  };
  return <>{isUrl(props.list, props.url)}</>;
};
*/