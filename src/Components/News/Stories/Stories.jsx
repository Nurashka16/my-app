import React from "react";
import Story from "./Story";
import style from "./Stories.module.css";
import { useRef, useState } from "react";

const Stories = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef();
  const stories = children.map((story) => (
    <Story id={story.id} img={story.img} name={story.name} />
  ));
  const func = (e) => {
    if (!isDragging) return;
    ref.current.scrollLeft -= e.movementX;
  };
  console.log(ref.current?.scrollLeft);
  return (
    <div
      ref={ref}
      className={style.stories}
      onMouseMove={(e) => func(e)}
      onMouseDown={(e) => setIsDragging(true)}
      onMouseUp={(e) => setIsDragging(false)}
    >
      {stories}
    </div>
  );
};

export default Stories;
