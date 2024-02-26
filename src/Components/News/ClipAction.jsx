import React from "react";
import style from "./ClipAction.module.css";

const ClipAction = () => {
  return (
    <div className={style.clip}>
      <div className={style.title}>Загрузка клипа</div>
      <div className={style.text}>
        Выберите вертикальное видео длиной от 1 секунды до 3 минут. У роликов с
        разрешением 1080x1920 px больше шансов попасть в рекомендации.
      </div>
      <div className={style.link}>Другие советы для авторов</div>
      <div className={style.btn}>Выбрать файл</div>
    </div>
  );
};

export default ClipAction;
