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
          {filteredData.map((recipe) => (
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
