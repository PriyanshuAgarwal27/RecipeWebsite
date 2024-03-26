import { nanoid } from "nanoid";
import mockData from "../Utils/MockData";
import {
  addReceipeToLocalStorage,
  loadRecipesToLocalstorage,
} from "./localStorageService";

export const getRecipes = (filters) => {
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
    addReceipeToLocalStorage(newRecipe);
    resolve(newRecipe);
  });
};

export const updateRecipe = (recipeId, recipeData) => {
  return new Promise((resolve, reject) => {
    const indexToUpdate = mockData.findIndex((recipe) => {
      return recipe.id === recipeId;
    });

    if (indexToUpdate === -1) {
      reject("Recipe not found with given id");
    } else {
      mockData.splice(indexToUpdate, 1, recipeData);
      resolve(true);
    }
  });
};

export const deleteRecipe = (recipeId) => {
  new Promise((resolve, reject) => {
    const index = mockData.findIndex((recipe) => {
      return recipe.id === recipeId;
    });
    if (index === -1) {
      reject("Recipe Not found");
    } else {
      mockData.splice(index, 1);
      loadRecipesToLocalstorage(mockData);
      resolve(true);
    }
  });
};
