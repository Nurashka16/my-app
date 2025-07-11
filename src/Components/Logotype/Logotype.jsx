import React from "react";
import style from "./Logotype.module.css";
import { NavLink } from "react-router-dom";

const Logotype = () => {
  return (
    <div className={style.logo}>
      <div className={style.logo_content}>
        <div className={style.logo_img}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="5.76" fill="#07F"></rect>
            <path
              d="M12.82 17.5c-5.42 0-8.7-3.76-8.83-10h2.74c.09 4.59 2.17 6.53 3.77 6.93V7.5h2.63v3.96c1.54-.17 3.16-1.97 3.7-3.96h2.59A7.62 7.62 0 0 1 16 12.49a7.9 7.9 0 0 1 4.01 5.01h-2.84c-.6-1.9-2.07-3.37-4.05-3.57v3.57h-.31Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className={style.logo_text}>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 112 24"
            width="112"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="id-vk_logo_composite_text_24__a">
              <path d="M0 0h112v24H0z"></path>
            </clipPath>
            <g clip-path="url(#id-vk_logo_composite_text_24__a)">
              <path
                clip-rule="evenodd"
                d="M43 12.5c0 3.34-2.43 5.5-5.88 5.5-3.45 0-5.88-2.16-5.88-5.5S33.67 7 37.12 7C40.57 7 43 9.16 43 12.5zm-9.22 0c0 2.07 1.35 3.5 3.34 3.5s3.34-1.43 3.34-3.5-1.35-3.45-3.34-3.45-3.34 1.38-3.34 3.45zm-17.03-.21c.95-.44 1.56-1.18 1.56-2.33 0-1.73-1.58-2.96-3.87-2.96H9.17v11h5.5c2.37 0 4.02-1.29 4.02-3.05 0-1.33-.87-2.32-1.94-2.66zM11.6 9.01h2.83c.85 0 1.44.5 1.44 1.2s-.6 1.2-1.44 1.2h-2.83zM14.67 16h-3.06V13.3h3.06c.96 0 1.59.55 1.59 1.36s-.63 1.33-1.59 1.33zM27.84 18h3.19l-5.06-5.71L30.61 7h-2.9l-3.68 4.27h-.6V7H21v11h2.44v-4.38h.59zM52.47 7v4.34h-4.93V7H45.1v11h2.43v-4.44h4.93V18h2.43V7zM62.9 18h-2.44V9.22h-3.8V7H66.7v2.22h-3.8zm9.7-11c-2.14 0-4.02.89-4.57 2.8l2.24.37a2.38 2.38 0 0 1 2.2-1.25c1.33 0 2.12.9 2.22 2.33h-2.37c-3.23 0-4.84 1.42-4.84 3.45 0 2.05 1.59 3.3 3.83 3.3 1.8 0 3-.82 3.53-1.73l.5 1.73h1.8v-6.18c0-3.19-1.73-4.82-4.54-4.82zm-.72 9.16c-1.18 0-1.95-.61-1.95-1.57 0-.84.62-1.43 2.48-1.43h2.3c0 1.8-1.14 3-2.83 3zM89.73 18h-3.2l-3.8-4.38h-.6V18H79.7V7h2.44v4.27h.59L86.4 7h2.9l-4.63 5.29zM94 18h2.44V9.22h3.8V7H90.2v2.22H94zm12.3-11c3.33 0 5.7 2.2 5.7 5.37 0 .3-.02.55-.04.79h-8.84c.23 1.69 1.46 2.83 3.32 2.83 1.29 0 2.3-.55 2.83-1.33l2.29.38c-.83 2.1-2.98 2.96-5.27 2.96-3.34 0-5.71-2.18-5.71-5.5s2.37-5.5 5.71-5.5zm3.06 4.25A3.06 3.06 0 0 0 106.29 9a3 3 0 0 0-3.02 2.25z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Logotype;
