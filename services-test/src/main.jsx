import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "simpledotcss/simple.min.css";

// PAGES
import { Services } from "./pages/services/services.jsx";
import { ServiceDescription } from "./pages/services/service_description.jsx";
import { Home } from "./pages/home.jsx";
import { Users } from "./pages/users/users.jsx";
import { UserDescription } from "./pages/users/users_description.jsx";
import { Posts } from "./pages/posts/posts.jsx";
import { PostsDescription } from "./pages/posts/post_description.jsx";
import { MainLayout } from "./components/mainLayout.jsx";
import { NewUser } from "./pages/users/user_new.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/services",
        children: [
          { index: true, element: <Services /> },
          { path: ":service", element: <ServiceDescription /> },
        ],
      },
      {
        path: "/users",
        children: [
          { index: true, element: <Users /> },
          { path: "new", element: <NewUser /> },
          { path: ":user", element: <UserDescription /> },
        ],
      },
      {
        path: "/posts",
        children: [
          { index: true, element: <Posts /> },
          { path: ":post", element: <PostsDescription /> },
        ],
      },
    ],
  },

  { path: "*", element: <h1>404 Not Found</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
