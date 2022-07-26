let input = document.querySelectorAll("input");

let btn = document.querySelector(".confirm-button");

let msgAfterLogin = document.querySelector(".msg-after-registration");

let users; //heare we save users from db in fetch

let loader = document.querySelector(".loader-form");

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
    successfullLogin.email = false;
    displayErrorMsg("block", "email", "Wrong email");
  }

  if (login["password"] !== false && user["password"] === login["password"]) {
    successfullLogin.password = true;
  } else {
    successfullLogin.password = false;
    displayErrorMsg("block", "password", "Wrong password");
  }

  if (
    login["password"] !== false &&
    user["confirmPassword"] === login["confirmPassword"]
  ) {
    successfullLogin.confirmPassword = true;
  } else {
    successfullLogin.confirmPassword = false;
    displayErrorMsg(
      "block",
      "confirmPassword",
      "Please enter the same password"
    );
  }
}

let nameUSer = "";
function isRegistered(users, login) {
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
      nameUSer = user["name"];
      flag = false;
    }
  });
  flag && helperValidateLogin([], login); //this need for correct validation email if in map not yet user we send empty arra as sign what user enter incorrect email
}
console.log(nameUSer);

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let input = document.querySelectorAll("input");
  const valueInput = {};
  input.forEach((input) => {
    const { name, value } = input;
    valueInput[name] = value === "" ? false : value;
  });
  //https://work-project-62855.web.app/js/registration/server/server.js/users
  //http://localhost:3000/users
  
  loader.style.display = "block";
  
  const result = await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/login")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loader.style.display = "block";
      isRegistered(data, valueInput); //users from db

      if (
        successfullLogin.email &&
        successfullLogin.password &&
        successfullLogin.confirmPassword
      ) {
        msgAfterLogin.style.display = "block";
        
        localStorage.setItem("logged", true);
        localStorage.setItem("user", `${nameUSer}`);
        console.log(nameUSer);
        
    
        setTimeout(() => {
          window.location.href = "https://work-project-62855.web.app/index.html";
        }, 2500);
      } else {
        loader.style.display = "none";
      }
    })
    .catch((error) => {
      // handle error here
      displayErrorMsg("block", error, "Something went wrong...we fix it)");
    });
});