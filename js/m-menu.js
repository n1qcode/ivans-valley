'use strict'

const triggers = document.querySelectorAll('.menu-trigger'), activeClass = 'active';

const menuButton = document.querySelector('.menu-trigger');
const menuFull = document.querySelectorAll('.m-menu-main')

triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle(activeClass);
    });
});

menuButton.addEventListener('click', (event) => {
    menuFull.forEach((event) => {
    event.classList.toggle('is-open');
})
})

const menuBlock = document.querySelector('.menu-trigger');
const menuBlockFull = document.querySelector('.m-menu-top-sets')
const menuBlockFull2 = document.querySelector('.m-menu-main-block')
const menuLogoHide = document.querySelector('.m-menu-logo')

menuBlock.addEventListener('click', (event) => {
    menuBlockFull.classList.toggle('is-open2');
    menuBlockFull2.classList.toggle('is-open5');
    menuLogoHide.classList.toggle('is-open3');
});