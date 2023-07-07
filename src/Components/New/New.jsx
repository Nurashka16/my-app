import React from 'react';
import style from "./New.module.css";

//прорисовка id из url
const New = () => {
  return (
    <div className={style.container}>
      <div className={style.status}>
          <img src="" alt="" />
      </div>
      <div className={style.record}>
        record
      </div>
      <div className={style.news}>
        news
      </div>
    </div>

  )
}

export default New;