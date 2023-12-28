import React, { useEffect, useState, useRef } from "react";

function useOutsideAlerted(initialIsVisible) {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      //console.log('ne burger');
      setIsShow(false);
    }
  };
  //console.log(isShow);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return {ref, isShow, setIsShow};
};

export default useOutsideAlerted;
