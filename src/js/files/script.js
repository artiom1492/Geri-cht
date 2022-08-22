// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener("load", function(e) {
    document.body.insertAdjacentHTML('beforeend', `<div class="main-pg"></div>`)

});