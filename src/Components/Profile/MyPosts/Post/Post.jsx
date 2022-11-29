import style from "./Post.module.css";
const Post = (props) => {
   return (
      <div>
         <img className={style.img}  src="https://rus-pic.ru/wp-content/uploads/2021/12/foto-na-avu-smeshnye-35-foto-3afaecd.jpg" alt="" />
         <div className={style.description}> {props.message} </div>
         <div className={style.likes}> {props.likes} likes </div>
      </div>
   )
}
export default Post;