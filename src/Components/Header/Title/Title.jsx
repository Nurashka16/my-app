import React from "react";
import style from "./Title.module.css";
import { useLocation } from "react-router-dom";
import MessagesTitle from "./MessagesTitle";
import NewsTitle from "./NewsTitle";
import ProfileTitle from "./ProfileTitle";
import RecommendationTitle from "./RecommendationTitle";
import NoticeTitle from "./NoticeTitle";
import FriendsTitle from "./FriendsTitle";
import CommunitiesTitle from "./CommunitiesTitle";
import PhotosTitle from "./PhotosTitle";
import ClipsTitle from "./ClipsTitle";
import MusicsTitle from "./MusicsTitle";
import ServicesTitle from "./ServicesTitle";
import GamesTitle from "./GamesTitle";
import MarketTitle from "./MarketTitle";
import BookmarksTitle from "./BookmarksTitle";
import FilesTitle from "./FilesTitle";
import AdvertisingTitle from "./AdvertisingTitle";
import ReactionTitle from "./ReactionTitle";
import SearchTitle from "./SearchTitle";
import DialogTitle from "./DialogTitle";
import CreatePostTitle from "./CreatePostTitle";
import VideosTitle from "./VideosTitle";

const titleFactory = [
  { match: (url) => url === "profile", component: <ProfileTitle /> },
  { match: (url) => url === "", component: <NewsTitle /> },
  {
    match: (url) => url === "recommendation",
    component: <RecommendationTitle />,
  },
  { match: (url) => url === "notice", component: <NoticeTitle /> },
  { match: (url) => url === "mail", component: <MessagesTitle /> },
  { match: (url) => url === "friends", component: <FriendsTitle /> },
  { match: (url) => url === "communities", component: <CommunitiesTitle /> },
  { match: (url) => url === "photos", component: <PhotosTitle /> },
  { match: (url) => url === "videos", component: <VideosTitle /> },
  { match: (url) => url === "clips", component: <ClipsTitle /> },
  { match: (url) => url === "musics", component: <MusicsTitle /> },
  { match: (url) => url === "services", component: <ServicesTitle /> },
  { match: (url) => url === "games", component: <GamesTitle /> },
  { match: (url) => url === "market", component: <MarketTitle /> },
  { match: (url) => url === "bookmarks", component: <BookmarksTitle /> },
  { match: (url) => url === "files", component: <FilesTitle /> },
  { match: (url) => url === "ad", component: <AdvertisingTitle /> },
  { match: (url) => url === "reaction", component: <ReactionTitle /> },
  { match: (url) => url === "search", component: <SearchTitle /> },
  { match: (url) => url === "dialog", component: <DialogTitle /> },
  { match: (url) => url === "createPost", component: <CreatePostTitle /> },
];

const Title = (props) => {
  const dataUrl = useLocation();
  const [_, url, param] = dataUrl.pathname.split("/");

  const component = titleFactory.find((title) => title.match(url))?.component;

  return <div>{component}</div>;
};

export default Title;
