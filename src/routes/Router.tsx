import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Layout from "../layouts/Layout";
import ProfileLayout from "../layouts/ProfileLayout";
import PaymentsPage from "../pages/PaymentsPage";
import ProtectedRoute from "../components/global/ProtectedRoute";

// pages
const HomePage = lazy(() => import("../pages/HomePage"));
const CenterPage = lazy(() => import("../pages/CenterPage"));
// const PostsPage = lazy(() => import("../pages/PostsPage"));
const PostPage = lazy(() => import("../pages/PostPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SchedulePage = lazy(() => import("../pages/SchedulePage"));
const MobileMenu = lazy(() => import("../pages/MobileMenu"));

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      path: "",
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <HomePage /> },
        { path: "/center/:slug", element: <CenterPage /> },
        // { path: "/posts", element: <PostsPage /> },
        { path: "/post/:slug", element: <PostPage /> },
        // { path: "/center/posts", element: <PostsPage /> },
        { path: "/center/:slug/post/:slug", element: <PostPage /> },
        { path: "/login", element: <LoginPage /> },

        {
          path: "/profile",
          element: <ProtectedRoute />,
          children: [
            {
              element: (
                <Suspense fallback={<div>Loading profile...</div>}>
                  <ProfileLayout />
                </Suspense>
              ),
              children: [
                { path: "menu", element: <MobileMenu /> },
                { path: "schedule", element: <SchedulePage /> },
                { path: "payments", element: <PaymentsPage /> },
                { path: "messages", element: <PaymentsPage /> },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
