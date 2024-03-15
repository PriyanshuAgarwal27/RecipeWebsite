import React, { useEffect, useState } from "react";
import MockData from "../Utils/MockData";
import "../Css/RecipeList.css";
import RecipesCard from "./RecipeCard";
import { Link, useSearchParams } from "react-router-dom";
import { getRecipes } from "../services/recipeService";
import "../Css/body.css";

const RecipeList = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState(MockData);
  const [searchParams] = useSearchParams();

  const getRecipesFromService = async () => {
    console.log("calling");
    const data = await getRecipes({ search: inputSearch });
    setFilteredData(data);
  };

  useEffect(() => {
    getRecipesFromService();
  }, [inputSearch]);

  useEffect(() => {
    // const queryParams = new URLSearchParams(location.search);
    const authorName = searchParams.get("authorName");
    setInputSearch(authorName);
  }, [searchParams]);

  return (
    <div className="body">
      <div className="search">
        <div className="input-search">
          <input
            value={inputSearch}
            type="text"
            placeholder="Search for recipes"
            name="search"
            id="search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
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
