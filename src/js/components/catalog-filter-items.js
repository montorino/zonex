const $catalogFilterItems = document.querySelectorAll(".catalog-filter--item");
const $catalogChoice = document.querySelector(".catalog-choice");

const createChoiceItem = (text) => {
  return `<button class="btn-reset catalog-choice__item" data-choice-text="${text}">
        ${text}
        <svg
          height="329pt"
          viewBox="0 0 329.26933 329"
          width="329pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </button>`;
};

//Adding categories from Categories List

$catalogFilterItems.forEach((el) => {
  el.querySelector("input").addEventListener("change", (e) => {
    let checked = el.querySelector("input").checked;

    if (checked) {
      el.querySelector(".custom-checkbox").classList.add(
        "custom-checkbox--active"
      );
      let text = el.querySelector(".custom-checkbox__text").textContent;
      $catalogChoice.insertAdjacentHTML("afterbegin", createChoiceItem(text));
    } else {
      el.querySelector(".custom-checkbox").classList.remove(
        "custom-checkbox--active"
      );
      let text = el.querySelector(".custom-checkbox").dataset.text;
      document.querySelector(`[data-choice-text="${text}"]`).remove();
    }

    let activeCheckboxes = document.querySelectorAll(
      ".custom-checkbox--active"
    );
    if (activeCheckboxes.length > 0) {
      $catalogChoice.style.display = "block";
    } else {
      $catalogChoice.style.display = "none";
    }
  });
});

//Removing categories from Category List

$catalogChoice.addEventListener("click", (e) => {
  if (e.target.classList.contains("catalog-choice__item")) {
    e.target.remove();
    let text = e.target.textContent.trimLeft().trimRight();
    document
      .querySelector(`[data-text="${text}"]`)
      .querySelector("input").checked = false;
    document
      .querySelector(`[data-text="${text}"]`)
      .classList.remove("custom-checkbox--active");
  }
  if (e.target.classList.contains("catalog-choice__clear")) {
    Array.from(e.currentTarget.children).forEach((el) => {
      if (!el.classList.contains("catalog-choice__clear")) {
        el.remove();
      }

      $catalogFilterItems.forEach((el) => {
        el.querySelector("input").checked = false;
        el.querySelector(".custom-checkbox").classList.remove(
          "custom-checkbox--active"
        );
      });
    });
    e.currentTarget.style.display = "none";
  }

  if (e.currentTarget.children.length === 1) {
    e.currentTarget.style.display = "none";
  }
});
