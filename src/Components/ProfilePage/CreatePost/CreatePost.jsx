import React from "react";
import Button from "../../Common/Button";
import { Icon24WriteOutline } from "@vkontakte/icons";
import style from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <div className={style.createPost}>
      <Button
        background="rgba(34, 60, 80, 0.05)"
        height="32px"
        width="576px"
        color="#2688eb"
        fontsize="14px"
      //   margin="10px"
      >
        <Icon24WriteOutline style={{marginRight: "6px"}}/> Что у вас нового?
      </Button>
    </div>
  );
};

export default CreatePost;
