function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.inputEl.value);
  let boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.style.marginBottom = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(box);
  }

  refs.boxesEl.append(...boxes);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
}
