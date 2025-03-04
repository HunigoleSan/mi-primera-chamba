import { footerFunction } from '../componentes/footer.js';

function renderFooter() {
    let $body = document.querySelector('body');
    $body.insertAdjacentElement('beforeend', footerFunction());
}


window.addEventListener('DOMContentLoaded', () => {
    renderFooter();
});


