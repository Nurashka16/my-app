import React from 'react';
import style from "./Logo.module.css";

const Logo = () => {
  return (
   <div className={style.logo}>
   <img
     className={style.logo_img}
     src="https://img.freepik.com/premium-vector/modern-badge-vkontakte-icon_578229-170.jpg"
   />
   <div className={style.logo_text}>ВКОНТАКТЕ</div>
 </div>
  )
}

export default Logo;