import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";
import { Icon24MoreHorizontal, Icon24UserAddedOutline } from "@vkontakte/icons";
import {
  Icon24MessageOutline,
  Icon24PhoneOutline,
  Icon24AddCircleOutline,
} from "@vkontakte/icons";
import { useState } from "react";
import BurgerPost from "../BurgerPost/BurgerPost";

const Profile = (props) => {
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} message={m.message} number={m.number} />
  ));
  const [post, setPost] = useState({
    isActive: false,
  });
  const toggleStatus = (value) => {
    setPost({ isActive: value });
  };
  return (
    <div className={style.container}>
      {props.ownerId == props.user.id ? (
        <ProfileInfo
          avatar={props.ownerAvatar}
          name={props.ownerFullName}
          id={props.ownerId}
          children={
            <>
              {post.isActive && <BurgerPost toggleStatus={toggleStatus} />}
              <div
                className={style.info_btn}
                onClick={() => toggleStatus(true)}
              >
                <div className={style.info_icon__add}>
                  <Icon24AddCircleOutline />
                </div>
                Опубликовать
              </div>
            </>
          }
        />
      ) : (
        <ProfileInfo
          avatar={props.user.avatar}
          name={props.user.firstName + " " + props.user.lastName}
          id={props.user.id}
          children={
            <div className={style.info_footer}>
              {/*переименовать переменные*/}
              <div
                className={style.info_btn_send}
                onClick={() => console.log(5)}
              >
                <div className={style.info_icon__send}>
                  <Icon24MessageOutline />
                </div>
                Сообщение
              </div>
              <div className={style.info_additional}>
                <div className={style.info_btnContainer}>
                  <div className={style.info_btn__icon}>
                    <Icon24PhoneOutline />
                  </div>
                </div>
                <div className={style.info_btnContainer}>
                  <div className={style.info_btn__icon}>
                    <Icon24UserAddedOutline />
                  </div>
                </div>
                <div className={style.info_btnContainer}>
                  <div className={style.info_btn__icon}>
                    <Icon24MoreHorizontal />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      )}
      <div className={style.content}>{messagesItems}</div>
    </div>
  );
};
export default Profile;
