import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";
import "../Css/specificRecipe.css";
const SpecificRecipe = () => {
  const [data, setData] = useState();
  const { recipeId } = useParams();

  const getData = async () => {
    const d = await getRecipeById(recipeId);
    setData(d);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data && (
      <center>
        <h1 className="recipe-name"> {data.recipeName}</h1>

        <div className="recipe-image">
          <img alt="image" src={data.imageUrl}></img>
        </div>
        <h2 className="description">description = {data.description}</h2>
        <h2 className="tags">tags = {data.tags}</h2>
        <h2 className="ingredients">
          Ingredients
          {Object.keys(data.ingredients).map((d) => {
            return (
              <div>
                {d}: {data.ingredients[d]}
              </div>
            );
          })}
        </h2>
        <h2 className="recipe-steps">recipe Steps = {data.recipeSteps}</h2>
        <></>
        <Link
          to={`/recipes?authorName=${data.authorName}`}
          className="authorName"
        >
          {data.authorName}
        </Link>
      </center>
    )
  );
};
export default SpecificRecipe;
