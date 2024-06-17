import mockData from "./Utils/MockData";
import appRouter from "./appRouter";
import { useLayoutEffect } from "react";
import { RouterProvider } from "react-router-dom";
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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
