// main.jsx
import React, { StrictMode } from "react"; // <-- Add 'React,' here
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./utils/apiInterceptor.js";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
