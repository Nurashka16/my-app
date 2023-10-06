import React from 'react';
import Wall from '../News/Wall/Wall';
import style from "./Recommendation.module.css";

const Recommendation = (props) => {
  return (
    <div className={style.recommendation}>
      <Wall/>
      <Wall/>
      <Wall/>
    </div>
  )
}

export default Recommendation;