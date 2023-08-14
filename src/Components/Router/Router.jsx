import React from 'react'
import Entrance from "../Entrance/Entrance";
import App from "../../App";
import { useSelector } from "react-redux";

const Router = () => {

   const isAuth = useSelector(state => state.authPage.isAuth)

  return <>
   {!isAuth ? <Entrance /> : <App />}
  </>
    
  
}

export default Router