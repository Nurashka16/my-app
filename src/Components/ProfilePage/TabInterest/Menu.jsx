import React from "react";
import {
  Icon20MusicOutline,
  Icon20PictureOutline,
  Icon20VideoCircleOutline,
  Icon20PictureStackOutline,
  Icon20LogoClipsOutline,
  Icon20NarrativeOutline,
  Icon20ArticlesOutline,
  Icon20NftHeptagonOutline,
  Icon20GearOutline,
} from "@vkontakte/icons";
import style from "./Content/Content.module.css";
import Content from "./Content/Content";
import Tabs from "../../Common/Tabs/Tabs";
import Button from "../../Common/Button";

const Menu = () => {
  const buttons = [
    {
      id: 1,
      name: "Музыка",
      iconLeft: <Icon20MusicOutline />,
    },
    {
      id: 2,
      name: "Фото",
      iconLeft: <Icon20PictureOutline />,
    },
    {
      id: 3,
      name: "Видео",
      iconLeft: <Icon20VideoCircleOutline />,
    },
    {
      id: 4,
      name: "Альбомы",
      iconLeft: <Icon20PictureStackOutline />,
    },
    {
      id: 5,
      name: "Клипы",
      iconLeft: <Icon20LogoClipsOutline />,
    },
    {
      id: 6,
      name: "Сюжеты",
      iconLeft: <Icon20NarrativeOutline />,
    },
    {
      id: 7,
      name: "Статьи",
      iconLeft: <Icon20ArticlesOutline />,
    },
    {
      id: 8,
      name: "NFT",
      iconLeft: <Icon20NftHeptagonOutline />,
    },
  ];
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
  return (
    <div className={style.menu}>
      <div className={style.menu_container}>
        <Tabs list={buttons} />
      </div>

      <Content>
        <Example />
      </Content>
    </div>
  );
};

export default Menu;
