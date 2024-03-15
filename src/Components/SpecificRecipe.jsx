import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipeById } from "../services/recipeService";
const SpecificRecipe = () => {
  const [data, setData] = useState();
  const [authorName, setAuthorName] = useState();
  const { recipeId } = useParams();

  const getData = async () => {
    const d = await getRecipeById(recipeId);
    setData(d);
    setAuthorName(d?.authorName);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(authorName);
  return (
    <center>
      <h1> Description for {recipeId}</h1>
      {/* {data} */}
      <Link to={`/recipes?authorName=${authorName}`}>Author Name</Link>
      {/* <button>{data.map((d) => d)}</button> */}
    </center>
  );
};
export default SpecificRecipe;
