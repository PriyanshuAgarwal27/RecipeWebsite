import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";
import "../Css/specificRecipe.css";
const SpecificRecipe = () => {
  const [data, setData] = useState();
  const { recipeId } = useParams();

  const getData = async () => {
    const d = await getRecipeById(recipeId);
    console.log({ d });
    setData(d);
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    data && (
      <div className="specific-recipe-container">
        <div className="top-part">
          <div className="left-top-part">
            <h1 className="recipe-name"> {data.recipeName}</h1>
            <Link
              to={`/recipes?authorName=${data.authorName}`}
              className="authorName"
            >
              {data.authorName}
            </Link>
          </div>
          <div className="recipe-image">
            <img alt="image" src={data.imageUrl}></img>
          </div>
        </div>
        <div className="description">
          <h2 className="description-tag">Description </h2>
          <span className="description-detail">{data.description}</span>
        </div>
        <div className="ingredients-class">
          <h2 className="ingredients-tag">Ingredients </h2>
          <div className="ingredients-desc">
            {Object.keys(data.ingredients).map((d) => {
              return (
                <div key={d}>
                  {d.toUpperCase()}: {data.ingredients[d]}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="recipe-steps-tag">Recipe Steps </h2>
          <div> {data.recipeSteps}</div>
        </div>
        <div className="tag-container">
          <h2 className="tags">Tags</h2>
          <div>
            {" "}
            {data.tags.map((tag) => {
              return <div className="single-tag">{tag}</div>;
            })}
          </div>
        </div>
      </div>
    )
  );
};
export default SpecificRecipe;
