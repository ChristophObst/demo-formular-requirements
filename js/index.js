console.clear();

const form = document.querySelector('[data-js="form"]');
const storage = document.querySelector('[data-js="storage"]');
const passwordInput = document.querySelector('[data-js="password-input"]');
const titleInput = document.querySelector('[data-js="title-input"]');
const passwordHint = document.querySelector('[data-js="password-hint"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // function call to show the saved credentials
  addStorageEntry(data.title, data.email, data.password);
});

passwordInput.addEventListener("input", (event) => {
  updatePasswordStrength(event.target.value, event.target.minLength);
});

// function we need later :)
function updatePasswordStrength(text, minlength) {
  const passwordLength = text.length;
  if (passwordLength < 1) {
    passwordHint.textContent = "";
  } else if (passwordLength < minlength) {
    passwordHint.textContent = `Your password has ${passwordLength} out of minimum ${minlength} characters.`;
  } else {
    passwordHint.textContent = "Your password is secure enough.";
  }
}

/* function to create and append the Saved Credential -  not  relevant for the demo */
function addStorageEntry(title, email, password) {
  const entry = document.createElement("li");
  entry.className = "storage__entry";

  const headline = document.createElement("h3");
  headline.className = "storage__title";
  headline.textContent = title;

  const descriptionList = document.createElement("dl");
  descriptionList.className = "storage__credentials";

  const descriptionTermEmail = document.createElement("dt");
  descriptionTermEmail.textContent = "Email:";

  const descriptionDetailsEmail = document.createElement("dd");
  descriptionDetailsEmail.textContent = email;

  const descriptionTermPassword = document.createElement("dt");
  descriptionTermPassword.textContent = "Password:";

  const descriptionDetailsPassword = document.createElement("dd");
  descriptionDetailsPassword.textContent = password;

  descriptionList.append(
    descriptionTermEmail,
    descriptionDetailsEmail,
    descriptionTermPassword,
    descriptionDetailsPassword
  );

  entry.append(headline, descriptionList);

  storage.append(entry);
}
