let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", onDecrementClick);
refs.incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
