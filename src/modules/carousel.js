import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
const swiperButtonNext = document.querySelector('.swiper-button-next');
const swiperButtonPrev = document.querySelector('.swiper-button-prev');

swiperButtonNext.style.position = "static";
swiperButtonNext.style.marginTop = 10 + 'px';
swiperButtonPrev.style.position = "static";
swiperButtonPrev.style.marginTop = 10 + 'px';

const carousel = () => {
    const swiper = new Swiper(".swiper", {
        modules: [Navigation],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });
      
}

export default carousel;