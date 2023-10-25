import React from "react";

const Dialog = (props) => {
  console.log(props.name);
  return (
    <div>
      {props.name}
    </div>
  );
};

export default Dialog;
