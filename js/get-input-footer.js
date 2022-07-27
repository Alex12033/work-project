let emailInput = document.querySelector("[name=email-footer]");

let btnInput = document.querySelector(".input-btn");

let loader = document.querySelector(".loader-footer");

let backdropLoader = document.querySelector('.backdrop-loader');

let backdropMessage = document.querySelector('.backdrop-message');

function messageForUser(display, text) {
  let msgBlock = document.querySelector(".message-footer");
  msgBlock.innerHTML = text;
  msgBlock.style.display = display;

  setTimeout(() => {
    backdropMessage.style.display = 'none';
    msgBlock.style.display = "none";
  }, 3500);
}

btnInput.addEventListener("click", async (e) => {
  e.preventDefault();
  backdropLoader.style.display = 'block';
  loader.style.display = "block";

  let obj = {
    email: emailInput.value,
  };

  if (emailInput.value !== "") {
    await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          backdropLoader.style.display = 'none';       
          loader.style.display = "none";
          emailInput.classList.remove('red-border');
          emailInput.value = "";
          backdropMessage.style.display = 'block';
          messageForUser("block", "We send all info on your email");
        }

        if (!response.ok) {
          backdropMessage.style.display = 'block';
          messageForUser("block", "Error query! Try later");
          backdropLoader.style.display = 'none';        
          loader.style.display = "none";
          emailInput.classList.remove('red-border');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } 
  else {
    backdropMessage.style.display = 'block';
    messageForUser("block", "Enter email field");
    emailInput.classList.add('red-border');
    backdropLoader.style.display = 'none';   
    loader.style.display = "none";
  }
});
