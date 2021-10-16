function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");

colorBtn.addEventListener("click", onBtncChangeColorClick);

function onBtncChangeColorClick() {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  colorNameEl.textContent = randomHexColor;
}
