import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
//прорисовка id из url
const New = () => {
   const {id} = useParams();
   console.log(id);
  return (
    <div>{id}
    </div>

  )
}
//прорисовка id по запросу
const New2 = () => {

}

export default New;