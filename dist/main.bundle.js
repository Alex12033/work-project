/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var e={"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-modal.js":e=>{e.exports=function(){let e=document.querySelector("[name=name-modal]"),t=document.querySelector("[name=phone-modal]"),s=document.querySelector(".modal__btn"),o=document.querySelector(".modal__loader"),r=document.querySelector(".modal__backdrop-loader"),a=document.querySelector(".modal__backdrop-message");function c(e,t){let s=document.querySelector(".modal__message");s.innerHTML=t,s.style.display=e,setTimeout((()=>{a.style.display="none",s.style.display="none"}),3500)}s.addEventListener("click",(async s=>{s.preventDefault(),r.style.display="block",o.style.display="block";let n={name:e.value,phone:t.value};var i;!0!==/[0-9]/.test(e.value)&&!0==!(""===(i=n.phone)||!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(i))?(!async function(s){await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((s=>{s.ok&&(r.style.display="none",o.style.display="none",e.classList.remove("red"),t.classList.remove("red"),e.value="",t.value="",a.style.display="block",c("block","We will call you back!")),s.ok||(a.style.display="block",c("block","Error query! Try later"),r.style.display="none",o.style.display="none",e.classList.remove("red"),t.classList.remove("red"))})).catch((e=>{console.log(e)}))}(n),console.log(/[0-9]/.test(e.value))):""===e.value||""===t.value?(a.style.display="block",c("block","Enter name or phone field"),e.classList.add("red"),t.classList.add("red"),r.style.display="none",o.style.display="none"):/[0-9]/.test(e.value)?(a.style.display="block",c("block","Enter name without digits"),e.classList.add("red"),r.style.display="none",o.style.display="none"):(a.style.display="block",c("block","Enter right phone field"),e.classList.add("red"),t.classList.add("red"),r.style.display="none",o.style.display="none")}))}},"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-timer.js":e=>{e.exports=function(){function e(e){return e>=0&&e<10?`0${e}`:e}!function(t,s){const o=document.querySelector(t),r=o.querySelector("#days"),a=o.querySelector("#hours"),c=o.querySelector("#minutes"),n=o.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const t=function(e){const t=Date.parse(e)-Date.parse(new Date);return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60),total:t}}(s);r.innerHTML=e(t.days),a.innerHTML=e(t.hours),c.innerHTML=e(t.minutes),n.innerHTML=e(t.seconds),t.total<=0&&clearInterval(i)}l()}(".timer","2022-08-10")}},"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-window/modal.js":e=>{e.exports=function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function s(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(r)}function o(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}e.forEach((e=>{e.addEventListener("click",s)})),t.addEventListener("click",(e=>{e.target!==t&&""!=e.target.getAttribute("data-close")||o()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t.classList.contains("show")&&o()}));const r=setTimeout(s,3e3);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(s(),window.removeEventListener("scroll",e))})),document.querySelector(".contact-us").addEventListener("click",(()=>{t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(r)}))}},"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/reviews-carousel/reviews-carousel.js":e=>{let t=document.querySelector(".next"),s=document.querySelector(".prev"),o=document.querySelectorAll(".uneizmen-akemada");e.exports=function(){let e=1;function r(t){let s,o=document.getElementsByClassName("parag"),r=document.getElementsByClassName("noguma-pomoki-kadra");for(t>o.length&&(e=1),t<1&&(e=o.length),s=0;s<o.length;s++)o[s].style.display="none";for(s=0;s<r.length;s++)r[s].className=r[s].className.replace("deystvuyus","");o[e-1].style.display="block",r[e-1].className+=" deystvuyus"}r(e),t.addEventListener("click",(()=>{r(e+=1)})),s.addEventListener("click",(()=>{r(e-=1)})),o.forEach((t=>{t.addEventListener("click",(t=>{r(e=t.target.id)}))}));const a=document.querySelectorAll(".parag");a.forEach((()=>{addEventListener("touchstart",i,!1)})),a.forEach((()=>{addEventListener("touchmove",l,!1)}));let c=null,n=null;function i(e){const t=e.touches[0];c=t.clientX,n=t.clientY}function l(t){if(!c||!n)return!1;let s=t.touches[0].clientX,o=t.touches[0].clientY,a=s-c,i=o-n;Math.abs(a)>Math.abs(i)&&r(a>0?e+=1:e-=1),c=null,n=null}}},"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-features-acardeon.js":e=>{"use strict";e.exports=function(){function e(e){return document.querySelector(e)}e(".features-left").addEventListener("click",(t=>{"game-selection__title"!==t.target.className&&"game-selection__title title"!==t.target.className&&"game-selection"!==t.target.className&&"features-img background-img"!==t.target.className&&"features-img"!==t.target.className||(e(".game-selection__description").classList.toggle("smoothy"),e(".features-left .game-selection img").classList.add("background-img"),e(".features-left .browse-solution img").classList.remove("background-img"),e(".features-left .practice-mode img").classList.remove("background-img"),e(".browse-solution__description").classList.remove("smoothy"),e(".practice-mode__description").classList.remove("smoothy")),"browse-solution__title"!==t.target.className&&"browse-solution__title title"!==t.target.className&&"browse-solution"!==t.target.className&&"browse-img background-img"!==t.target.className&&"browse-img"!==t.target.className||(e(".browse-solution__description").classList.toggle("smoothy"),e(".features-left .browse-solution img").classList.add("background-img"),e(".features-left .game-selection img").classList.remove("background-img"),e(".features-left .practice-mode img").classList.remove("background-img"),e(".game-selection__description").classList.remove("smoothy"),e(".practice-mode__description").classList.remove("smoothy")),"practice-mode__title"!==t.target.className&&"practice-mode__title title"!==t.target.className&&"practice-mode"!==t.target.className&&"practice-img background-img"!==t.target.className&&"practice-img"!==t.target.className||(e(".practice-mode__description").classList.toggle("smoothy"),e(".features-left .practice-mode img").classList.add("background-img"),e(".features-left .game-selection img").classList.remove("background-img"),e(".features-left .browse-solution img").classList.remove("background-img"),e(".browse-solution__description").classList.remove("smoothy"),e(".game-selection__description").classList.remove("smoothy"))}))}},"./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-questions-acc.js":e=>{e.exports=function(){let e;function t(t){e&&e.classList.remove("accordion__item--active"),e=t,e.classList.add("accordion__item--active")}function s(t){e==t&&e.classList.remove("accordion__item--active")}document.querySelector(".accordion").addEventListener("click",(function(e){let o=e.target;for(;o!=this;){if("accordion__item"==o.classList)return void t(o);s(o),o=o.parentNode}}))}}},t={};function s(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}(()=>{const e=s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-questions-acc.js"),t=s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/section-features-acardeon.js"),o=s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-timer.js"),r=s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/modal-window/modal.js"),a=s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/get-input-modal.js");s("./Users/Александр/OneDrive/Робочий стіл/recovery version/js/reviews-carousel/reviews-carousel.js")(),a(),r(),o(),t(),e()})()})();
//# sourceMappingURL=main.bundle.js.map