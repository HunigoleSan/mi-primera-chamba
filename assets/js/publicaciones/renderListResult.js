import {departmentsData} from './../data/departments.js';
import {componentListResult} from './../componentes/listResult.js';

let $listDropdown_HTML = document.querySelector(".list__dropdown")


export function renderListResult (){
    departmentsData.forEach(departments => {
        $listDropdown_HTML.insertAdjacentHTML("beforeend",componentListResult(departments.department))
    });

}

window.document.addEventListener('DOMContentLoaded',()=>{
    renderListResult()
})


