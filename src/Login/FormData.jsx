import React, { useEffect, useState } from "react";
import "./FormData.css";
import { createRecipe } from "../services/recipeService";
const FormData = (props) => {
  const [toShow, setToShow] = useState(true);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState({
    authorName: "",
    recipeName: "",
    description: "",
    recipeSteps: "",
  });
  const [ingredientsValue, setIngrediantsValue] = useState([
    {
      name: "",
      quantity: "",
    },
  ]);
  const [tagValue, setTagValue] = useState("");
  const [displayTag, setDisplayTag] = useState([]);
  let newData = {};

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    if (
      name === "authorName" ||
      name === "recipeName" ||
      name === "description" ||
      name === "recipeSteps"
    ) {
      setInputValue((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleTagValue = (e) => {
    const { value } = e.target;
    setTagValue(value);
  };

  const onPressKeys = (e) => {
    if (e.code === "Enter" || e.code === "Comma") {
      setDisplayTag((prev) => [...prev, tagValue]);
      setTagValue("");
    }
  };
  const onDeleteTag = (index) => {
    const filteredTags = displayTag.filter((tag, i) => i !== index);
    setDisplayTag(filteredTags);
  };
  const handleIngredientsValue = (event, index) => {
    const newIngredient = [...ingredientsValue];
    newIngredient[index][event.target.name] = event.target.value;
    console.log({ newIngredient });
    setIngrediantsValue(newIngredient);
  };
  const handleAddIngredient = () => {
    setToShow(true);
    setIngrediantsValue([...ingredientsValue, { name: "", quantity: "" }]);
  };
  const onDeleteIngredients = (index) => {
    const filteredIngredients = ingredientsValue.filter(
      (val, i) => i !== index
    );
    console.log(filteredIngredients);
    setIngrediantsValue(filteredIngredients);
  };
  useEffect(() => {
    console.log({ ingredientsValue });
    ingredientsValue.map((val) => (newData[val.name] = val.quantity));
    console.log(newData);
    setData(newData);
  }, [ingredientsValue]);
  const onSubmit = () => {
    const authorName = inputValue.authorName;
    const recipeName = inputValue.recipeName;
    const description = inputValue.description;
    const recipeSteps = inputValue.recipeSteps;
    const ingredients = data;
    const tags = displayTag;
    const imageUrl =
      "https://media.istockphoto.com/id/1320922361/photo/woman-taking-tasty-sushi-roll-with-salmon-from-set-at-table-closeup.jpg?s=612x612&w=0&k=20&c=yedOW0jKGjN9H2iGA6MAEIxcc7oVtN-4isL_i74U6Kk=";
    const recipeData = {
      authorName,
      recipeName,
      description,
      tags,
      ingredients,
      recipeSteps,
      imageUrl,
    };
    createRecipe(recipeData);
  };
  return (
    <div className="form-container">
      <label>
        Author :
        <input
          type="text"
          name="authorName"
          value={inputValue.authorName}
          id="authorName"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Recipe Name:
        <input
          type="text"
          name="recipeName"
          value={inputValue.recipeName}
          id="recipeName"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={inputValue.description}
          id="description"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Tag:
        <input
          type="text"
          name="tag"
          value={tagValue}
          id="tag"
          onKeyDown={onPressKeys}
          onChange={handleTagValue}
        />
        {displayTag.map((d, index) => {
          return (
            <div key={index} className="tag cross">
              {d}{" "}
              <button type="button" onClick={() => onDeleteTag(index)}>
                x
              </button>
            </div>
          );
        })}
      </label>
      {toShow &&
        ingredientsValue.map((ingredient, index) => (
          <label key={index} className="ingredients">
            {index === 0 && <div>Ingredients:</div>}
            <input
              type="text"
              name="name"
              value={ingredient.name}
              id="ingredientsKey"
              onChange={(event) => handleIngredientsValue(event, index)}
            />
            <input
              type="text"
              name="quantity"
              value={ingredient.quantity}
              id="ingredientsValue"
              onChange={(event) => handleIngredientsValue(event, index)}
            />
            <button
              className="toAddIngredients"
              onClick={() => handleAddIngredient()}
            >
              +
            </button>{" "}
            {index != 0 && (
              <button
                className="onDeleteIngredients"
                onClick={() => onDeleteIngredients(index)}
              >
                <img
                  width={"30px"}
                  height={"30px"}
                  alt="dustbinIcon"
                  src="https://thumb.ac-illust.com/3b/3b5b217ce258702c0956cbf3b146acba_t.jpeg"
                ></img>
              </button>
            )}
          </label>
        ))}
      <label>
        RecipeSteps:
        <input
          type="text"
          name="recipeSteps"
          value={inputValue.recipeSteps}
          id="recipeSteps"
          onChange={handleInputChange}
        />
      </label>
      <button className="submit-button" type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FormData;
