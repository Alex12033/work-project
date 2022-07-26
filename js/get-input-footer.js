let emailInput = document.querySelector("[name=email-footer]");

let btnInput = document.querySelector(".input-btn");

let loader = document.querySelector(".loader-footer");

function messageForUser(display, text) {
  let msgBlock = document.querySelector(".message-footer");
  msgBlock.innerHTML = text;
  msgBlock.style.display = display;

  setTimeout(() => {
    msgBlock.style.display = "none";
  }, 3500);
}

btnInput.addEventListener("click", async (e) => {
  e.preventDefault();
  loader.style.display = "block";

  let obj = {
    email: emailInput.value,
  };

  if (emailInput.value !== "") {
    await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-dat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          loader.style.display = "none";
          emailInput.value = "";
        }

        if (!response.ok) {
          messageForUser("block", "Error query! Try later");
          loader.style.display = "none";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    messageForUser("block", "Enter email field");
    loader.style.display = "none";
  }
});
