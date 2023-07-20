import React, { useState } from 'react';
import style from "./Burger.module.css";

const Burger = (props) => {
  console.log(props);
  return (
    <div className={style.navbar} >
      <div className={style.content}>
        <div className={style.list}>
        <div className={style.navbar_link}>Новости</div>
        <div className={style.navbar_link}>Обновление</div>
        <div className={style.navbar_link}>Фотографии</div>
        <div className={style.navbar_link}>Подкасты</div>
        <div className={style.navbar_link}>Сначала интересные</div>
        <div className={style.navbar_link}>Настроить новости</div>
        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g id="newsfeed_outline_28__Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="newsfeed_outline_28__newsfeed_outline_28"><path d="M0 0h28v28H0z"></path><path d="M17.59 3c2.18 0 3.23.2 4.32.79a5.54 5.54 0 0 1 2.3 2.3c.59 1.09.79 2.14.79 4.32v7.18c0 2.18-.2 3.23-.79 4.32a5.54 5.54 0 0 1-2.3 2.3c-1.09.59-2.14.79-4.32.79h-7.18c-2.18 0-3.23-.2-4.32-.79a5.54 5.54 0 0 1-2.3-2.3C3.2 20.82 3 19.77 3 17.6v-7.18c0-2.18.2-3.23.79-4.32a5.54 5.54 0 0 1 2.3-2.3C7.18 3.2 8.23 3 10.4 3h7.18Zm-12.6 8L5 17.59c0 1.88.14 2.62.55 3.38.34.64.84 1.14 1.48 1.48.76.4 1.5.55 3.38.55h7.18c1.88 0 2.62-.14 3.38-.55a3.54 3.54 0 0 0 1.48-1.48c.4-.76.55-1.5.55-3.38V11H5Zm12.6-6h-7.18c-1.88 0-2.62.14-3.38.55-.64.34-1.14.84-1.48 1.48A4.5 4.5 0 0 0 5.05 9h17.9a4.5 4.5 0 0 0-.5-1.97 3.54 3.54 0 0 0-1.48-1.48c-.76-.4-1.5-.55-3.38-.55Z" id="newsfeed_outline_28__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></svg>
        </div>
        <button onClick={()=> props.closeBlock()} >x</button>
      </div>
    </div>
  )
}

export default Burger;