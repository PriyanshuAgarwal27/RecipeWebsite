export const convertIngredientsToObject = (ingredients) => {
  const ingredientsAsObject = {};
  ingredients.map((val) => (ingredientsAsObject[val.name] = val.quantity));
  return ingredientsAsObject;
};

export const convertIngredientsToArray = (ingredientsObject) => {
  const ingredientArray = [];
  Object.keys(ingredientsObject).forEach((ingrName) => {
    ingredientArray.push({
      name: ingrName,
      quantity: ingredientsObject[ingrName],
    });
  });
  return ingredientArray;
};
