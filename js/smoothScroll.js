'use strict'

const linksHead = document.querySelectorAll('.menu-link');
const linksFooter = document.querySelectorAll('.menu-link-footer');

linksHead.forEach(click => {
    click.addEventListener('click', (event) => {

        event.preventDefault();

        const ID = event.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

linksFooter.forEach(click => {
    click.addEventListener('click', (event) => {

        event.preventDefault();

        const ID = event.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})