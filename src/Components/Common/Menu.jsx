import React from "react";
import {
  Icon28NewsfeedOutline,
  Icon16Dropdown,
  Icon28ServicesOutline,
  Icon28MoreHorizontal,
  Icon28SafariOutline,
  Icon28Notifications,
  Icon28MessageOutline,
  Icon28UserOutline,
  Icon28UsersOutline,
  Icon24Add,
  Icon28CameraOutline,
  Icon28ArrowLeftOutline,
  Icon28LogoVkVideoOutline,
  Icon28AddOutline,
  Icon24LogoVkMusicOutline,
  Icon28GameOutline,
  Icon28BookmarkOutline,
  Icon28TagOutline,
  Icon28DocumentOutline,
  Icon28AdvertisingOutline,
  Icon28LikeOutline,
  Icon28SearchOutline,
  Icon28LogoClipsOutline,
  Icon28WriteSquareOutline,
  Icon28PhoneOutline,
  Icon24Filter,
} from "@vkontakte/icons";

const List = [
  {
    id: 0,
    path: "profile",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Мой Профиль",
      icon: "",
    },
    title: {
      name: "@idonia",
      left: "",
      near: "",
      right: [<Icon28ServicesOutline />, <Icon28MoreHorizontal />],
      paddingForTop: "16.5px",
      paddingForLeft: "5px",
      paddingForRight: "12px",
      paddingForNear: "",
      fontsize: "19px",
      iconColor: "black",
      fontWeight: 500,
    },
  },
  {
    id: 1,
    path: "",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Новости",
      icon: <Icon28NewsfeedOutline />,
    },
    title: {
      name: "",
      left: "",
      near: <Icon16Dropdown />,
      right: "",
      paddingForLeft: "",
      paddingForRight: "8px",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 2,
    path: "friends",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Рекомендации",
      icon: <Icon28SafariOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "10px",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 3,
    path: "notice",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Уведомления",
      icon: <Icon28Notifications />,
    },
    title: {
      name: "",
      left: "",
      near: <Icon16Dropdown />,
      right: (
        <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h28v28H0z"></path>
            <path
              d="M18.5 15a3.5 3.5 0 0 1 3.35 2.5H24a1 1 0 0 1 0 2h-2.15a3.5 3.5 0 0 1-6.7 0H4a1 1 0 0 1 0-2h11.14A3.5 3.5 0 0 1 18.5 15zm0 1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM10.5 6a3.5 3.5 0 0 1 3.35 2.5H24a1 1 0 0 1 0 2H13.86a3.5 3.5 0 0 1-6.71 0H4a1 1 0 0 1 0-2h3.15A3.5 3.5 0 0 1 10.5 6zm0 1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      ),
      paddingForLeft: "10px",
      paddingForRight: "16px",
      paddingForNear: "2px",
      fontsize: "",
    },
  },
  {
    id: 4,
    path: "mail",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Мессенджер",
      icon: <Icon28MessageOutline />,
    },
    title: {
      name: "Чаты",
      left: "",
      near: <Icon16Dropdown />,
      right: <Icon28WriteSquareOutline />,
      paddingForLeft: "",
      paddingForRight: "16px",
      paddingForNear: "2px",
      fontsize: "",
    },
  },
  {
    id: 5,
    path: "users",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Друзья",
      icon: <Icon28UserOutline />,
    },
    title: {
      name: "Все друзья",
      amount: "29",
      left: "",
      near: <Icon16Dropdown />,
      right: <Icon24Add />,
      paddingForLeft: "10px",
      paddingForRight: "21px",
      paddingForNear: "2px",
      fontsize: "",
    },
  },
  {
    id: 6,
    path: "communities",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Сообщества",
      icon: <Icon28UsersOutline />,
    },
    title: {
      name: "",
      amount: "0",
      left: "",
      near: <Icon16Dropdown />,
      right: <Icon24Add />,
      paddingForLeft: "12px",
      paddingForRight: "20px",
      paddingForNear: "2px",
      fontsize: "",
    },
  },
  {
    id: 7,
    path: "photos",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Фотографии",
      icon: <Icon28CameraOutline />,
    },
    title: {
      name: "Мои фотографии",
      left: <Icon28ArrowLeftOutline />,
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 8,
    path: "video",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Видео",
      icon: <Icon28LogoVkVideoOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: <Icon28AddOutline />,
      paddingForLeft: "",
      paddingForRight: "14px",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 9,
    path: "clips",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Клипы",
      icon: <Icon28LogoClipsOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 10,
    path: "musics",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Музыка",
      icon: <Icon24LogoVkMusicOutline width={28} height={28} />,
    },
    title: {
      name: "Главная",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "18px",
    },
  },
  {
    id: 11,
    path: "services",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Сервисы",
      icon: <Icon28ServicesOutline />,
    },
    title: {
      name: "Каталог сервисов",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "10px",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 12,
    path: "plays",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Игры",
      icon: <Icon28GameOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 13,
    path: "bookmarks",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Закладки",
      icon: <Icon28BookmarkOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: <Icon28TagOutline />,
      paddingForLeft: "12px",
      paddingForRight: "16px",
      paddingForNear: "",
      fontsize: "18px",
    },
  },
  {
    id: 14,
    path: "files",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Файлы",
      icon: <Icon28DocumentOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 15,
    path: "advertisement",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Реклама",
      icon: <Icon28AdvertisingOutline />,
    },

    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 16,
    path: "reaction",
    pathMatcher(url) {
      return url === this.path;
    },
    navbar: {
      name: "Реакции",
      icon: <Icon28LikeOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
  {
    id: 17,
    path: "search",
    pathMatcher(url) {
      return url === this.path;
    },

    navbar: {
      name: "Поиск",
      icon: <Icon28SearchOutline />,
    },
    title: {
      name: "",
      left: "",
      near: "",
      right: "",
      paddingForLeft: "",
      paddingForRight: "",
      paddingForNear: "",
      fontsize: "",
    },
  },
];
const getDialog = (userName) => ({
  id: 18,
  path: "dialog",
  pathMatcher(url) {
    return url === this.path;
  },
  navbar: {
    name: "",
    icon: "",
  },
  title: {
    name: ["был в сети",userName],
    left: <Icon28ArrowLeftOutline />,
    near: (
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
        <path
          d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0h3.98zm0 3H2a.5.5 0 0 0-.5.5v5c0 .28.23.5.5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 3z"
          fill="#C4C8CC"
        ></path>
      </svg>
    ),
    right: [<Icon28PhoneOutline />, <Icon28MoreHorizontal />],
    paddingForLeft: "",
    paddingForRight: "14px",
    paddingForNear: "",
    fontsize: "",
  },
});

const getPost = (ownerFullName) => ({
  id: 19,
  path: "createPost",
  pathMatcher(url) {
    return url === this.path;
  },
  navbar: {
    name: "",
    icon: "",
  },

  title: {
    name: ["Новая запись", ownerFullName],
    left: <Icon28ArrowLeftOutline />,
    near: "",
    right: "",
    paddingForLeft: "",
    paddingForRight: "14px",
    paddingForNear: "",
    fontsize: "",
  },
});

export function arrSelection(name, userName, ownerFullName) {
  const arr =
    name == "navbar"
      ? List
      : [...List, getDialog(userName), getPost(ownerFullName)];

  return arr;
}
