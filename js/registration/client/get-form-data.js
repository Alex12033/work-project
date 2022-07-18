let form = document.querySelector("form");
let btn = document.querySelector(".confirm-button");
let loader = document.querySelector(".loader-form");

const accumulateErrorValidation = {
  //this object gets flag true in each field after succssesfull validation each input
  phone: false,
  email: false,
  password: false,
  confirmPassword: false,
};

function displayErrorMsg(display, elem, msg = "") {
  let errorDiv = document.querySelector(".error-msg");

  let input = document.querySelector(`[name=${elem}]`);
  input.classList.add("error-input");

  errorDiv.style.display = display; //defolt in css display:none

  errorDiv.innerHTML += `${msg} <br>`;

  setTimeout(() => {
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    input.classList.remove("error-input");
  }, 4000);
}

function validateEmptyInput(data) {
  for (elem in data) {
    //validation empty fields
    if (data[elem] == false) {
      displayErrorMsg("block", elem, ` Please enter ${elem} fields `);
    }
  }
}

function validatePhoneNumber(data) {
  let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (data["phone-number"] !== false && pattern.test(data["phone-number"])) {
    accumulateErrorValidation.phone = true;
  } else {
    accumulateErrorValidation.phone = false;
    displayErrorMsg("block", "phone-number", " Please enter correct phone ");
  }
}

function validateEmail(data) {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (pattern.test(data["email"])) {
    accumulateErrorValidation.email = true;
  } else {
    accumulateErrorValidation.email = false;
    displayErrorMsg("block", "email", " Please enter correct email ");
  }
}

function validatePassword(data) {
  if (
    data["password"] !== false &&
    data["confirm-password"] !== false &&
    data["password"] === data["confirm-password"]
  ) {
    accumulateErrorValidation.password = true;
    accumulateErrorValidation.confirmPassword = true;
  } else {
    accumulateErrorValidation.password = false;
    accumulateErrorValidation.confirmPassword = false
    displayErrorMsg(
      "block",
      "confirm-password",
      "PLease enter the same password"
    );
  }
}

async function postData(data) {
  btn.classList.add("disabled-button");
  loader.style.display = "block";

  await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) throw new Error(response.statusText);

    if (response.ok) {
      loader.classList.add("hide-loader");
      
      setTimeout(() => {
        window.location.href = "https://work-project-62855.web.app/index.html";
      }, 2000);
    }
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll("input");
  var valuesInput = {};

  fields.forEach((field) => {
    const { name, value } = field;

    valuesInput[name] = value == "" ? false : value; //if input empty we save false in object else we save value of input
  });

  validateEmptyInput(valuesInput);
  validatePhoneNumber(valuesInput);
  validateEmail(valuesInput);
  validatePassword(valuesInput);

  //if validate successfull then post data on server

  if (
    valuesInput["first-name"] != false &&
    valuesInput["last-name"] != false &&
    accumulateErrorValidation.phone == true &&
    accumulateErrorValidation.email == true &&
    accumulateErrorValidation.password == true &&
    accumulateErrorValidation.confirmPassword == true
  ) {
    postData(valuesInput);
  }
  console.log(accumulateErrorValidation);
});