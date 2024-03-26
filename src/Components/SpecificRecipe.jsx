import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteRecipe, getRecipeById } from "../services/recipeService";
import FormData from "../Login/FormData";
import "../Css/specificRecipe.css";
const SpecificRecipe = () => {
  const [data, setData] = useState();
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const d = await getRecipeById(recipeId);
      setData(d);
    } catch (error) {}
  };
  const cancelUpdate = () => {
    setIsUpdateMode(false);
    getData();
  };
  const onDeleteRecipe = async () => {
    try {
      await deleteRecipe(recipeId);
      navigate("/recipes");
    } catch (error) {}
  };
  const onUpdateRecipe = () => {
    setIsUpdateMode(true);
    // navigate("/createRecipe");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    data &&
    (!isUpdateMode ? (
      <div className="specific-recipe-container">
        <div className="recipe-intro">
          <div className="recipe-image">
            <img alt="image" src={data.imageUrl}></img>
          </div>
          <div className="text-part">
            <h1 className="recipe-name"> {data.recipeName}</h1>
            <Link
              to={`/recipes?authorName=${data.authorName}`}
              className="authorName"
            >
              {data.authorName}
            </Link>
            <div className="tag-container">
              {" "}
              {data.tags.map((tag) => {
                return <div className="single-tag">{tag}</div>;
              })}
            </div>
            <div className="description">
              <h2 className="description-tag">Description </h2>
              <p className="description-detail">{data.description}</p>
            </div>
          </div>
        </div>
        <div className="ingredients-class">
          <h2 className="ingredients-tag">Ingredients </h2>
          <div className="ingredients-desc">
            <ul className="ingredients-list">
              {Object.keys(data.ingredients).map((d, idx) => {
                return (
                  <li className="ingredient" key={`ingredient-${idx}`}>
                    <span className="ingredient-qty">
                      {data.ingredients[d]}
                    </span>{" "}
                    {d}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="recipe-steps-class">
          <h2 className="recipe-steps-tag">Recipe Steps </h2>
          <div> {data.recipeSteps}</div>
        </div>
        <button className="delete-recipe-btn" onClick={onDeleteRecipe}>
          Delete
        </button>
        <button className="update-recipe-btn" onClick={onUpdateRecipe}>
          Update
        </button>
      </div>
    ) : (
      <FormData
        newDataToUpdate={data}
        cancelUpdate={cancelUpdate}
        isUpdateMode={isUpdateMode}
      />
    ))
  );
};
export default SpecificRecipe;
