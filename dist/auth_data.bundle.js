/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-auth-data.js":
/*!************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-auth-data.js ***!
  \************************************************************************************/
/***/ ((module) => {

function authData() {
  let startFreeBtn = document.querySelector(".main-nav__item--start a");
  let mobileFreeBtn = document.querySelector(".mobile-nav__item--btns-start a");

  let authBtn = document.querySelector(".main-nav__item--sign a");
  let mobileAuthBtn = document.querySelector(".mobile-nav__item--btns-sign a");

  startFreeBtn.innerHTML = localStorage.getItem("logged")
    ? `Hi ${localStorage.getItem("user")}`
    : "Start Free";
  mobileFreeBtn.innerHTML = localStorage.getItem("logged")
    ? `Hi ${localStorage.getItem("user")}`
    : "Start Free";

  authBtn.innerHTML = localStorage.getItem("logged") ? "Logout" : "Sign In";
  mobileAuthBtn.innerHTML = localStorage.getItem("logged")
    ? "Logout"
    : "Sign In";

  authBtn.addEventListener("click", () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("user");
  });

  mobileAuthBtn.addEventListener("click", () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("user");
  });
}

module.exports = authData;

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
/*!********************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/entryWebPack/authData.js ***!
  \********************************************************************************************/
const authData = __webpack_require__(/*! ../get-auth-data */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-auth-data.js");

authData();
})();

/******/ })()
;
//# sourceMappingURL=auth_data.bundle.js.map