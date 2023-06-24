import style from "./preloader.module.css";
 
 const Preloader = (isFetching) => {
   return isFetching ? <img
   className={style.load}
   src="https://phonoteka.org/uploads/posts/2022-01/thumbs/1643171694_4-phonoteka-org-p-fon-zagruzki-5.jpg"
 /> : null
 }

export default Preloader;