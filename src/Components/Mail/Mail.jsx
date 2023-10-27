import style from "./Mail.module.css";
import Avatar from "../Common/Avatar.jsx";
import { Link } from "react-router-dom";

const Mail = (props) => {
  const contacts = props.contacts.map((item) => (
    <Link
      to={"/dialogs/" + item.id}
      name={"Nura"}
      className={style.convo}
      id={item.id}
    >
      <div className={style.convo__body}>
        <div className={style.convo__img}>
          <Avatar height='48px' width="48px" url={item.avatar}/>
        </div>
        <div className={style.convo__info}>
          <div className={style.convo__title}>{item.fullName}</div>
          <div className={style.convo__lastMess}>{item.lastMess}</div>
        </div>
      </div>
      <div className={style.convo__time}>{item.time}</div>
    </Link>
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.search}>Search</div>
      <div className={style.recommendationContact}>RecommendationContact</div>
      <div className={style.mail}>{contacts}</div>
    </div>
  );
};
export default Mail;
