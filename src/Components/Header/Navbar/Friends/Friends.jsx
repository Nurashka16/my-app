import Friend from "./friend/friend";
import style from "./friends.module.css";
let Friends = (props) => {
   return (
      <div className={style.container}>
         <div className={style.title} >All Friends:</div>
         < Friend />
      </div>
   )
}
export default Friends;