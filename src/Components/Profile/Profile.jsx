import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";
import { Icon24MoreHorizontal, Icon24UserAddedOutline } from "@vkontakte/icons";
import {
  Icon24MessageOutline,
  Icon24PhoneOutline,
  Icon24AddCircleOutline,
} from "@vkontakte/icons";
import { useState, useMemo } from "react";
import BurgerPost from "../BurgerPost/BurgerPost";
import WrapWithButton from "../Common/WrapWithButton/WrapWithButton";
import CreatePostTab from "../Tables/CreatePostTab";

const Profile = (props) => {
  let messagesItems = props.posts.map((m) => (
    <Post key={m.id} id={m.id} message={m.message} number={m.number} />
  ));
  const [show, onShow] = useState(false);
  return (
    <div className={style.container}>
      {props.ownerId == props.userInfo.id ? (
        <ProfileInfo
          avatar={props.ownerAvatar}
          name={props.ownerFullName}
          id={props.ownerId}
          children={
            <>
              {show && (
                <WrapWithButton height="100%" width="550px" padding="0">
                  <CreatePostTab
                    width="430px"
                    height="201px"
                    radius="12px"
                    onShow={onShow}
                    show={show}
                  />
                </WrapWithButton>
              )}
              <div className={style.info_btn} onClick={() => onShow(!show)}>
                <Icon24AddCircleOutline />
                Опубликовать
              </div>
            </>
          }
        />
      ) : (
        <ProfileInfo
          avatar={props.userInfo.avatar}
          name={props.userInfo.firstName + " " + props.userInfo.lastName}
          id={props.userInfo.id}
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
