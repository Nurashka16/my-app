import React from "react";
import { useRef, useState } from "react";
import style from './DraggingScroll.module.css'

const DraggingScroll = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef();
  const func = (e) => {
    // if (isDragging == false) return;
    // ref.current.scrollLeft -= e.movementX;
  };
  return (
    <div className={style.stories}
      ref={ref}
      onMouseMove={(e) => func(e)}
      onMouseDown={(e) => setIsDragging(true)}
      onMouseUp={(e) => setIsDragging(false)}
      onMouseLeave={(e) => setIsDragging(false)}
    >
      {children}
    </div>
  );
};

export default DraggingScroll;
