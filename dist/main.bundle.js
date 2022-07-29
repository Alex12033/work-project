/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-modal.js":
/*!**************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-modal.js ***!
  \**************************************************************************************/
/***/ ((module) => {

function getInputModal() {
  let nameInput = document.querySelector("[name=name-modal]");

  let phoneInput = document.querySelector("[name=phone-modal]");

  let btnModal = document.querySelector(".modal__btn");

  let loaderModal = document.querySelector(".modal__loader");

  let backdropLoaderModal = document.querySelector(".modal__backdrop-loader");

  let backdropMessageModal = document.querySelector(".modal__backdrop-message");

  function messageForUserModal(display, text) {
    let msgBlock = document.querySelector(".modal__message");
    msgBlock.innerHTML = text;
    msgBlock.style.display = display;

    setTimeout(() => {
      backdropMessageModal.style.display = "none";
      msgBlock.style.display = "none";
    }, 3500);
  }

  function validatePhoneNumber(data) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (data !== "" && pattern.test(data)) {
      return true;
    } else {
      return false;
    }
  }

  async function postDataModal(data) {
    await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          backdropLoaderModal.style.display = "none";
          loaderModal.style.display = "none";
          nameInput.classList.remove("red");
          phoneInput.classList.remove("red");
          nameInput.value = "";
          phoneInput.value = "";
          backdropMessageModal.style.display = "block";
          messageForUserModal("block", "We will call you back!");
        }

        if (!response.ok) {
          backdropMessageModal.style.display = "block";
          messageForUserModal("block", "Error query! Try later");
          backdropLoaderModal.style.display = "none";
          loaderModal.style.display = "none";
          nameInput.classList.remove("red");
          phoneInput.classList.remove("red");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  btnModal.addEventListener("click", async (e) => {
    e.preventDefault();
    backdropLoaderModal.style.display = "block";
    loaderModal.style.display = "block";

    let obj = {
      name: nameInput.value,
      phone: phoneInput.value,
    };

    if (
      /[0-9]/.test(nameInput.value) !== true &&
      validatePhoneNumber(obj.phone) === true
    ) {
      postDataModal(obj);
      console.log(/[0-9]/.test(nameInput.value));
    } else if (nameInput.value === "" || phoneInput.value === "") {
      backdropMessageModal.style.display = "block";
      messageForUserModal("block", "Enter name or phone field");
      nameInput.classList.add("red");
      phoneInput.classList.add("red");
      backdropLoaderModal.style.display = "none";
      loaderModal.style.display = "none";
    } else if (/[0-9]/.test(nameInput.value)) {
      backdropMessageModal.style.display = "block";
      messageForUserModal("block", "Enter name without digits");
      nameInput.classList.add("red");
      backdropLoaderModal.style.display = "none";
      loaderModal.style.display = "none";
    } else {
      backdropMessageModal.style.display = "block";
      messageForUserModal("block", "Enter right phone field");
      nameInput.classList.add("red");
      phoneInput.classList.add("red");
      backdropLoaderModal.style.display = "none";
      loaderModal.style.display = "none";
    }
  });
}

module.exports = getInputModal;


/***/ }),

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-timer.js":
/*!**********************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-timer.js ***!
  \**********************************************************************************/
/***/ ((module) => {

function timer() {
  const deadLine = "2022-08-10";

  function getTimeRemaning(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      total: t,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaning(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);
}

module.exports = timer;

/***/ }),

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-window/modal.js":
/*!*****************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-window/modal.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

function modal() {
  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide"); // modal.classList.toggle('show'); Альтернативный вариант вывода модалки без скроллинга
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show"); // modal.classList.toggle('show'); Альтернативный вариант вывода модалки без скроллинга
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimeId = setTimeout(openModal, 3000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //CONTACT US

  const contactUs = document.querySelector(".contact-us");

  contactUs.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimeId);
  });
}

module.exports = modal;

/***/ }),

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/reviews-carousel/reviews-carousel.js":
/*!********************************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/reviews-carousel/reviews-carousel.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let dotsSlider = document.querySelectorAll(".uneizmen-akemada");

function mainSlider() {
  let slideIndex = 1;
  showSlides(slideIndex);

  next.addEventListener('click', () => {
    showSlides((slideIndex += 1));
  });

  prev.addEventListener('click', () => {
    showSlides((slideIndex -= 1));
  });

  dotsSlider.forEach(dot => {
    dot.addEventListener('click', (event) => {
      showSlides((slideIndex = event.target.id));
    });
  })

  // function currentSlide(n) {
  //   
  // }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("parag");
    let dots = document.getElementsByClassName("noguma-pomoki-kadra");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("deystvuyus", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " deystvuyus";
  }

  //                  Mobile SWIPE
  const parag = document.querySelectorAll(".parag");

  parag.forEach(() => {
    addEventListener("touchstart", handleTouchStart, false);
  });
  parag.forEach(() => {
    addEventListener("touchmove", handleTouchMove, false);
  });

  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    const firstToush = event.touches[0];
    x1 = firstToush.clientX;
    y1 = firstToush.clientY;
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    // console.log(x2, y2);

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        showSlides((slideIndex += 1));
      } else {
        showSlides((slideIndex -= 1));
      }
    }
    x1 = null;
    y1 = null;
  }
}

module.exports = mainSlider;


/***/ }),

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-features-acardeon.js":
/*!************************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-features-acardeon.js ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";


function sectionFeaturesQuestion() {
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
      querySelectorHelper(".game-selection__description").classList.toggle(
        "smoothy"
      );

      querySelectorHelper(".features-left .game-selection img").classList.add(
        "background-img"
      );

      querySelectorHelper(
        ".features-left .browse-solution img"
      ).classList.remove("background-img");
      querySelectorHelper(".features-left .practice-mode img").classList.remove(
        "background-img"
      );

      querySelectorHelper(".browse-solution__description").classList.remove(
        "smoothy"
      );
      querySelectorHelper(".practice-mode__description").classList.remove(
        "smoothy"
      );
    }

    if (
      event.target.className === "browse-solution__title" ||
      event.target.className === "browse-solution__title title" ||
      event.target.className === "browse-solution" ||
      event.target.className === "browse-img background-img" ||
      event.target.className === "browse-img"
    ) {
      querySelectorHelper(".browse-solution__description").classList.toggle(
        "smoothy"
      );

      querySelectorHelper(".features-left .browse-solution img").classList.add(
        "background-img"
      );

      querySelectorHelper(
        ".features-left .game-selection img"
      ).classList.remove("background-img");
      querySelectorHelper(".features-left .practice-mode img").classList.remove(
        "background-img"
      );

      querySelectorHelper(".game-selection__description").classList.remove(
        "smoothy"
      );
      querySelectorHelper(".practice-mode__description").classList.remove(
        "smoothy"
      );
    }

    if (
      event.target.className === "practice-mode__title" ||
      event.target.className === "practice-mode__title title" ||
      event.target.className === "practice-mode" ||
      event.target.className === "practice-img background-img" ||
      event.target.className === "practice-img"
    ) {
      querySelectorHelper(".practice-mode__description").classList.toggle(
        "smoothy"
      );

      querySelectorHelper(".features-left .practice-mode img").classList.add(
        "background-img"
      );

      querySelectorHelper(
        ".features-left .game-selection img"
      ).classList.remove("background-img");
      querySelectorHelper(
        ".features-left .browse-solution img"
      ).classList.remove("background-img");

      querySelectorHelper(".browse-solution__description").classList.remove(
        "smoothy"
      );
      querySelectorHelper(".game-selection__description").classList.remove(
        "smoothy"
      );
    }
  });
}

module.exports = sectionFeaturesQuestion;

/***/ }),

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-questions-acc.js":
/*!********************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-questions-acc.js ***!
  \********************************************************************************************/
/***/ ((module) => {

function sectioQuestion() {
  let acc = document.querySelector(".accordion");

  let selectedItem;

  acc.addEventListener("click", function (event) {
    let target = event.target;

    while (target != this) {
      if (target.classList == "accordion__item") {
        active(target);
        return;
      }
      removeClass(target);
      target = target.parentNode;
    }
  });

  function active(node) {
    if (selectedItem) {
      selectedItem.classList.remove("accordion__item--active");
    }
    selectedItem = node;
    selectedItem.classList.add("accordion__item--active");
  }

  function removeClass(node) {
    if (selectedItem == node) {
      selectedItem.classList.remove("accordion__item--active");
    }
  }
}

module.exports = sectioQuestion;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/entryWebPack/main.js ***!
  \****************************************************************************************/
const sectioQuestion = __webpack_require__(/*! ../section-questions-acc */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-questions-acc.js"),
sectioFeaturesQuestion = __webpack_require__(/*! ../section-features-acardeon */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-features-acardeon.js"),
timer = __webpack_require__(/*! ../modal-timer */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-timer.js"),
modalWindow = __webpack_require__(/*! ../modal-window/modal */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-window/modal.js"),
getInputModal = __webpack_require__(/*! ../get-input-modal */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-modal.js"),
mainSlider = __webpack_require__(/*! ../reviews-carousel/reviews-carousel */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/reviews-carousel/reviews-carousel.js");


mainSlider();
getInputModal();
modalWindow();
timer();
sectioFeaturesQuestion();
sectioQuestion();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map