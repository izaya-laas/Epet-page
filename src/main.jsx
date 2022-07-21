import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MobileProvider } from "./context/mobileContext";
import { DarkProvider } from "./context/darkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MobileProvider>
        <DarkProvider>
          <div className="min-h-screen">
            <App />
          </div>
        </DarkProvider>
      </MobileProvider>
    </BrowserRouter>
  </React.StrictMode>
);
