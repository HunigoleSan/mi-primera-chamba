import {componentPublication} from './../componentes/publications.js'
import {publicationsData} from './../data/publications.js';

let $publications_HTML = document.querySelector(".publications")


function renderPublication(){
    publicationsData.forEach(publication => {
        $publications_HTML.insertAdjacentHTML("beforeend",componentPublication(publication))
    });
}

window.document.addEventListener('DOMContentLoaded',()=>{
    renderPublication()
})

