import { galeriaFunction } from '../componentes/nosotros_galeria.js';

function renderGaleria(){
    let $body = document.querySelector('body');
    $body.insertAdjacentElement('beforeend', galeriaFunction());
}

window.addEventListener('DOMContentLoaded', () =>{
    renderGaleria();
});