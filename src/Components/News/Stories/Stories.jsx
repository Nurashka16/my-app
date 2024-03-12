import React from "react";
import Story from "./Story";
import style from "./Stories.module.css";
import DraggingScroll from "../../Common/DraggingScroll";

const Stories = ({ children }) => {
  const stories = children.map((story) => (
    <Story id={story.id} img={story.img} name={story.name} />
  ));
  return <DraggingScroll>{stories}</DraggingScroll>;
};

export default Stories;
