import { useEffect, useRef, useState } from "react";

export const useClickOutside = () => {
  const ref = useRef<HTMLDivElement>();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (!isShow) {
      return;
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.addEventListener("scroll", handler);
    };
  }, [isShow])

  const handler = (e:any) => {
    if (!ref.current?.contains(e.target)) {
      setIsShow(false);
    }
  };
  const onShow = () => setIsShow((prev) => !prev);
  return { ref, isShow, onShow };
};
