import React from "react";
import ProfileInfo from "./ProfileInfo";
import WrapWithButton from "../../Common/WrapWithButton/WrapWithButton";
import CreatePostActions from "../Interaction/CreatePostActions";
import { useState } from "react";
import style from "./Profile.module.css";
import { Icon24AddCircleOutline } from "@vkontakte/icons";

const OwnerProfile = ({ name, id, avatar }) => {
  const [isShowPublication, setShowPublication] = useState(false);
  return (
    <>
      <ProfileInfo
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
            <div
              className={style.info_btn}
              onClick={() => setShowPublication(!isShowPublication)}
            >
              <Icon24AddCircleOutline />
              Опубликовать
            </div>
          </>
        }
      />
    </>
  );
};

export default OwnerProfile;
