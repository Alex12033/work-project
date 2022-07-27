let emailInput = document.querySelector("[name=email-footer]");

let btnInput = document.querySelector(".input-btn");

let loader = document.querySelector(".loader-footer");

let backdropLoader = document.querySelector(".backdrop-loader");

let backdropMessage = document.querySelector(".backdrop-message");

function messageForUser(display, text) {
  let msgBlock = document.querySelector(".message-footer");
  msgBlock.innerHTML = text;
  msgBlock.style.display = display;

  setTimeout(() => {
    backdropMessage.style.display = "none";
    msgBlock.style.display = "none";
  }, 3500);
}

function validateEmail(inputValue) {
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (pattern.test(inputValue)) {
    return true;
  } else {
    return false;
  }
}

async function postData(obj) {
  await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      if (response.ok) {
        backdropLoader.style.display = "none";
        loader.style.display = "none";
        emailInput.classList.remove("red-border");
        emailInput.value = "";
        backdropMessage.style.display = "block";
        messageForUser("block", "We send all info on your email");
      }

      if (!response.ok) {
        backdropMessage.style.display = "block";
        messageForUser("block", "Error query! Try later");
        backdropLoader.style.display = "none";
        loader.style.display = "none";
        emailInput.classList.remove("red-border");
      }
    })
    .catch((error) => {
      messageForUser("block", error);
    });
}

btnInput.addEventListener("click", async (e) => {
  e.preventDefault();
  backdropLoader.style.display = "block";
  loader.style.display = "block";

  let obj = {
    email: emailInput.value,
  };

  if (validateEmail(emailInput.value) === true && emailInput !== "") {
    postData(obj);
  } else if (emailInput.value === "") {
    backdropMessage.style.display = "block";
    messageForUser("block", "Enter email field");
    emailInput.classList.add("red-border");
    backdropLoader.style.display = "none";
    loader.style.display = "none";
  } else {
    backdropMessage.style.display = "block";
    messageForUser("block", "Enter truthy email");
    emailInput.classList.add("red-border");
    backdropLoader.style.display = "none";
    loader.style.display = "none";
  }
});
