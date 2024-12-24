import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootE1 = document.querySelector("#root");
const root = createRoot(rootE1);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
