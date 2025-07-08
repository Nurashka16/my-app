import React from "react";
import style from "./Content.module.css";
import Button from "../../../Common/Button";
import Musics from "../Resource/Musics";
import Typography from "../Resource/Typography";
import { useSelector } from "react-redux";

const Content = ({ children }) => {
  const targetMediaResource = useSelector(
    (state) => state.profilePage.mediaResource
  );
  const Example = () => {
    return (
      <div className={style.content_container}>
        <div className={style.content_text}>Вы ещё не добавили клипы</div>
        <div className={style.content_btn}>
          <Button
            color="#2688eb"
            background="rgba(34, 60, 80, 0.05) "
            padding="0 16px"
            height="28px"
            width="153px"
            fontsize="13px"
          >
            Опубликовать клип
          </Button>
        </div>
      </div>
    );
  };
  const resource = mediaResourcesData.map((mediaResource) => {
    if (mediaResource.name == targetMediaResource) return mediaResource.content;
  });
  return <div className={style.content}>{resource}</div>;
};

export default Content;
