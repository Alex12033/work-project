const burgerBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const closedMobileNav = document.querySelector('.mobile-nav__close');

burgerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
});

closedMobileNav.addEventListener('click', () => {
    mobileNav.classList.add('hide-back');
    setTimeout(() => {
        mobileNav.classList.remove('hide-back');
        mobileNav.style.display = 'none';
    }, 1000);
});


