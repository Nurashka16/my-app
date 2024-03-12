import React from 'react';
import Button from "../../../Common/Button";
import style from './MediaResource.module.css'

const Videos = () => {
  return (
   <div className={style.container}>
     <div className={style.text}>Вы ещё не добавили видео</div>
     <div className={style.btn}>
       <Button
         color="#2688eb"
         background="rgba(34, 60, 80, 0.05) "
         padding="0 16px"
         height="28px"
         width="153px"
         fontsize="13px"
       >
         Загрузить видео
       </Button>
     </div>
   </div>
 );
}

export default Videos