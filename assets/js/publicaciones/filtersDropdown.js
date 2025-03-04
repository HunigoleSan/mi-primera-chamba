window.document.addEventListener('DOMContentLoaded',()=>{
    let $filtersDropdoww_HTML = document.querySelectorAll('.filters__group-label')
    $filtersDropdoww_HTML.forEach(dropdown =>{
        dropdown.addEventListener('click',()=>{
            let $dropdown_item = dropdown.nextElementSibling
            $dropdown_item.classList.toggle('filters__dropdown-show')
        })
    })
})