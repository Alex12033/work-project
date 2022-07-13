let form = document.querySelector("form");

function displayErrorMsg(msg, display, elem) {
  let errorDiv = document.querySelector(".error-msg");

  let input = document.querySelector(`[name=${elem}]`);
  input.classList.add("error-input");

  errorDiv.innerHTML = msg;

  errorDiv.style.display = display; //defolt in css display:none

  setTimeout(() => {
    errorDiv.style.display = "none";
    input.classList.remove("error-input");
  }, 3000);
}

function validateForm(data) {
  console.log(data);
  for (elem in data) {
    //validation empty fields
    let pattern = /^\d{10}$/;
    
    if (data[elem] == false) {
      displayErrorMsg("PLease enter each field", "block", elem);
    }
    
    
    if (elem == "phone-number" && pattern.test(data[elem])) {
      console.log("SSKJDBvjksdjkvbkj");
    }
    console.log(elem);

    // //validations number phone
    // if (
    //   elem == "phone-number" &&
    //   data[elem] != "" &&
    //   /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(data[elem])
    // ) {
    //   console.log("phone");
    // } else {
    //   displayErrorMsg("NUMBER", "block");
    // }

    //validation email
    // if (elem == "email" && /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(data[elem])) {
    //   alert("ksnkjdvsknd");
    // }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll("input");
  var valuesInput = {};

  fields.forEach((field) => {
    const { name, value } = field;

    valuesInput[name] = value == "" ? false : value;
  });

  validateForm(valuesInput);
});
