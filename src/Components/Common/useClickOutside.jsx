import React, { useEffect, useState, useRef } from "react";

function useClickOutside(ref, callback) {
  /*const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef(null);*/
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
};

export default useClickOutside;
