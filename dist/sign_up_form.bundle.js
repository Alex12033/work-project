(()=>{var e={448:e=>{e.exports=function(){document.querySelector("form");let e=document.querySelector(".confirm-button"),o=document.querySelector(".loader-form"),t=document.querySelector(".msg-after-registration");const s={phone:!1,email:!1,password:!1,confirmPassword:!1,isRegistered:!1};function r(o,t,s=""){let r=document.querySelector(".error-msg"),a=document.querySelector(`[name=${t}]`);a.classList.add("error-input"),r.style.display=o,r.innerHTML+=`${s} <br>`,e.classList.add("disabled-button"),e.setAttribute("disabled","disabled"),setTimeout((()=>{r.style.display="none",r.innerHTML="",a.classList.remove("error-input"),e.removeAttribute("disabled","disabled"),e.classList.remove("disabled-button")}),4e3)}e.addEventListener("click",(a=>{a.preventDefault();const i=document.querySelectorAll("input");var n,l={};i.forEach((e=>{const{name:o,value:t}=e;l[o]=""!=t&&t})),async function(e){let o=[],t=!1;await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/login").then((e=>e.json())).then((r=>{o=r,o.map((o=>{o.email===e&&0!=o.email?(console.log(o.email,e,"the same"),s.isRegistered=!1,t=!0):(console.log(o.email,e,"not same"),t=!1,s.isRegistered=!0)}))})),t&&r("block","email","This email already use !")}(l.email),function(e){for(elem in e)0==e[elem]&&r("block",elem,` Please enter ${elem} fields `)}(l),!1!==(n=l).phone&&/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(n.phone)?s.phone=!0:(s.phone=!1,r("block","phone"," Please enter correct phone ")),function(e){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email)?s.email=!0:(s.email=!1,r("block","email"," Please enter correct email "))}(l),function(e){!1!==e.password&&!1!==e.confirmPassword&&e.password===e.confirmPassword?(s.password=!0,s.confirmPassword=!0):(s.password=!1,s.confirmPassword=!1,r("block","confirmPassword","PLease enter the same password"))}(l),0!=l.name&&0!=l.surName&&0!=l.phone&&1==s.phone&&0!=l.email&&1==s.email&&0!=l.password&&1==s.password&&0!=l.confirmPassword&&1==s.confirmPassword&&1==s.isRegistered?(console.log(s.isRegistered),async function(s){e.classList.add("disabled-button"),o.style.display="block",await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((s=>{if(!s.ok)return alert("Bad request ",s.status,s.statusText),o.classList.add("hide-loader"),void e.classList.remove("disabled-button");s.ok&&(o.classList.add("hide-loader"),t.style.display="block",setTimeout((()=>{window.location.href="https://work-project-62855.web.app/pages/form-registration/login/index.html"}),2e3))}))}(l)):console.log(s)}))}},918:(e,o,t)=>{"use strict";t.r(o)}},o={};function t(s){var r=o[s];if(void 0!==r)return r.exports;var a=o[s]={exports:{}};return e[s](a,a.exports,t),a.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(918);t(448)()})()})();
//# sourceMappingURL=sign_up_form.bundle.js.map