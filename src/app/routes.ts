import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/mood/:moodId",
    Component: MovieList,
  },
]);
