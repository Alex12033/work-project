function sectioQuestion() {
  let acc = document.querySelector(".accordion");

  let selectedItem;

  acc.addEventListener("click", function (event) {
    let target = event.target;

    while (target != this) {
      if (target.classList == "accordion__item") {
        active(target);
        return;
      }
      removeClass(target);
      target = target.parentNode;
    }
  });

  function active(node) {
    if (selectedItem) {
      selectedItem.classList.remove("accordion__item--active");
    }
    selectedItem = node;
    selectedItem.classList.add("accordion__item--active");
  }

  function removeClass(node) {
    if (selectedItem == node) {
      selectedItem.classList.remove("accordion__item--active");
    }
  }
}

module.exports = sectioQuestion;
