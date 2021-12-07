import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./reducer/reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
