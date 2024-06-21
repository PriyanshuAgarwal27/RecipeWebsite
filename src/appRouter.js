import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Error from "./Components/RouterError";

const SignUp = lazy(() => import("./Login/SignUp"));
const Login = lazy(() => import("./Login/Login"));
const RecipeList = lazy(() => import("./Components/RecipeList"));
const SpecificRecipe = lazy(() => import("./Components/SpecificRecipe"));
const Layout = lazy(() => import("./Components/Layout"));
const FormData = lazy(() => import("./Login/FormData"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" />,
      },
      {
        path: "/recipes",
        children: [
          {
            index: true,
            element: <RecipeList />,
          },
          {
            path: ":recipeId",
            element: <SpecificRecipe />,
          },
        ],
      },
      {
        path: "/createRecipe",
        element: <FormData />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
export default appRouter;
