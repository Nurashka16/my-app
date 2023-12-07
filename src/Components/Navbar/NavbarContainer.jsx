import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { clearData } from "../../redux/auth-reducer";
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28SafariOutline,
  Icon28Notifications,
  Icon28MessageOutline,
  Icon28UserOutline,
  Icon28UsersOutline,
  Icon28CameraOutline,
  Icon28LogoVkVideoOutline,
  Icon24LogoVkMusicOutline,
  Icon28GameOutline,
  Icon28BookmarkOutline,
  Icon28DocumentOutline,
  Icon28AdvertisingOutline,
  Icon28LikeOutline,
  Icon28SearchOutline,
  Icon28LogoClipsOutline,
  Icon28MarketOutline,
  Icon24NewsfeedOutline
} from "@vkontakte/icons";

const List = [
  {
    id: 0,
    path: "profile",
    name:  "",
    icon: "",
  },
  {
    id: 1,
    path: "",
    name: "Новости",
    icon: <Icon24NewsfeedOutline width={28} height={28}/>,
  },
  {
    id: 2,
    path: "recommendation",
    name:  "Рекомендации",
    icon: <Icon28SafariOutline />,
  },
  {
    id: 3,
    path: "notice",
    name:  "Уведомления",
    icon: <Icon28Notifications />,
  },

  {
    id: 4,
    path: "mail",
    name: "Мессенджер",
    icon: <Icon28MessageOutline />,
  },
  {
    id: 5,
    path: "friends",
    name: "Друзья",
    icon: <Icon28UserOutline />,
  },
  {
    id: 6,
    path: "communities",
    name: "Сообщества",
    icon: <Icon28UsersOutline />,
  },
  {
    id: 7,
    path: "photos",
    name: "Фотографии",
    icon: <Icon28CameraOutline />,
  },
  {
    id: 8,
    path: "videos",
    name: "Видео",
    icon: <Icon28LogoVkVideoOutline />,
  },
  {
    id: 9,
    path: "clips",
    name: "Клипы",
    icon: <Icon28LogoClipsOutline />,
  },
  {
    id: 10,
    path: "musics",
    name: "Музыка",
    icon: <Icon24LogoVkMusicOutline width={28} height={28} />,
  },
  {
    id: 11,
    path: "services",
    name: "Сервисы",
    icon: <Icon28ServicesOutline />,
  },
  {
    id: 12,
    path: "games",
    name: "Игры",
    icon: <Icon28GameOutline />,
  },
  {
    id: 13,
    path: "market",
    name: "Маркет",
    icon: <Icon28MarketOutline />,
  },
  {
    id: 14,
    path: "bookmarks",
    name: "Закладки",
    icon: <Icon28BookmarkOutline />,
  },
  {
    id: 15,
    path: "files",
    name: "Файлы",
    icon: <Icon28DocumentOutline />,
  },
  {
    id: 16,
    path: "ad",
    name: "Реклама",
    icon: <Icon28AdvertisingOutline />,
  },
  {
    id: 17,
    path: "reaction",
    name: "Реакции",
    icon: <Icon28LikeOutline />,
  },
  {
    id: 18,
    path: "search",
    name: "Поиск",
    icon: <Icon28SearchOutline />,
  },
];

export const NavbarContainer = (props) => {
  return (
    <Navbar
      ownerId={props.ownerId}
      ownerFullName={props.ownerFullName}
      ownerAvatar={props.ownerAvatar}
      list={List}
      clearData={props.clearData}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    ownerId: state.authPage.id,
    ownerFullName: state.authPage.firstName + " " + state.authPage.lastName,
    ownerAvatar: state.authPage.avatar,
  };
};

export default connect(mapStateToProps, { clearData })(NavbarContainer);
