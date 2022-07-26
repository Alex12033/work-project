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
  isRegistered: false,
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

  if (data["phone"] !== false && pattern.test(data["phone"])) {
    accumulateErrorValidation.phone = true;
  } else {
    accumulateErrorValidation.phone = false;
    displayErrorMsg("block", "phone", " Please enter correct phone ");
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
    data["confirmPassword"] !== false &&
    data["password"] === data["confirmPassword"]
  ) {
    accumulateErrorValidation.password = true;
    accumulateErrorValidation.confirmPassword = true;
  } else {
    accumulateErrorValidation.password = false;
    accumulateErrorValidation.confirmPassword = false;
    displayErrorMsg(
      "block",
      "confirmPassword",
      "PLease enter the same password"
    );
  }
}

async function postData(data) {
  btn.classList.add("disabled-button");
  loader.style.display = "block";
  //http://localhost:3000/login
  //https://work-project-62855.web.app/js/registration/server/server.js/login
  const response = await fetch(
    "https://62cddbfda43bf780085fe7b3.mockapi.io/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((response) => {
    if (!response.ok) {
      alert("Bad request ", response.status, response.statusText);

      loader.classList.add("hide-loader");
      btn.classList.remove("disabled-button");
      return;
    }

    if (response.ok) {
      loader.classList.add("hide-loader");
      msgAfterSignUp.style.display = "block";

      setTimeout(() => {
        window.location.href =
          "https://work-project-62855.web.app/pages/form-registration/login/index.html";
      }, 2000);
    }
  });
}

async function isRegisteredChecker(inputEmail) {
  let users = [];
  let flag = false;

  await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/login")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      users = data;
      
      
      users.map((user) => { 
        if (user["email"] === inputEmail && user["email"] != false) {
          console.log(user["email"], inputEmail, "the same");
          accumulateErrorValidation.isRegistered = false;
          flag = true;
        } else {
          console.log(user["email"], inputEmail, "not same");
          flag = false;
          accumulateErrorValidation.isRegistered = true;
        }
      });
    });
  flag && displayErrorMsg("block", "email", "This email already use !");
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll("input");
  var valuesInput = {};

  fields.forEach((field) => {
    const { name, value } = field;

    valuesInput[name] = value == "" ? false : value; //if input empty we save false in object else we save value of input
  });

  isRegisteredChecker(valuesInput["email"]);
  validateEmptyInput(valuesInput);
  validatePhoneNumber(valuesInput);
  validateEmail(valuesInput);
  validatePassword(valuesInput);

  //if validate successfull then post data on server
  if (
    valuesInput["name"] != false &&
    valuesInput["surName"] != false &&
    valuesInput["phone"] != false &&
    accumulateErrorValidation.phone == true &&
    valuesInput["email"] != false &&
    accumulateErrorValidation.email == true &&
    valuesInput["password"] != false &&
    accumulateErrorValidation.password == true &&
    valuesInput["confirmPassword"] != false &&
    accumulateErrorValidation.confirmPassword == true &&
    accumulateErrorValidation.isRegistered == true
  ) {
    console.log(accumulateErrorValidation.isRegistered);
    postData(valuesInput);
  } else {
    console.log(accumulateErrorValidation);
  }
});
