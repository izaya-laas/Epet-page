import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MobileProvider } from "./context/mobileContext";
import { DarkProvider } from "./context/darkContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MobileProvider>
          <DarkProvider>
            <div className="min-h-screen">
              <App />
            </div>
          </DarkProvider>
        </MobileProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
