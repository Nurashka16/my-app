import React from "react";
import style from "./News.module.css";
import Avatar from "../Common/Avatar";
import Wall from "./Wall/Wall";

const News = (props) => {
  return (
    <div className={style.container}>
      <div className={style.status}>
        <div className={style.status_content}>
          <img
            className={style.status_img}
            src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
            alt=""
          />
          <div className={style.status_name}>кись-кись</div>
        </div>
        <div className={style.status_content}>
          <img
            className={style.status_img}
            src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
            alt=""
          />
          <div className={style.status_name}>кись-кись</div>
        </div>
        <div className={style.status_content}>
          <img
            className={style.status_img}
            src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
            alt=""
          />
          <div className={style.status_name}>кись-кись</div>
        </div>
        <div className={style.status_content}>
          <img
            className={style.status_img}
            src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
            alt=""
          />
          <div className={style.status_name}>кись-кись</div>
        </div>
      </div>
      <div className={style.record}>
        <div className={style.record_content}>
        <Avatar url={props.userAvatar} width="36px" height="36px" />
          <form>
            <input
              className={style.record_input}
              type="text"
              placeholder="Напишите что-нибудь..."
            />
          </form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#2688EB"
            class="bi bi-collection-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#2688EB"
            class="bi bi-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
        </div>
      </div>
      <Wall/>
    </div>
  );
};

export default News;
