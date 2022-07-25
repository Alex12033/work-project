let startFreeBtn = document.querySelector(".main-nav__item--start a");

let authBtn = document.querySelector(".main-nav__item--sign a");

startFreeBtn.innerHTML = localStorage.getItem('logged') ? `Hi ${localStorage.getItem('user')}` : "Start Free";

authBtn.innerHTML = localStorage.getItem('logged') ? "Logout" : "Sign In";

authBtn.addEventListener('click', () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
});