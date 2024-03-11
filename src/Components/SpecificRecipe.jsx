import React from "react";
import { useParams } from "react-router-dom";

const SpecificRecipe = () => {
  const { id } = useParams();

  return (
    <center>
      <h1> Description for {id}</h1>
    </center>
  );
};
export default SpecificRecipe;
