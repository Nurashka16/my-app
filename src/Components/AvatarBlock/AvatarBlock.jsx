import style from "../Profile/ProfileInfo/ProfileInfo.module.css";
import Avatar from "../Common/Avatar/Avatar";

import MiniTablWithoutFix from "../Common/MiniTablWithoutFix/MiniTablWithoutFix";
import { useClickOutside } from "../Common/clickOutside";
import { AvatarTab } from "../Tables/AvatarActions";
import { useState, useEffect } from "react";

//не хватает логики, что если нет фото, то количество
// кнопок меньше. А если это не мой профиль,то всего 1

const AvatarBlock = () => {
  /*const reverse = (maxHeight) => {
    if(maxHeight < maxHeight/2) {
        return right="-30%", top="-128%"
    }
    return right="-30%", top="104%"
  }*/
  /*const [isReverse, setIsReverse] = useState();*/
  /*const top = document.getElementsByClassName(".info_avatar")*/
  const { ref: menuRef, isShow, onShow } = useClickOutside();
  const top = (e) => {
    return console.log(e.target.offsetParent);
  };
  /*useEffect(() => {
    return console.log(top.getBoundingClientRest);
  });*/
  return (
    <div className={style.info_avatar} ref={menuRef} onClick={onShow}>
      <Avatar
        style={{ borderColor: "black" }}
        width="101px"
        height="99px"
        url="https://klike.net/uploads/posts/2022-08/1661856423_j-26.jpg"
      />
      <div>
        {isShow && (
          <MiniTablWithoutFix
            position="absolute"
            radius="8px"
            height="132px"
            width="174px"
            padding="0"
          >
            <AvatarTab />
          </MiniTablWithoutFix>
        )}
      </div>
    </div>
  );
};

export default AvatarBlock;
