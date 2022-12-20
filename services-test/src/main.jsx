import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "simpledotcss/simple.min.css";

// PAGES
import App from "./pages/Home";
import Description from "./pages/Description";

const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:id", element: <Description /> },
  { path: "*", element: <h1>404 Not Found</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
