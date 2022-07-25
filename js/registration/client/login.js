let input = document.querySelectorAll("input");

let btn = document.querySelector(".confirm-button");

let msgAfterLogin = document.querySelector(".msg-after-registration");

let users; //heare we save users from db in fetch

let successfullLogin = {
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

function helperValidateLogin(user, login) {
  if (user.length !== 0 && user["email"] === login["email"]) {
    successfullLogin.email = true;
  } else {
    displayErrorMsg("block", "email", "Wrong email");
  }

  if (login["password"] !== false && user["password"] === login["password"]) {
    successfullLogin.password = true;
  } else {
    displayErrorMsg("block", "password", "Wrong password");
    console.log(login["password"], user["password"]);
  }

  if (
    login["password"] !== false &&
    user["confirmPassword"] === login["confirmPassword"]
  ) {
    successfullLogin.confirmPassword = true;
  } else {
    displayErrorMsg(
      "block",
      "confirmPassword",
      "Please enter the same password"
    );
    console.log(login["password"], user["password"]);
  }
}

function isRegistered(users, login) {
  console.log(users);
  for (value in login) {
    //validation empty fields
    if (login[value] == false) {
      displayErrorMsg("block", value, ` Please enter ${value} fields `);
    }
  }

  let flag = true;
  users.map((user) => {
    //here we check is yet user in db or not with this email
    if (login["email"] !== false && login["email"] === user["email"]) {
      helperValidateLogin(user, login);
      flag = false;
    }
  });
  flag && helperValidateLogin([], login); //this need for correct validation email if in map not yet user we send empty arra as sign what user enter incorrect email
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let input = document.querySelectorAll("input");
  const valueInput = {};

  input.forEach((input) => {
    const { name, value } = input;
    valueInput[name] = value === "" ? false : value;
  });
  //"https://work-project-62855.web.app/js/registration/server/users"
  const result = await fetch(
    "https://work-project-62855.web.app/js/registration/server/users"
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      isRegistered(data, valueInput); //users from db
    })
    .catch((error) => {
      // handle error here
      console.log(error);
      displayErrorMsg("block", "error", "Something went wrong...we fix it)");
    });

  if (
    successfullLogin.email &&
    successfullLogin.password &&
    successfullLogin.confirmPassword
  ) {
    msgAfterLogin.style.display = "block";
    setTimeout(() => {
      window.location.href = "https://work-project-62855.web.app/index.html";
    }, 2000);
  }
});
