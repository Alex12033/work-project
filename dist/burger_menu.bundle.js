/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/burger-menu.js":
/*!**********************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/burger-menu.js ***!
  \**********************************************************************************/
/***/ ((module) => {

function burgerMenu() {
  const burgerBtn = document.querySelector(".toggle-button");
  const mobileNav = document.querySelector(".mobile-nav");
  const closedMobileNav = document.querySelector(".mobile-nav__close");

  burgerBtn.addEventListener("click", () => {
    mobileNav.style.display = "flex";
  });

  closedMobileNav.addEventListener("click", () => {
    mobileNav.classList.add("hide-back");
    setTimeout(() => {
      mobileNav.classList.remove("hide-back");
      mobileNav.style.display = "none";
    }, 1000);
  });
}

module.exports = burgerMenu;


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
/*!**********************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/entryWebPack/burgerMenu.js ***!
  \**********************************************************************************************/
const burgerMenu = __webpack_require__(/*! ../burger-menu */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/burger-menu.js");

burgerMenu();
})();

/******/ })()
;
//# sourceMappingURL=burger_menu.bundle.js.map