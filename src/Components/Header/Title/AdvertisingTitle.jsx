import React from 'react';
import style from "./Title.module.css";

const AdvertisingTitle = (props) => {
  return (
   <div className={style.title}>
   <div className={style.title_container}>
     <div className={style.title_content}>
       <div className={style.title_mini}>Ссылка на рекламу</div>
     </div>
   </div>
 </div>
  )
}

export default AdvertisingTitle;