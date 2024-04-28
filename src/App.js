// import "./App.css";
import FormData from "./Login/FormData";
import mockData from "./Utils/MockData";
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import Error from "./Components/RouterError";
import RecipeList from "./Components/RecipeList";
import SpecificRecipe from "./Components/SpecificRecipe";
import Layout from "./Components/Layout";
import { useLayoutEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  loadRecipesFromLocalstorage,
  loadRecipesToLocalstorage,
  RECEIPE_KEY,
} from "./services/localStorageService";

function App() {
  useLayoutEffect(() => {
    if (localStorage.getItem(RECEIPE_KEY)) {
      mockData.splice(0, mockData.length);
      loadRecipesFromLocalstorage().forEach((recipe) => mockData.push(recipe));
    } else {
      loadRecipesToLocalstorage(mockData);
    }
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Navigate to="/recipes" />,
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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
