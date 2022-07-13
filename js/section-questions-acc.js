const accordionBlock = document.querySelector('.accordion');
const accordionItems = document.querySelectorAll('.accordion__item');
const accordionItem = document.querySelectorAll(
  '.accordion__item_wrapper-header'
);
// const body = document.querySelectorAll('.accordion__item_body');

accordionItem.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('accordion__item--active');
  });
});
//..................................
// accordionItems.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     // Отлавливаем элемент в родители на который мы нажали
//     let target = event.target;
    
//     // Проверяем тот ли это элемент который нам нужен
//     if(target.classList.contains('accordion__item--active')) {
//       // for(let i = 0; i < accordionItems.length; i++) {
//       //   // Убираем у других
//       //   accordionItems[i].classList.remove('accordion__item--active');
//       // }
//       // Добавляем тому на который нажали
//     }
//     target.classList.add('accordion__item--active');
//     console.log(target);
//   });
// })

//.............
// accordionItem.forEach((item) => {
//   item.addEventListener('click', () => {
    
//     item.parentElement.classList.toggle('accordion__item--active');
//   });
// });
//....................................................

// accordionItems.forEach((item) => {
//   item.addEventListener('click', (e)=> {
//     if (e.target.classList == 'accordion__item_wrapper-header' ||
//     e.target.classList == 'accordion__item_header') {
//       item.classList.add('accordion__item--active');
//     } else {
//       item.classList.remove('accordion__item--active');
//     }
//   });
// });
//......................................................

// let selectedItem;

// accordionItems.forEach((item) => {
//   item.addEventListener = function(e) {
//     let target = e.target;

//     while (target != this) {
//       if (target.classList == 'accordion__item_wrapper-header' || 
//       target.classList == 'accordion__item_header') {
//         active(item);
//         return;
//       }
//       target = target.parentNode;
//     }
//   };
// });

// function active(node) {
//   if (selectedItem) {
//     selectedItem.classList.remove('accordion__item--active');
//   }
//   selectedItem = node;
//   selectedItem.classList.add('accordion__item--active');
// }


//...............................................
// accordionBlock.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList == 'accordion__item_wrapper-header') {
//       target.classList.add('accordion__item--active');
//   };
//   if (target.classList == 'accordion__item--active') {
//     accordionItems.classList.remove('accordion__item--active');
//   }
// });

//..............
// accordionBlock.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList == 'accordion__item_wrapper-header') {
//     accordionItems.forEach((item) => {
//       item.classList.add('accordion__item--active')
//     });
//   };
//   if (target.classList == 'accordion__item--active') {
//     accordionItems.classList.remove('accordion__item--active');
//   }
// });

//......................................................
// accordionItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     if (
//       e.target.classList == 'accordion__item_wrapper-header' ||
//       e.target.classList == 'accordion__item_header'
//     ) {
//       item.classList.toggle('accordion__item--active');
//     } 
//     if (!e.target.classList) {
//       item.classList.remove('accordion__item--active');
//     }
//     //  else {
//     //   item.classList.remove('accordion__item--active');
//     // }
//   });
// });

//....................................................
// accordionItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     if (
//       (e.target &&
//         e.target.classList.contains('accordion__item_wrapper-header')) ||
//       (e.target && e.target.classList.contains('accordion__item_header'))
//     ) {
//       item.classList.add('accordion__item--active');
//     } else {
//       item.classList.remove('accordion__item--active');
//     }
//   });
// });
//.......................................................

// let selected;

// accordionBlock.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList != 'accordion__item_wrapper-header') return;
//   active(target);
// });

// function active(item) {
//   if (selected) {
//     selected.classList.remove('active');
//   }
//   selected = 'accordion__item_wrapper-header';
//   selected.classList.add('accordion__item--active');
// }
