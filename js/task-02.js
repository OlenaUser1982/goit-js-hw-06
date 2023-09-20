const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
const items = ingredients.map(item => {
  const itemLi = document.createElement("li");
  itemLi.textContent = item;
  return itemLi;
})

list.append(...items)