import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { PortraitGuard } from "./components/PortraitGuard";
import "./index.css";

import { ThemeProvider } from "./theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PortraitGuard />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);