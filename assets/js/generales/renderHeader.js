import { headerFunction } from '../componentes/header.js';

function renderHeader() {
    let $body = document.querySelector('body');
    $body.insertAdjacentElement('afterbegin', headerFunction());

    // definimos la variable luego de insertar el header
    window.menuMovil = document.querySelector('.menu-movil');
}


window.addEventListener('DOMContentLoaded', () => {
    renderHeader();

    // al presionar el menú hamburguesa ejecutamos el siguiente codigo
    window.touchHamburguer = function() {
        window.menuMovil.classList.toggle('activo');
    };
});


