import React, { useState } from "react";
import MockData from '../Utils/MockData.js';
import RecipesCard from "./recipeCard";
import "../Css/body.css";
const Body = () => {
  const [inputSearch, setInputSearch] = useState({});
  const [filteredData, setFilteredData] = useState(MockData);

  console.log({ MockData });
  const onSubmit = () => {
    const filteredRecipe = Object.values(MockData).filter((recipe) =>
      recipe?.recipeName.toLowerCase().includes(inputSearch.toLowerCase()) 
      || recipe?.tags.includes(inputSearch)
      || recipe?.authorName.toLowerCase().includes(inputSearch.toLowerCase())
    );
    console.log({filteredRecipe});
    setFilteredData(filteredRecipe);
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
          {Object.values(filteredData).map((recipe) => {
            return <RecipesCard {...recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
