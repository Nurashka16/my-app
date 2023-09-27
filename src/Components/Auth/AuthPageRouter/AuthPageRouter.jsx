import React from 'react';
import Promo from './Promo/Promo';
import Content from './Content/Content';
import style from "./AuthPageRouter.module.css";

const AuthPageRouter = (props) => {
  return (
   <div className={style.body}>
      <div className={style.container}>
         <Promo/> 
         <Content/>
      </div>
   </div>
  )
}

export default AuthPageRouter;