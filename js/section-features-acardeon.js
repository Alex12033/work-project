"use strict";

let featuresBlock = document.querySelector(".features-left");

let gameImg = document.querySelector(".features-left .game-selection img");
let browseImg = document.querySelector(".features-left .browse-solution img");
let practiceImg = document.querySelector(".features-left .practice-mode img");

let gameDescription = document.querySelector(".game-selection__description");
let practicedDescription = document.querySelector(
  ".practice-mode__description"
);
let browseDescription = document.querySelector(".browse-solution__description");

featuresBlock.addEventListener("click", (event) => {
  if (
    event.target.className === "game-selection__title" ||
    event.target.className === "game-selection__title title" ||
    event.target.className === "game-selection"
  ) {
    gameDescription.classList.toggle("smoothy");

    gameImg.classList.add("background-img");

    browseImg.classList.remove("background-img");
    practiceImg.classList.remove("background-img");

    browseDescription.classList.remove("smoothy");
    practicedDescription.classList.remove("smoothy");
  }

  if (
    event.target.className === "browse-solution__title" ||
    event.target.className === "browse-solution__title title" ||
    event.target.className === "browse-solution"
  ) {
    browseDescription.classList.toggle("smoothy");

    browseImg.classList.add("background-img");

    gameImg.classList.remove("background-img");
    practiceImg.classList.remove("background-img");

    gameDescription.classList.remove("smoothy");
    practicedDescription.classList.remove("smoothy");
  }

  if (
    event.target.className === "practice-mode__title" ||
    event.target.className === "practice-mode__title title" ||
    event.target.className === "practice-mode"
  ) {
    practicedDescription.classList.toggle("smoothy");

    practiceImg.classList.add("background-img");

    gameImg.classList.remove("background-img");
    browseImg.classList.remove("background-img");

    browseDescription.classList.remove("smoothy");
    gameDescription.classList.remove("smoothy");
  }
});
