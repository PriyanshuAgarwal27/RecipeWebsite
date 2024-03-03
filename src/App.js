// import "./App.css";
import FormData from "./Login/FormData.js";
import Recipes from "./Components/recipes.jsx";
import Error from "./Components/error.jsx";
import About from "./Components/about.jsx";
import { createBrowserRouter,RouterProvider }from "react-router-dom";
import Body from "./Components/body.jsx";
import Details from "./Components/Details.jsx";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Recipes />,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path:"createRecipe",
          element:<FormData/>
        }
      ]
    },
    {
      path:"/details/:id/:recipeName",
      element:<Details/>
    }
   
  ]);
  return (
    <div>

      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
