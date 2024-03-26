import React, { useEffect, useState } from "react";
import "../Css/FormData.css";
import { useNavigate } from "react-router-dom";
import { TERMS_AND_CONDITIONS } from "../Utils/constants";
import { createRecipe } from "../services/recipeService";
const FormData = (props) => {
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
  const navigate = useNavigate();
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

  let tags;
  const onPressKeys = (e) => {
    if (e.code === "Comma" || e.code === "Enter") {
      tags = tagValue.split(",");
      if (e.code === "Enter") {
        for (const eachTag in tags) {
          setDisplayTag((prev) => [...prev, tags[eachTag]]);
        }
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
    console.log({ newIngredient });
    setIngrediantsValue(newIngredient);
  };
  const handleAddIngredient = () => {
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
  const onSubmit = async () => {
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
    if (!(authorName && recipeName)) {
      window.alert("Mention author name and recipe name");
      return;
    }

    try {
      await createRecipe(recipeData);
      navigate("/recipes");
    } catch (error) {
      console.log(error);
    }
  };
  const onEnterIngredients = (e) => {
    if (e.code === "Enter") {
      handleAddIngredient();
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
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
      <div className="form-control">
        <label className="form-label" htmlFor="authorName">
          {" "}
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
      </center>
    </div>
  );
};

export default FormData;
