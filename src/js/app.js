import * as flsFunctions from './modules/functions.js';
import { mixit } from './modules/gallery/pets.js';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	mixit();
	flsFunctions.isWeb();
});

// import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 'auto',
//   spaceBetween: 100,
//   modules: [Navigation, Pagination, Autoplay],
//   autoplay: {
//     delay: 3000,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
