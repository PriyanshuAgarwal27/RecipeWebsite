import React, { useState } from "react";
import MockData from '../Utils/MockData.jsx';
import RecipesCard from "./recipeCard";
import {Link} from "react-router-dom";
import "../Css/body.css";
const Body = () => {
  const [inputSearch, setInputSearch] = useState({});
  const [filteredData, setFilteredData] = useState(MockData);

  const onSubmit = () => {
    const filteredRecipe = Object.values(MockData).filter((recipe) =>
      recipe?.recipeName.toLowerCase().includes(inputSearch.toLowerCase()) 
      || recipe?.tags.includes(inputSearch)
      || recipe?.authorName.toLowerCase().includes(inputSearch.toLowerCase())
    );
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
          {Object.values(filteredData).map((recipe) => (
            <Link key = {recipe.id} 
            to = {"/details/" + recipe.id +"/"+ recipe.recipeName}
            style={{ textDecoration: 'none', color: 'black' }}>
           <RecipesCard {...recipe} />
           </Link>
          ))}  
        </div>
      </div>
    </div>
  );
};

export default Body;
