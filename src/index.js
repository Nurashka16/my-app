import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../my-app/src/App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntreeTree = (state) => {
  root.render(
    <Provider>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </Provider>
  );
};
renderEntreeTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntreeTree(state);
});
