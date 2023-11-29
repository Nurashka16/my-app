import style from "./preloader.module.css";
import gif from "../../images/preloader.gif";
 
 const Preloader = (props) => {
   return props.isFetching ? <img
   className={style.load}
   src={gif}
 />: null
 }

export default Preloader;
