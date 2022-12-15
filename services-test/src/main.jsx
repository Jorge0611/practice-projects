import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "simpledotcss/simple.min.css";

// PAGES
import App from "./pages/Home";
import Description from "./pages/Description";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
