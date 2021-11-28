'use strict'
// mobile

const menuBlockFullqr = document.querySelector('.m-menu-top-sets')
const menuBlockFullqr2 = document.querySelector('.m-menu-main-block')

const qrIcon1 = document.querySelector('.menu-item-qr-code1');
const qrIcon2 = document.querySelector('.menu-item-qr-code2');
const qrIcon3 = document.querySelector('.menu-item-qr-code3');

// mobile
const qrCode1 = document.querySelector('.qr-code1');
const qrCode2 = document.querySelector('.qr-code2');
const qrCode3 = document.querySelector('.qr-code3');

//full
const qrIcon11 = document.querySelector('.menu-item-qr-code1-second');
const qrIcon12 = document.querySelector('.menu-item-qr-code2-second');
const qrIcon13 = document.querySelector('.menu-item-qr-code3-second');

//full
const qrCode11 = document.querySelector('.qr-code1-second');
const qrCode12 = document.querySelector('.qr-code2-second');
const qrCode13 = document.querySelector('.qr-code3-second');

// mobile
qrIcon1.addEventListener('click', (event) => {
   qrCode1.classList.remove('hidden-qr1');
   menuBlockFullqr.classList.add('is-open4');
   menuBlockFullqr2.classList.add('is-open6');
});
qrIcon2.addEventListener('click', (event) => {
   qrCode2.classList.remove('hidden-qr2');
   menuBlockFullqr.classList.add('is-open4');
   menuBlockFullqr2.classList.add('is-open6');
});
qrIcon3.addEventListener('click', (event) => {
   qrCode3.classList.remove('hidden-qr3');
   menuBlockFullqr.classList.add('is-open4');
   menuBlockFullqr2.classList.add('is-open6');
});

qrIcon1.addEventListener('mouseout', (event) => {
   qrCode1.classList.add('hidden-qr1');
   menuBlockFullqr.classList.remove('is-open4');
   menuBlockFullqr2.classList.remove('is-open6');
});
qrIcon2.addEventListener('mouseout', (event) => {
   qrCode2.classList.add('hidden-qr2');
   menuBlockFullqr.classList.remove('is-open4');
   menuBlockFullqr2.classList.remove('is-open6');
});
qrIcon3.addEventListener('mouseout', (event) => {
   qrCode3.classList.add('hidden-qr3');
   menuBlockFullqr.classList.remove('is-open4');
   menuBlockFullqr2.classList.remove('is-open6');
});


//full
qrIcon11.addEventListener('mouseover', (event) => {
   qrCode11.classList.remove('hidden-qr1');
});
qrIcon12.addEventListener('mouseover', (event) => {
   qrCode12.classList.remove('hidden-qr2');
});
qrIcon13.addEventListener('mouseover', (event) => {
   qrCode13.classList.remove('hidden-qr3');
});

qrIcon11.addEventListener('mouseout', (event) => {
   qrCode11.classList.add('hidden-qr1');
});
qrIcon12.addEventListener('mouseout', (event) => {
   qrCode12.classList.add('hidden-qr2');
});
qrIcon13.addEventListener('mouseout', (event) => {
   qrCode13.classList.add('hidden-qr3');
});