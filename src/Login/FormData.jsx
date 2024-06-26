import React, { useState } from "react";
import "../Css/FormData.css";
import { useNavigate } from "react-router-dom";
import { TERMS_AND_CONDITIONS } from "../Utils/constants";
import { createRecipe, updateRecipe } from "../services/recipeService";
import {
  convertIngredientsToArray,
  convertIngredientsToObject,
} from "../Utils/misc";

const FormData = ({ newDataToUpdate, cancelUpdate, isUpdateMode }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(newDataToUpdate);
  const [inputValue, setInputValue] = useState({
    authorName: newDataToUpdate?.authorName,
    recipeName: newDataToUpdate?.recipeName,
    description: newDataToUpdate?.description,
    recipeSteps: newDataToUpdate?.recipeSteps,
    imageUrl: newDataToUpdate?.imageUrl,
  });
  const [ingredientsValue, setIngrediantsValue] = useState(
    newDataToUpdate
      ? convertIngredientsToArray(newDataToUpdate?.ingredients ?? [])
      : []
  );

  const [tagValue, setTagValue] = useState("");
  const [displayTag, setDisplayTag] = useState(
    newDataToUpdate ? [...newDataToUpdate?.tags] : []
  );

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "authorName" ||
      name === "recipeName" ||
      name === "description" ||
      name === "recipeSteps" ||
      name === "imageUrl"
    ) {
      setInputValue((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    if (name === "imageUrl") {
      setInputValue((prevData) => ({
        ...prevData,
        [name]: value.files,
      }));
    }
  };

  const handleTagValue = (e) => {
    const { value } = e.target;
    setTagValue(value);
  };

  const onPressKeys = (e) => {
    let tags;
    if (e.code === "Comma" || e.code === "Enter") {
      tags = tagValue.split(",");
      if (e.code === "Enter") {
        tags = tags.map((tag) => tag.trim()).filter((tag) => tag);
        setDisplayTag((prev) => [...prev, ...tags]);
        setTagValue("");
      }
    }
  };
  const onDeleteTag = (index) => {
    const filteredTags = displayTag.filter((tag, i) => i !== index);
    setDisplayTag(filteredTags);
  };
  const handleIngredientsValue = (event, index) => {
    const newIngredient = [...ingredientsValue];
    newIngredient[index][event.target.name] = event.target.value;
    setIngrediantsValue(newIngredient);
  };
  const handleAddIngredient = () => {
    setIngrediantsValue([...ingredientsValue, { name: "", quantity: "" }]);
  };
  const onDeleteIngredients = (index) => {
    const filteredIngredients = ingredientsValue.filter(
      (val, i) => i !== index
    );
    setIngrediantsValue(filteredIngredients);
  };
  const onSubmit = async () => {
    const authorName = inputValue.authorName;
    const recipeName = inputValue.recipeName;
    const description = inputValue.description;
    const recipeSteps = inputValue.recipeSteps;
    const tags = displayTag;
    console.log(inputValue);
    const imageUrl = inputValue.imageUrl;
    const recipeData = {
      authorName,
      recipeName,
      description,
      tags,
      ingredients: convertIngredientsToObject(ingredientsValue),
      recipeSteps,
      imageUrl,
    };
    if (!(authorName && recipeName)) {
      window.alert("Mention author name and recipe name");
      return;
    }

    try {
      if (isUpdateMode) {
        await updateRecipe(newDataToUpdate.id, recipeData);
        cancelUpdate();
      } else {
        await createRecipe(recipeData);
        navigate("/recipes");
      }
    } catch (error) {}
  };
  const onEnterIngredients = (e) => {
    if (e.code === "Enter") {
      handleAddIngredient();
    }
  };

  return (
    <div className="form-container">
      {newDataToUpdate ? (
        <h2>Update a New Recipe </h2>
      ) : (
        <h2>Add a New Recipe</h2>
      )}

      <div className="form-control">
        <label htmlFor="recipeName" className="form-label">
          Title
        </label>
        <input
          className="form-input"
          type="text"
          name="recipeName"
          placeholder="eg. Paneer Tikka Masala"
          value={inputValue.recipeName}
          id="recipeName"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          className="form-input"
          type="text"
          name="description"
          placeholder="eg Paneer is mixed with gravy.."
          value={inputValue.description}
          id="description"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label className="form-label tag-label" htmlFor="tag">
          Tag
        </label>
        <input
          className="form-input input-tag"
          type="text"
          name="tag"
          placeholder="eg Veg,Cury"
          value={tagValue}
          id="tag"
          onKeyDown={onPressKeys}
          onChange={handleTagValue}
        />

        <div className="tags-container">
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
        </div>
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="authorName">
          AuthorName
        </label>
        <input
          type="text"
          className="form-input"
          name="authorName"
          placeholder="eg Priyanshu"
          value={inputValue.authorName}
          id="authorName"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="imageUrl">
          Image URL
          <input
            type="file"
            accept=".jpg"
            className="form-input"
            name="imageUrl"
            placeholder="eg https://url"
            value={inputValue.imageUrl}
            id="imageUrl"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="form-label">Ingredients</label>
        {ingredientsValue.map((ingredient, index) => (
          <div key={`ing-inp-${index}`} className="ingredients">
            <input
              className="ingredient-name"
              type="text"
              name="name"
              placeholder="eg Onion"
              value={ingredient.name}
              id="ingredientsKey"
              onChange={(event) => handleIngredientsValue(event, index)}
            />
            <input
              className="ingredient-quantity"
              type="text"
              name="quantity"
              placeholder="eg 1kg"
              value={ingredient.quantity}
              id="ingredientsValue"
              onKeyDown={onEnterIngredients}
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
          </div>
        ))}
      </div>
      <button
        className="toAddIngredients"
        onClick={() => handleAddIngredient()}
      >
        + Add ingredient
      </button>
      <div className="form-control">
        <label className="form-label" htmlFor="recipeSteps">
          Recipe Steps{" "}
        </label>
        <textarea
          rows={5}
          className="recipeSteps form-input"
          type="text"
          name="recipeSteps"
          placeholder="eg 1) Cut Onions 2) Add Paneer"
          value={inputValue.recipeSteps}
          id="recipeSteps"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="tc-checkbox-container">
        <input
          type="checkbox"
          className="checkbox-input"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />{" "}
        <p> {TERMS_AND_CONDITIONS} </p>
      </div>
      <center>
        <button
          className="submit-button"
          type="button"
          disabled={!isChecked}
          onClick={onSubmit}
        >
          Submit
        </button>
        {newDataToUpdate && (
          <button className="cancel-button" onClick={cancelUpdate}>
            Cancel
          </button>
        )}
      </center>
    </div>
  );
};

export default FormData;
