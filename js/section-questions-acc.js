const accordionBlock = document.querySelector('.accordion');
const accordionItems = document.querySelectorAll('.accordion__item');
const accordionItem = document.querySelectorAll(
  '.accordion__item_wrapper-header'
);

accordionItem.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('accordion__item--active');
  });
});
