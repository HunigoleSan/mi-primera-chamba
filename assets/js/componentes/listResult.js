function componentListResult(data){
    let html =`
        <li class="list__dropdown-result list__dropdown-result--border">
            ${data}
            <i class='bx bx-plus'></i>
        </li>
    `
    return html

}

export {componentListResult}