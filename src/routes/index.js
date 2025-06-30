import React, { createElement as re, lazy, Suspense } from "react";
import { route } from "../config";
import MainLayout from "../components/layouts/MainLayout";
import HomePage from "../pages/Home";
import { createBrowserRouter } from "react-router";

const getPage = (page) => re(lazy(() => import(`../pages/${page}`)));

const routes = [
  {
    path: route.HOME,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Suspense>
    ),
    // element: re(MainLayout, {}, getPage('Home')),
  },
];

const router = createBrowserRouter([
  ...routes,
]);

export default router;