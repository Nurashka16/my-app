import React from 'react';
import ItemTabl from '../ItemTabl/ItemTabl';

//должен быть аксиос запрос на друзей и перебрать
const FriendsList = () => {
   const list = "";
   const buttonsList = list.map((el) => {
      return <ItemTabl text={el.text} iconLeft={el.icon} />;
    });
    return <div>{buttonsList}</div>;
}

export default FriendsList