const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const loginFormelements = event.currentTarget.elements;
  const email = loginFormelements.email.value;
  const password = loginFormelements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены.");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  formEl.reset();
}
