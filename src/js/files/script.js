// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Модуль работы с календарем
import datepicker from 'js-datepicker'

window.addEventListener("load", function(e) {
    const bg = document.querySelectorAll('[data-bg]');
    if (bg.length) {
        bg.forEach(bgItem => {
            bgItem.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`);
        });
    }

    const picker = datepicker('[data-calendar]', {

    });


});