// import "./App.css";
import FormData from "./Login/FormData";
import Error from "./Components/RouterError";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RecipeList from "./Components/RecipeList";
import SpecificRecipe from "./Components/SpecificRecipe";
import Layout from "./Components/Layout";
import { useLayoutEffect } from "react";
import {
  loadRecipesFromLocalstorage,
  loadRecipesToLocalstorage,
  RECEIPE_KEY,
} from "./services/localStorageService";
import mockData from "./Utils/MockData";

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
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
