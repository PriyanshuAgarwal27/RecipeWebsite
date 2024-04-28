// import { nanoid } from "nanoid";
import axios from "axios";
import mockData from "../Utils/MockData";
import {
  addReceipeToLocalStorage,
  loadRecipesToLocalstorage,
} from "./localStorageService";

export const getRecipes = (filters) => {
  // const { search } = filters;
  // return new Promise((resolve, reject) => {
  //   let data = [...mockData];
  //   if (search) {
  //     data = data.filter((recipe) => {
  //       return (
  //         recipe.recipeName.toLowerCase().includes(search.toLowerCase()) ||
  //         recipe.tags
  //           .map((tag) => tag.toLowerCase())
  //           .includes(search.toLowerCase()) ||
  //         recipe.authorName.toLowerCase().includes(search.toLowerCase())
  //       );
  //     });
  //   }
  //   resolve(data);
  // });
  return axios.get("/recipes").then((res) => res.data);
};

export const getRecipeById = (recipeId) => {
  // let data = [...mockData];
  // return new Promise((resolve, reject) => {
  //   const recipe = data.find((recipe) => {
  //     return recipe.id === recipeId;
  //   });
  //   if (recipe) {
  //     resolve(recipe);
  //   } else reject("Recipe not found with given id");
  // });
  return axios.get(`/recipes/${recipeId}`).then((res) => res.data);
};

export const createRecipe = (recipeData) => {
  // return new Promise((resolve, reject) => {
  //   const newRecipe = { ...recipeData, id: nanoid(5) };
  //   mockData.push(newRecipe);
  //   addReceipeToLocalStorage(newRecipe);
  //   resolve(newRecipe);
  // });
  return axios.post("/recipes", recipeData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateRecipe = async (recipeId, recipeData) => {
  // return new Promise((resolve, reject) => {
  //   const indexToUpdate = mockData.findIndex((recipe) => {
  //     return recipe.id === recipeId;
  //   });

  //   if (indexToUpdate === -1) {
  //     reject("Recipe not found with given id");
  //   } else {
  //     mockData.splice(indexToUpdate, 1, { ...recipeData, id: recipeId });
  //     loadRecipesToLocalstorage(mockData);
  //     resolve(true);
  //   }
  return await axios.put(`/recipes/${recipeId}`, recipeData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteRecipe = (recipeId) => {
  // new Promise((resolve, reject) => {
  //   const index = mockData.findIndex((recipe) => {
  //     return recipe.id === recipeId;
  //   });
  //   if (index === -1) {
  //     reject("Recipe Not found");
  //   } else {
  //     mockData.splice(index, 1);
  //     loadRecipesToLocalstorage(mockData);
  //     resolve(true);
  //   }
  // });
  return axios.delete(`/recipes/${recipeId}`);
};
