/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-footer.js":
/*!***************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-footer.js ***!
  \***************************************************************************************/
/***/ ((module) => {

function inputFooter() {
  let emailInput = document.querySelector("[name=email-footer]");

  let btnInput = document.querySelector(".input-btn");

  let loader = document.querySelector(".loader-footer");

  let backdropLoader = document.querySelector(".backdrop-loader");

  let backdropMessage = document.querySelector(".backdrop-message");

  function messageForUser(display, text) {
    let msgBlock = document.querySelector(".message-footer");
    msgBlock.innerHTML = text;
    msgBlock.style.display = display;
    backdropMessage.style.display = "block";

    setTimeout(() => {
      backdropMessage.style.display = "none";
      msgBlock.style.display = "none";
    }, 3500);
  }

  function validateEmail(inputValue) {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (pattern.test(inputValue)) {
      return true;
    } else {
      return false;
    }
  }

  async function postData(obj) {
    loader.style.display = "block";
    backdropLoader.style.display = "block";

    await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          emailInput.classList.remove("red-border");
          emailInput.value = "";

          loader.style.display = "none";
          backdropLoader.style.display = "none";

          messageForUser("block", "We send all info on your email");
        }

        if (!response.ok) {
          messageForUser("block", "Error query! Try later");
          backdropLoader.style.display = "none";
          loader.style.display = "none";
          emailInput.classList.remove("red-border");
        }
      })
      .catch((error) => {
        messageForUser("block", error);
      });
  }

  btnInput.addEventListener("click", async (e) => {
    e.preventDefault();

    let obj = {
      email: emailInput.value,
    };

    if (validateEmail(emailInput.value) === true && emailInput !== "") {
      postData(obj);
    } else if (emailInput.value === "") {
      messageForUser("block", "Enter email field");
      emailInput.classList.add("red-border");
      backdropLoader.style.display = "none";
      loader.style.display = "none";
    } else {
      messageForUser("block", "Enter truthy email");
      emailInput.classList.add("red-border");
      backdropLoader.style.display = "none";
      loader.style.display = "none";
    }
  });
}

module.exports = inputFooter;

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
/*!**************************************************************************************************!*\
  !*** ./Users/Александр/OneDrive/Робочий стіл/recovery version/js/entryWebPack/getFooterInput.js ***!
  \**************************************************************************************************/
const inputFooter = __webpack_require__(/*! ../get-input-footer */ "./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-footer.js");

inputFooter();
})();

/******/ })()
;
//# sourceMappingURL=footer_input.bundle.js.map