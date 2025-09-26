import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Search from "../../pages/search";
import Review from "../../pages/movie-detail/review";
import Cast from "../../pages/movie-detail/cast";
import Others from "../../pages/movie-detail/others";
import CrewDetail from "../../pages/crew-detail";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const BookMark = lazy(() => import("@/pages/bookmark"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/bookmark", element: <BookMark /> },
        { path: "/search", element: <Search /> },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <Review /> },
            { path: "cast", element: <Cast /> },
            { path: "others", element: <Others /> },
          ],
        },
        { path: "/crew/:id", element: <CrewDetail /> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
