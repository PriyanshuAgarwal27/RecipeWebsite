import React, { useState } from "react";
import MockData from "../Utils/MockData";
import "../Css/RecipeList.css";
import RecipesCard from "./RecipeCard.jsx";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/recipeService";
import "../Css/body.css";

const RecipeList = () => {
  const [inputSearch, setInputSearch] = useState({});
  const [filteredData, setFilteredData] = useState(MockData);

  const onSubmit = async () => {
    const data = await getRecipes({ search: inputSearch });
    setFilteredData(data);
  };

  return (
    <div className="body">
      <div className="search">
        <div className="input-search">
          <input
            type="text"
            placeholder="Search for recipes"
            name="search"
            id="search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />

          <button onClick={onSubmit}>Search</button>
        </div>
        <div className="card-container">
          {Object.values(filteredData).map((recipe) => (
            <Link
              key={recipe.id}
              to={"/recipes/" + recipe.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <RecipesCard {...recipe} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
