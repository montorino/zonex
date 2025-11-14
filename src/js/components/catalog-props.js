const $catalogColumns = document.querySelector(".catalog-columns__list");
const $catalogGridContent = document.querySelector(".catalog-grid__content");

if ($catalogColumns) {
  $catalogColumns.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("catalog-columns__btn") ||
      e.target.closest("catalog-columns__item")
    ) {
      let $columns = e.target.dataset.columns;
      let $columnsBtns = document.querySelectorAll(".catalog-columns__btn");
      $columnsBtns.forEach((el) => {
        el.classList.remove("catalog-columns__btn--current");
      });
      e.target.classList.add("catalog-columns__btn--current");
      $catalogGridContent.dataset.gridColumns = $columns;
    }
  });
}
