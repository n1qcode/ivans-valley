// window.onload = function() {
//     let preloader = document.getElementById('preloader');
//     preloader.classList.add('hide-preloader');
//     setInterval(function() {
//         preloader.classList.add('preloader-hidden');
//     }, 990);
// }

window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
    const preloader = document.getElementById('preloader') /* находим блок Preloader */
    preloader.classList.add('hide-preloader') /* добавляем ему класс для скрытия */
})