import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import RecipesCard from "./RecipeCard";
import { getRecipes } from "../services/recipeService";
import { useDebounce } from "../hooks/useDebounce";
import "../Css/body.css";
import "../Css/RecipeList.css";

const RecipeList = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();
  const debouncedInputSearch = useDebounce(inputSearch, 500);

  const getRecipesFromService = async () => {
    const data = await getRecipes({ search: debouncedInputSearch });
    setFilteredData(data);
  };

  useEffect(() => {
    getRecipesFromService();
  }, [debouncedInputSearch]);

  useEffect(() => {
    // const queryParams = new URLSearchParams(location.search);
    const authorName = searchParams.get("authorName");
    setInputSearch(authorName);
  }, [searchParams]);
  const onCancelSearchEvent = () => {
    setInputSearch("");
  };
  return (
    <div className="body">
      <div className="home">
        <div className="input-search">
          <input
            className="search-input"
            value={inputSearch}
            type="text"
            placeholder="Search for recipes"
            name="search"
            id="search"
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <button className="cancel-search-input" onClick={onCancelSearchEvent}>
            ❌
          </button>
        </div>
        <div className="card-container">
          {filteredData.map((recipe) => (
            <RecipesCard {...recipe} id={recipe.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
