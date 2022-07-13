let acc = document.querySelector('.accordion');

let selectedItem;

acc.onclick = function (event) {
  let target = event.target;

  while (target != this) {
    if (target.classList == 'accordion__item') {
      active(target);
      return;
    }
    target = target.parentNode;
  }
};
function active(node) {
  if (selectedItem) {
    selectedItem.classList.remove('accordion__item--active');
  }
  selectedItem = node;
  selectedItem.classList.add('accordion__item--active');
}


//.................................................

// const accordionBlock = document.querySelector('.accordion');
// const accordionItems = document.querySelectorAll('.accordion__item');
// const accordionItem = document.querySelectorAll(
//   '.accordion__item_wrapper-header'
// );

// accordionItem.forEach((item) => {
//   item.addEventListener('click', () => {
//     item.parentElement.classList.toggle('accordion__item--active');
//   });
// });
