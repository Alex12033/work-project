"use strict";

let btn = document.querySelector(".confirm-button");

let msgAfterLogin 

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let response = await fetch("http://localhost:3000/users");

  if (response.ok) {
    // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    let json = await response.json();
    console.log(json);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
});
