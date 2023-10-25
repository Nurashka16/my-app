import React from 'react';
import style from "./EmptyPage.module.css";

const EmptyPage = (props) => {
  return (
    <div className={style.text}> Ведутся работы
      <div className={style.img} >
         <img height="200px" width="200px" src="https://intermars76.ru/getfile.php?id_file=130520&id_reseller=97976" alt="" />
      </div>
    </div>
  )
}

export default EmptyPage;