import { createBrowserRouter, Navigate } from "react-router-dom";
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import Error from "./Components/RouterError";
import RecipeList from "./Components/RecipeList";
import SpecificRecipe from "./Components/SpecificRecipe";
import Layout from "./Components/Layout";
import FormData from "./Login/FormData";

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
    path: "/Signup",
    element: <SignUp />,
  },
]);
export default appRouter;
