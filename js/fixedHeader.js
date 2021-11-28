'use strict'

window.onscroll = function () {
    let scrollPos = 10;
    let header = document.querySelector('.navbar');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add ('active')
    } else {
        header.classList.remove('active')
    }
}