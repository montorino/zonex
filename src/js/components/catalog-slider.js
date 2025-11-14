import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const $catalogSlider = document.querySelector(".hero-catalog__slider");

const bannerSlider = new Swiper($catalogSlider, {
  loop: true,
});
