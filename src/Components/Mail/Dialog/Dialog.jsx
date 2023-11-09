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
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="send_28__Page-2"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="send_28__send_28">
                  <path id="send_28__Rectangle-76" d="M0 0h28v28H0z"></path>
                  <path
                    d="M6.93 18.12a42.81 42.81 0 0 0-1.43 4.31c-.62 2.6-1.07 3.18 1.23 1.95 2.29-1.24 13.38-7.35 15.86-8.71 3.22-1.77 3.26-1.64-.18-3.52C19.8 10.72 8.83 4.76 6.73 3.6c-2.1-1.17-1.85-.65-1.23 1.95.2.84.68 2.29 1.46 4.35a4.4 4.4 0 0 0 3.28 2.77l6.44 1.23a.11.11 0 0 1 0 .22l-6.45 1.23a4.4 4.4 0 0 0-3.3 2.78Z"
                    id="send_28__Mask"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
