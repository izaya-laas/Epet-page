import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="bg-[#1f232b] min-h-screen">
        <App />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
