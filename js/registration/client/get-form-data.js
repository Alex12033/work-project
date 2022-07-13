let form = document.querySelector("form");

function displayErrorMsg(msg, display) {
  let errorDiv = document.querySelector(".error-msg");

  errorDiv.innerHTML = msg;

  errorDiv.style.display = display; //defolt in css display:hide
}

function validateForm(data) {
  for (elem in data) {
    if (data[elem] == "") {
      let input = document.querySelector(`[name=${elem}]`);
      input.classList.add("error");

      displayErrorMsg("PLease enter each field", "block");
    } else {
      let input = document.querySelector(`[name=${elem}]`);
      input.classList.remove("error");

      displayErrorMsg("PLease enter each field", "none");
    }

    
      console.log(data[elem])
    
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll("input");
  var valuesInput = {};

  fields.forEach((field) => {
    const { name, value } = field;

    valuesInput[name] = value;
  });

  validateForm(valuesInput);
});
