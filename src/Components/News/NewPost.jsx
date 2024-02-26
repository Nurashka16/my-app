import React from "react";
import style from "./News.module.css";
import Avatar from "../Common/Avatar/Avatar";
import { Icon28LogoClipsOutline, Icon28PictureOutline } from "@vkontakte/icons";
import { Link } from "react-router-dom";
import WrapWithButton from "../Common/WrapWithButton/WrapWithButton";
import { useState } from "react";
import ClipAction from "./ClipAction";

const NewPost = ({ ownerImg }) => {
  const [isShow, onShow] = useState(false);
  return (
    <div className={style.newPost_container}>
      <Link className={style.newPost_link} to={"./createPost"}>
        <Avatar url={ownerImg} width="40px" height="40px" />
        <form>
          <input
            className={style.newPost_input}
            type="text"
            placeholder="Напишите что-нибудь..."
          />
        </form>
      </Link>
      {isShow && (
        <WrapWithButton width="440px" height="205px">
          <ClipAction />
        </WrapWithButton>
      )}
      <Icon28LogoClipsOutline
        color="#2688eb"
        onClick={(e) => onShow(!isShow)}
      />
      <Icon28PictureOutline color="#2688eb" />
    </div>
  );
};

export default NewPost;
