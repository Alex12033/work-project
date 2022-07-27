let nameInput = document.querySelector("[name=name-modal]");

let phoneInput = document.querySelector('[name=phone-modal]');

let btnModal = document.querySelector(".modal__btn");

let loaderModal = document.querySelector(".modal__loader");

let backdropLoaderModal = document.querySelector('.modal__backdrop-loader');

let backdropMessageModal = document.querySelector('.modal__backdrop-message');

function messageForUserModal(display, text) {
  let msgBlock = document.querySelector(".modal__message");
  msgBlock.innerHTML = text;
  msgBlock.style.display = display;

  setTimeout(() => {
    backdropMessageModal.style.display = 'none';
    msgBlock.style.display = "none";
  }, 3500);
}

btnModal.addEventListener("click", async (e) => {
  e.preventDefault();
  backdropLoaderModal.style.display = 'block';
  loaderModal.style.display = "block";

  let obj = {
    name: nameInput.value,
    phone: phoneInput.value
  };

  if (nameInput.value !== "" && phoneInput.value !== "") {
    await fetch("https://62cddbfda43bf780085fe7b3.mockapi.io/footer-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          backdropLoaderModal.style.display = 'none';       
          loaderModal.style.display = "none";
          nameInput.classList.remove('red');
          phoneInput.classList.remove('red');
          nameInput.value = "";
          phoneInput.value = "";
          backdropMessageModal.style.display = 'block';
          messageForUserModal("block", "We will call you back!");
        }

        if (!response.ok) {
          backdropMessageModal.style.display = 'block';
          messageForUserModal("block", "Error query! Try later");
          backdropLoaderModal.style.display = 'none';        
          loaderModal.style.display = "none";
          nameInput.classList.remove('red');
          phoneInput.classList.remove('red');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } 
  else {
    backdropMessageModal.style.display = 'block';
    messageForUserModal("block", "Enter name or phone field");
    nameInput.classList.add('red');
    phoneInput.classList.add('red');
    backdropLoaderModal.style.display = 'none';   
    loaderModal.style.display = "none";
  }
});

