import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../my-app/src/App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntreeTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
};
renderEntreeTree(store.getState());
store.subscribe(renderEntreeTree);
