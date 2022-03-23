"use strict!";

const form = document.querySelector("#trial-form");
const inputFirstName = document.querySelector(".form_first-name");
const inputLastName = document.querySelector(".form_last-name");
const inputEmail = document.querySelector(".form_email");
const inputPassword = document.querySelector(".form_password");

let errorMsgFirstName = 0;
let errorMsgLastName;
let errorMsgEmail;
let errorMsgPassword;

function onHandleSubmit(e) {
  e.preventDefault();
  checkInput(inputFirstName, errorMsgFirstName);
  checkInput(inputLastName, errorMsgLastName);
  checkInput(inputPassword, errorMsgEmail);
  checkEmail(inputEmail, errorMsgPassword);
}

function checkInput(input, errorMsg) {
  const inputContainer = input.parentNode;
  const inputValue = input.value;
  const inputCategory = input.placeholder;

  if (inputValue == "") {
    //add &&condtion that span will be added only once..
    //ooops.... outline css dissappered..
    // how to add img to input?? so that placeholder text will be dissapeard?
    //const errorIcon = document.createElement("img");
    //errorIcon.src = "./images/icon-error.svg"
    //inputValue = errorIcon;
    const span = document.createElement("span");
    span.setAttribute("class", "is-error");
    span.innerText = `${inputCategory} cannot be empty`;
    inputContainer.appendChild(span); // maybe api that delete the previous sibling node before append???
    input.style.outline = "2px solid var(--color-Red)";
    errorMsg === 1;
    console.log(input, errorMsg); // think how to use variable to all the inputs...
    //global scope let variable.. changed to true at the end of fuction.. but did not changed in the global scope?
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
