export const RECEIPE_KEY = "receipes";

export const loadRecipesFromLocalstorage = () => {
  return JSON.parse(localStorage.getItem(RECEIPE_KEY));
};

export const addReceipeToLocalStorage = (recipe) => {
  const allRecipes = loadRecipesFromLocalstorage();
  allRecipes.push(recipe);
  loadRecipesToLocalstorage(allRecipes);
};

export const loadRecipesToLocalstorage = (recipes) => {
  localStorage.setItem(RECEIPE_KEY, JSON.stringify(recipes));
};
