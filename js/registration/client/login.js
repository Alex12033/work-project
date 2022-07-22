"use strict";
let input = document.querySelectorAll("input");

let btn = document.querySelector(".confirm-button");

let msgAfterLogin;

let users;

function isRegistered(users = [], login) {
  console.log(login);
  console.log(users);
  const res = users.filter((user) => {
    if (user["email"] === login["email"]) {
      alert('correct email');
    }

    if (user["password"] === login["password"]) {
      alert('correct password');
    }

    if (user["confirmPassword"] === login["confirmPassword"]) {
      alert('correct confirm');
    }
  });
  console.log(res);
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let input = document.querySelectorAll("input");
  const valueInput = {};

  input.forEach((input) => {
    const { name, value } = input;
    valueInput[name] = value === "" ? alert("Enter each field") : value;
  });

  let response = await fetch("http://localhost:3000/users");

  if (response.ok) {
    users = await response.json();
    isRegistered(users, valueInput); //users from db
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
});
