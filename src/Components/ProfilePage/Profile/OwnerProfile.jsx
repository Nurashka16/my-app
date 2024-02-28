import React from "react";
import Profile from "./Profile";
import WrapWithButton from "../../Common/WrapWithButton/WrapWithButton";
import CreatePostActions from "../../ProfilePage/Interaction/CreatePostActions";
import { useState } from "react";
import style from "./Profile.module.css";
import { Icon24AddCircleOutline } from "@vkontakte/icons";
import Button from "../../Common/Button";

const OwnerProfile = ({ name, id, avatar }) => {
  const [isShowPublication, setShowPublication] = useState(false);
  return (
    <>
      <Profile
        avatar={avatar}
        name={name}
        id={id}
        children={
          <>
            {isShowPublication && (
              <WrapWithButton
                padding="0"
                setShow={setShowPublication}
                isShow={isShowPublication}
              >
                <CreatePostActions width="430px" height="201px" radius="12px" />
              </WrapWithButton>
            )}
            <Button width="570px" fontsize="14px" 
              height="32px"
              background="#f5f5f5"
              radius="7px"
              color="#2688eb" isShow={isShowPublication} setShow={setShowPublication}
            >
              <Icon24AddCircleOutline style={{margin:"0 5px 0 0"}} />
              Опубликовать
            </Button>
            {/* <div
              className={style.info_btn}
              onClick={() => setShowPublication(!isShowPublication)}
            >
              
              Опубликовать
            </div> */}
          </>
        }
      />
    </>
  );
};

export default OwnerProfile;
