import React from "react";
import style from "./ClipAction.module.css";
import Button from "../Common/Button";

const ClipAction = () => {
  return (
    <div className={style.clip}>
      <div className={style.title}>Загрузка клипа</div>
      <div className={style.text}>
        Выберите вертикальное видео длиной от 1 секунды<br/> до 3 минут. У роликов с
        разрешением 1080x1920 px<br/> больше шансов попасть в рекомендации.
      </div>
      <div className={style.link}>Другие советы для авторов</div>
      <Button height="36px">Выбрать файл</Button>
    </div>
  );
};

export default ClipAction;
