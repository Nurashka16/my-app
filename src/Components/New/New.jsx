import React from 'react';
import { useParams } from 'react-router-dom';

const New = () => {
   const {id} = useParams();
   console.log(id);
  return (
    <div>{id}</div>
  )
}

export default New;