const categoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesEl.length}`);

const categoryEl = document.querySelectorAll("li.item");
categoryEl.forEach((item) => {
  const titleEl = item.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);
  const numberEl = item.querySelectorAll("li");
  console.log(`Elements: ${numberEl.length}`);
});
