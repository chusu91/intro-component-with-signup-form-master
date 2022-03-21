"use strict!";

const form = document.querySelector("#trial-form");
const inputFirstName = document.querySelector(".form_first-name");
const inputLastName = document.querySelector(".form_last-name");
const inputEmail = document.querySelector(".form_email");
const inputPassword = document.querySelector(".form_password");

function onHandleSubmit(e) {
  e.preventDefault();
  checkInput(inputFirstName);
  checkInput(inputLastName);
  checkInput(inputPassword);
  checkEmail(inputEmail);
}

function checkInput(input) {
  const inputContainer = input.parentNode;
  const inputValue = input.value;
  const inputCategory = input.placeholder; //First Name
  if (inputValue == "") {
    // how to add img to input?? so that placeholder text will be dissapeard?
    //const errorIcon = document.createElement("img");
    //errorIcon.src = "./images/icon-error.svg"
    //inputValue = errorIcon;
    const span = document.createElement("span");
    span.setAttribute("class", "is-error");
    span.innerText = `${inputCategory} cannot be empty`;
    inputContainer.appendChild(span);
    input.style.outline = "2px solid var(--color-Red)";
  }
}

function checkEmail(input) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const inputContainer = input.parentNode;
  const inputValue = input.value;
  const inputCategory = input.placeholder;
  if (!inputValue.match(mailFormat)) {
    const span = document.createElement("span");
    span.setAttribute("class", "is-error");
    span.innerText = `Looks like this is not an Email`;
    inputContainer.appendChild(span);
    input.style.outline = "2px solid var(--color-Red)";
  }
}

form.addEventListener("submit", onHandleSubmit);
