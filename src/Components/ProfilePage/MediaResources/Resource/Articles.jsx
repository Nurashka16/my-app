import React from 'react';
import Button from "../../../Common/Button";
import style from './MediaResource.module.css'


const Articles = () => {
  return (
   <div className={style.container}>
     <div className={style.text}>Вы ещё не добавили статью</div>
   </div>
 );
}

export default Articles