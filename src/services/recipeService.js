import { nanoid } from "nanoid";
import mockData from "../Utils/MockData";

export const getRecipes = (filters) => {
  console.log(filters);
  const { search } = filters;
  return new Promise((resolve, reject) => {
    let data = [...mockData];
    if (search) {
      data = data.filter((recipe) => {
        return (
          recipe.recipeName.toLowerCase().includes(search.toLowerCase()) ||
          recipe.tags.includes(search) ||
          recipe.authorName.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    resolve(data);
  });
};

export const getRecipeById = (recipeId) => {
  let data = [...mockData];
  return new Promise((resolve, reject) => {
    const recipe = data.find((recipe) => {
      return recipe.id === recipeId;
    });
    if (recipe) {
      resolve(recipe);
    } else reject("Recipe not found with given id");
  });
};

export const createRecipe = (recipeData) => {
  return new Promise((resolve, reject) => {
    const newRecipe = { ...recipeData, id: nanoid(5) };
    mockData.push(newRecipe);
    resolve(newRecipe);
  });
};

export const updateRecipe = (recipeId, recipeData) => {
  return new Promise((resolve, reject) => {
    let updatedRecipe = null;
    mockData = mockData.map((recipe) => {
      if (recipe.id === recipeId) {
        updatedRecipe = {
          ...recipeData,
          id: recipe.id,
        };
        return updatedRecipe;
      }
      return recipe;
    });

    if (updatedRecipe === null) {
      reject("Recipe not found with given id");
    } else resolve(updatedRecipe);
  });
};
