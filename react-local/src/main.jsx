import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "simpledotcss/simple.min.css";
import { Layout } from "./components/layout";
// PAGES
import { Home } from "./pages";
import { Post } from "./pages/posts";
import { User } from "./pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/posts",
        element: <Post />,
      },
      {
        path: "/users",
        element: <User />,
      },
    ],
  },
  {
    path: "*",
    element: <>Route not found!</>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
