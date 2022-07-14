"use strict";

function querySelectorHelper(selector) {
  return document.querySelector(selector);
}

querySelectorHelper(".features-left").addEventListener("click", (event) => {
  if (
    event.target.className === "game-selection__title" ||
    event.target.className === "game-selection__title title" ||
    event.target.className === "game-selection" ||
    event.target.className === "features-img background-img" ||
    event.target.className === "features-img"

  ) {
    querySelectorHelper(".game-selection__description").classList.toggle("smoothy");

    querySelectorHelper(".features-left .game-selection img").classList.add("background-img");

    querySelectorHelper(".features-left .browse-solution img").classList.remove("background-img");
    querySelectorHelper(".features-left .practice-mode img").classList.remove("background-img");

    querySelectorHelper(".browse-solution__description").classList.remove("smoothy");
    querySelectorHelper(".practice-mode__description").classList.remove("smoothy");
  }

  if (
    event.target.className === "browse-solution__title" ||
    event.target.className === "browse-solution__title title" ||
    event.target.className === "browse-solution" ||
    event.target.className === "browse-img background-img" ||
    event.target.className === "browse-img"
  ) {
    querySelectorHelper(".browse-solution__description").classList.toggle("smoothy");

    querySelectorHelper(".features-left .browse-solution img").classList.add("background-img");

    querySelectorHelper(".features-left .game-selection img").classList.remove("background-img");
    querySelectorHelper(".features-left .practice-mode img").classList.remove("background-img");

    querySelectorHelper(".game-selection__description").classList.remove("smoothy");
    querySelectorHelper(".practice-mode__description").classList.remove("smoothy");
  }

  if (
    event.target.className === "practice-mode__title" ||
    event.target.className === "practice-mode__title title" ||
    event.target.className === "practice-mode" || 
    event.target.className === "practice-img background-img" ||
    event.target.className === "practice-img"
  ) {
    querySelectorHelper(".practice-mode__description").classList.toggle("smoothy");

    querySelectorHelper(".features-left .practice-mode img").classList.add("background-img");

    querySelectorHelper(".features-left .game-selection img").classList.remove("background-img");
    querySelectorHelper(".features-left .browse-solution img").classList.remove("background-img");

    querySelectorHelper(".browse-solution__description").classList.remove("smoothy");
    querySelectorHelper(".game-selection__description").classList.remove("smoothy");
  }
});