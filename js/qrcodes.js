'use strict'

const qrIcon1 = document.querySelector('.menu-item-qr-code1');
const qrIcon2 = document.querySelector('.menu-item-qr-code2');
const qrIcon3 = document.querySelector('.menu-item-qr-code3');
const qrCode1 = document.querySelector('.qr-code1');
const qrCode2 = document.querySelector('.qr-code2');
const qrCode3 = document.querySelector('.qr-code3');

qrIcon1.addEventListener('mouseover', (event) => {
   qrCode1.classList.remove('hidden-qr1');
});
qrIcon2.addEventListener('mouseover', (event) => {
   qrCode2.classList.remove('hidden-qr2');
});
qrIcon3.addEventListener('mouseover', (event) => {
   qrCode3.classList.remove('hidden-qr3');
});

qrIcon1.addEventListener('mouseout', (event) => {
   qrCode1.classList.add('hidden-qr1');
});
qrIcon2.addEventListener('mouseout', (event) => {
   qrCode2.classList.add('hidden-qr2');
});
qrIcon3.addEventListener('mouseout', (event) => {
   qrCode3.classList.add('hidden-qr3');
});