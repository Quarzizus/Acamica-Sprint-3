import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { ContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
