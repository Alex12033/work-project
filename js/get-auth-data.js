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