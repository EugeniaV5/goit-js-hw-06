const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientList = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = option;
    return itemEl;
  });
};

const elements = makeIngredientList(ingredients);
const listEl = document.querySelector("#ingredients");
listEl.append(...elements);
