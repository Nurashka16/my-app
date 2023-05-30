import React from "react";

export const Actual = (props) => {
  let actual = props.actual;
  return (
    <div>
      <div>
        <button>Play</button>
      </div>
      <div>
        <button>Left</button>
        <button>Right</button>
      </div>
      <div>
        <img/>
      </div>
      <div>
        <div>
          <div>
            <div>Name</div>
            <div>Autour</div>
          </div>
          <div>Length</div>
          Line
        </div>
      </div>
    </div>
  );
};
