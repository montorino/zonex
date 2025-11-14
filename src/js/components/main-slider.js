import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const $bannerSlider = document.querySelector(".banner-slider");

const bannerSlider = new Swiper($bannerSlider, {
  loop: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  
});
