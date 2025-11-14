const $catalogFiltersTop = document.querySelectorAll(".catalog-filter--top");
const $hideFilters = document.querySelector(".catalog-filters__hide");

if($catalogFiltersTop && $hideFilters){
$catalogFiltersTop.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.currentTarget
      .closest(".catalog-filter")
      .classList.toggle("catalog-filter--open");
  });
});

$hideFilters.addEventListener("click", (e) => {
  $catalogFiltersTop.forEach((el) => {
    el.closest(".catalog-filter").classList.remove("catalog-filter--open");
  });
});
}

