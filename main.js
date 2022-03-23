"use strict!";

const form = document.querySelector("#trial-form");
const inputFirstName = document.querySelector(".form_first-name");
const inputLastName = document.querySelector(".form_last-name");
const inputEmail = document.querySelector(".form_email");
const inputPassword = document.querySelector(".form_password");
const errorMsg = document.querySelectorAll(".is-error");

function onHandleSubmit(e) {
  e.preventDefault();
  checkInput(inputFirstName, 0);
  checkInput(inputLastName, 1);
  checkInput(inputPassword, 3);
  checkEmail(inputEmail, 2);
}

function checkInput(input, i) {
  //const inputContainer = input.parentNode;
  const inputValue = input.value;
  //const inputCategory = input.placeholder;
  errorMsg[i].classList.add("hidden");
  if (inputValue == "") {
    //add &&condtion that span will be added only once..
    input.classList.add("error-icon");
    input.style.outline = "2px solid var(--color-Red)";
    errorMsg[i].classList.remove("hidden");
    // const span = document.createElement("span");
    // span.setAttribute("class", "is-error");
    // span.innerText = `${inputCategory} cannot be empty`;
    // inputContainer.appendChild(span); // maybe api that delete the previous sibling node before append???
  } else {
    input.classList.remove("error-icon");
    errorMsg[i].classList.add("hidden");
    input.style.outline = "";
  }
}

function checkEmail(input, i) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const inputValue = input.value;
  errorMsg[i].classList.add("hidden");
  if (!inputValue.match(mailFormat)) {
    input.classList.add("error-icon");
    input.style.outline = "2px solid var(--color-Red)";
    errorMsg[i].classList.remove("hidden");
  } else {
    input.classList.remove("error-icon");
    errorMsg[i].classList.add("hidden");
    input.style.outline = "";
  }
}

form.addEventListener("submit", onHandleSubmit);
