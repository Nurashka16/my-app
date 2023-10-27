import React from "react";
import Message from "../Message/Message";
import style from "./Dialog.module.css";

const Dialog = (props) => {
  const dialog = props.lastDialog.map((item) => {
    return (
      <Message
        id={item.id}
        name={item.user}
        mess={item.mess}
        time={item.time}
      />
    );
  });
  return (
    <div className={style.dialog}>
      <div className={style.container}>
        <div className={style.main}>{dialog}</div>
        <div className={style.footer}>
          <div className={style.icon}>
            <svg
              fill="none"
              height="28"
              viewBox="0 0 28 28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H9a1 1 0 1 1 0-2h4V9a1 1 0 0 1 1-1z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className={style.textForm}>
            <input
              className={style.search}
              placeholder="Введите сообщение"
              type="text"
              maxlength="100"
            />
          </div>
          <div className={style.icon}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="smile_outline_28__Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="smile_outline_28__smile_outline_28">
                  <path d="M0 0h28v28H0z"></path>
                  <path
                    d="M14 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-4.39-5.9a1 1 0 1 1 1.46-1.37 4 4 0 0 0 5.85 0 1 1 0 1 1 1.47 1.36l-.3.3a6 6 0 0 1-8.48-.3Zm7.77-4.85a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Zm-6.75 0a1.63 1.63 0 1 1 0-3.25 1.63 1.63 0 0 1 0 3.25Z"
                    id="smile_outline_28__Icon-Color"
                    fill="currentColor"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className={style.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
