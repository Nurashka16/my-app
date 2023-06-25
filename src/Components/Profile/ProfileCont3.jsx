import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import Preloader from "../Preloader/preloader";
import style from "./Profile.module.css";
//{Preloader(true)}


const ProfileCont3 = (props) => {
  console.log(props.setUser);
  return (
    <>
    123
    {props.profilePage.newPostText}
    </>
  )
}
export default ProfileCont3;
