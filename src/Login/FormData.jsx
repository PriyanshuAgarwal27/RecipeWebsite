import React, { useEffect, useState } from "react";
import "../Css/FormData.css";
import { TERMS_AND_CONDITIONS } from "../Utils/constants";
import { createRecipe } from "../services/recipeService";
const FormData = (props) => {
  const [toShow, setToShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
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
  const onTrueCheckbox = () => {
    setIsChecked(false);
  };
  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <label>
        <input
          type="text"
          name="recipeName"
          placeholder="Recipe Title"
          value={inputValue.recipeName}
          id="recipeName"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={inputValue.description}
          id="description"
          onChange={handleInputChange}
        />
      </label>
      <label className="tag-label">
        <input
          className="input-tag"
          type="text"
          name="tag"
          placeholder="Tag"
          value={tagValue}
          id="tag"
          onKeyDown={onPressKeys}
          onChange={handleTagValue}
        />
        {displayTag.map((d, index) => {
          return (
            <div key={index} className="tag-cross">
              {d}{" "}
              <button type="button" onClick={() => onDeleteTag(index)}>
                x
              </button>
            </div>
          );
        })}
      </label>
      <label>
        <input
          type="text"
          name="authorName"
          placeholder="Author"
          value={inputValue.authorName}
          id="authorName"
          onChange={handleInputChange}
        />
      </label>
      Ingredients:
      {toShow &&
        ingredientsValue.map((ingredient, index) => (
          <label key={index} className="ingredients">
            <input
              className="ingredient-name"
              type="text"
              name="name"
              placeholder="Name"
              value={ingredient.name}
              id="ingredientsKey"
              onChange={(event) => handleIngredientsValue(event, index)}
            />
            <input
              className="ingredient-quantity"
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={ingredient.quantity}
              id="ingredientsValue"
              onChange={(event) => handleIngredientsValue(event, index)}
            />
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
            </button>{" "}
          </label>
        ))}
      <button
        className="toAddIngredients"
        onClick={() => handleAddIngredient()}
      >
        + Add another ingredient
      </button>
      <label>
        <input
          className="recipeSteps"
          type="text"
          name="recipeSteps"
          placeholder="RecipeSteps"
          value={inputValue.recipeSteps}
          id="recipeSteps"
          onChange={handleInputChange}
        />
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />{" "}
        <span> {TERMS_AND_CONDITIONS} </span>
      </label>
      <center>
        <button
          className="submit-button"
          type="button"
          disabled={!isChecked}
          onClick={onSubmit}
        >
          Submit
        </button>
      </center>
    </div>
  );
};

export default FormData;
