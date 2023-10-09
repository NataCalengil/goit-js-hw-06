const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const listItem = ingredients.map(ingredient => {

  const newElement = document.createElement("li");

  newElement.textContent = ingredient;
  newElement.classList.add('item');
  return newElement;

})
listIngredients.append(...listItem);