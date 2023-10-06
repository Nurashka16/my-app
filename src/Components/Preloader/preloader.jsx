import style from "./preloader.module.css";
import gif from "../../images/preloader.gif";
 
 const Preloader = (isFetching) => {
   return isFetching ? <img
   className={style.load}
   src={gif}
 /> : null
 }

export default Preloader;