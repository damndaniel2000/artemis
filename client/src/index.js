import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import networkService from "./network-service";

import allReducer from "./state/reducers/rootReducer";
import App from "./App";

const store = createStore(allReducer, compose(applyMiddleware(thunk)));

networkService.setupInterceptors(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
