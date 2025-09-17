<<<<<<< HEAD
/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovies from "./pages/AddMovies.jsx";
import ShowList from "./pages/ShowList.jsx";
import Detail from "./pages/Detail.jsx";
import Favourite from "./pages/Favourite.jsx";
import WatchLater from "./pages/WatchList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ShowList />,
      },
      {
        path: "addmovies",
        element: <AddMovies />,
      },
      { path: "detail/:id", element: <Detail /> },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "watchList",
        element: <WatchLater />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
=======
/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddMovies from "./pages/AddMovies.jsx";
import ShowList from "./pages/ShowList.jsx";
import Detail from "./pages/Detail.jsx";
import Favourite from "./pages/Favourite.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ShowList />,
      },
      {
        path: "addmovies",
        element: <AddMovies />,
      },
      { path: "detail/:id", element: <Detail /> },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
>>>>>>> 161a5f743d745ceac3600c983252aa0ae36be307
