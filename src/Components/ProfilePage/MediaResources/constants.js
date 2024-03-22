import {
   Icon20MusicOutline,
   Icon20PictureOutline,
   Icon20VideoCircleOutline,
   Icon20PictureStackOutline,
   Icon20LogoClipsOutline,
   Icon20NarrativeOutline,
   Icon20ArticlesOutline,
   Icon20NftHeptagonOutline,
 } from "@vkontakte/icons";
 import Albums from "./Resource/Albums";
 import Articles from "./Resource/Articles";
 import NFTS from "./Resource/NFTS";
 import Photos from "./Resource/Photos";
 import Musics from "./Resource/Musics";
 import ShortVideos from "./Resource/ShortVideos";
 import Typography from "./Resource/Typography";
 import Videos from "./Resource/Videos";

const mediaResourcesData = [
   {
     name: "Музыка",
     iconLeft: <Icon20MusicOutline />,
     content: <Musics />,
   },
   {
     name: "Фото",
     iconLeft: <Icon20PictureOutline />,
     content: <Photos />,
   },
   {
     name: "Видео",
     iconLeft: <Icon20VideoCircleOutline />,
     content: <Videos />,
   },
   {
     name: "Альбомы",
     iconLeft: <Icon20PictureStackOutline />,
     content: <Albums />,
   },
   {
     name: "Клипы",
     iconLeft: <Icon20LogoClipsOutline />,
     content: <ShortVideos />,
   },
   {
     name: "Сюжеты",
     iconLeft: <Icon20NarrativeOutline />,
     content: <Typography />,
   },
   {
     name: "Статьи",
     iconLeft: <Icon20ArticlesOutline />,
     content: <Articles />,
   },
   {
     name: "NFT",
     iconLeft: <Icon20NftHeptagonOutline />,
     content: <NFTS />,
   },
 ];

 export default mediaResourcesData;