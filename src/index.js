import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// App
import App from "./App";
// Store
import { store } from "./store/index";
// Css
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
