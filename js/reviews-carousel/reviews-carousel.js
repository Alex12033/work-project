//slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("parag");
  let dots = document.getElementsByClassName("noguma-pomoki-kadra");
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
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
const parag = document.querySelectorAll('.parag');

parag.forEach(() => {
  addEventListener('touchstart', handleTouchStart, false);
});
parag.forEach(() => {
addEventListener('touchmove', handleTouchMove, false);
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

let xDiff = x2 -x1;
let yDiff = y2 - y1;

if (Math.abs(xDiff) > Math.abs(yDiff)) {
  if (xDiff > 0) {
    plusSlide();
  } else {
    minusSlide();
  }
}
x1 = null;
y1 = null;
}

// const slides = document.querySelectorAll(".reviews-client__slide"),
//   prev = document.querySelector(".reviews-client__nav--left"),
//   next = document.querySelector(".reviews-client__nav--right"),
//   total = document.querySelector("#total"),
//   current = document.querySelector("#current");
//   slidesWrapper = document.querySelector(".reviews-client__wrapper"),
//   slidesField = document.querySelector(".reviews-client__inner");
//   let width = window.getComputedStyle(slidesWrapper).width; ;

//   window.addEventListener('resize', () => {
//   width = window.getComputedStyle(slidesWrapper).width;
//   console.log(width);
//   })

// let slideIndex = 1;
// let offset = 0;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + "%";
// slidesField.style.display = "flex";
// slidesField.style.transition = "0.5s all";

// slidesWrapper.style.overflow = "hidden";

// slides.forEach(slide => {
//   slide.style.width = width;
// });

// next.addEventListener('click', () => {
//   const width = window.getComputedStyle(slidesWrapper).width;
//   if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
//       offset = 0;
//   } else {
//     offset += +width.slice(0, width.length - 2);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == slides.length) {
//       slideIndex = 1;
//   } else {
//     slideIndex++;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// });

// prev.addEventListener('click', () => {
//   const width = window.getComputedStyle(slidesWrapper).width;
//   if (offset == 0){
//       offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//   } else {
//     offset -= +width.slice(0, width.length - 2);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == 1) {
//       slideIndex = slides.length;
//   } else {
//     slideIndex--;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// });

// showSlides(slideIndex);
// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(n) {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach((item) => (item.style.display = "none"));

//   slides[slideIndex - 1].style.display = "block";

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// }

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// prev.addEventListener("click", () => {
//   plusSlides(-1);
// });

// next.addEventListener("click", () => {
//   plusSlides(1);
// });
