const inputEl = document.querySelector("#validation-input");
const validLength = Number(inputEl.dataset.length);
// console.log(validLength);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (validLength === event.currentTarget.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
