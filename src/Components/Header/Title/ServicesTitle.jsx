import React from 'react';
import style from "./Title.module.css";

const ServicesTitle = (props) => {
  return (
   <div className={style.title}>
   <div className={style.title_container}>
     <div className={style.title_content}>
       <div className={style.title_text}>Каталог сервисов</div>
     </div>
   </div>
 </div>
  )
}

export default ServicesTitle;