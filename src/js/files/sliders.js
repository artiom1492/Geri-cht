/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Autoplay, EffectFade, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss / libs / swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper('.swiper', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, Autoplay, EffectFade, Lazy],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,

            speed: 1000,

            //touchRatio: 0,
            //  simulateTouch: false,
            loop: true,
            // slidesPerView: 1,

            preloadImages: false,
            lazy: true,
            lazy: {
                loadPrevNext: true,
            },



            // Эффекты
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // effect: 'flip',
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,

            // },


            // Пагинация

            pagination: {
                el: '.body-main-slider__controll',
                clickable: true,
            },


            // Скроллбар

            // scrollbar: {
            //     el: '.body-main-slider__controll',
            //     draggable: true,
            // },


            // Кнопки "влево/вправо"
            // navigation: {
            //     prevEl: '.swiper-button-prev',
            //     nextEl: '.swiper-button-next',
            // },

            // Брейкпоинты

            breakpoints: {
                320: {
                    autoHeight: true,
                },

                992: {

                    autoHeight: false,

                },

            },

            // События
            on: {
                init: function() {
                    const controll = document.querySelectorAll('.body-main-slider__controll .swiper-pagination-bullet');
                    controll.forEach((el, index) => {
                        let num;
                        if (index < 10) {
                            num = `0`;
                        }
                        el.innerHTML = `${num}${index + 1}`

                    });

                },
                breakpoint: function(swiper, info) {
                    //swiper.update();
                    !info.autoHeight ? document.querySelector('.body-main-slider__wrapper').style.height = 'auto' : '';
                },
            },


        });
    }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }
}

window.addEventListener("load", function(e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});