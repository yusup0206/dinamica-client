import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Layout from "../layouts/Layout";

// pages
const HomePage = lazy(() => import("../pages/HomePage"));
const CenterPage = lazy(() => import("../pages/CenterPage"));
const PostsPage = lazy(() => import("../pages/PostsPage"));
const PostPage = lazy(() => import("../pages/PostPage"));

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      path: "/",
      children: [
        { path: "", element: <HomePage /> },
        { path: "center/:slug", element: <CenterPage /> },
        { path: "posts", element: <PostsPage /> },
        { path: "post/:slug", element: <PostPage /> },
        { path: "center/posts", element: <PostsPage /> },
        { path: "center/:slug/post/:slug", element: <PostPage /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
