
window.addEventListener('load', () => { /* Страница загружена, включая все ресурсы */
    const preloader = document.querySelector('.preloader') /* находим блок Preloader */
    preloader.classList.add('hide-preloader') /* добавляем ему класс для скрытия */
    window.setTimeout(function () {
        preloader.classList.remove('hide-preloader');
        preloader.classList.add('hide-preloader-full');
    }, 3000);
})