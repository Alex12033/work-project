let form = document.querySelector("form");
let btn = document.querySelector(".confirm-button");
let loader = document.querySelector(".loader-form");
let msgAfterSignUp = document.querySelector(".msg-after-registration");

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

  btn.classList.add("disabled-button");
  btn.setAttribute("disabled", "disabled");

  setTimeout(() => {
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    input.classList.remove("error-input");

    btn.removeAttribute("disabled", "disabled");
    btn.classList.remove("disabled-button");
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
    accumulateErrorValidation.confirmPassword = false;
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
  //"https://work-project-62855.web.app/js/registration/server/data-from-client.js/login"
  await fetch(
    "http://localhost:3000/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((response) => {
    if (!response.ok) {
      console.log(response, "skdjnvksjdvkjsbn");
    }

    if (response.ok) {
      loader.classList.add("hide-loader");
      msgAfterSignUp.style.display = "block";
      setTimeout(() => {
        //https://work-project-62855.web.app/index.html
        window.location.href = "C:/Users/Александр/OneDrive/Робочий стіл/work-project/index.html";
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
});
