window.document.addEventListener('DOMContentLoaded', () =>{
    let $control_dropdown = document.querySelectorAll('.control-dropdown')

    $control_dropdown.forEach(control =>{
        let $parentElement = control.parentElement
        let $listResult = $parentElement.nextElementSibling
        control.addEventListener('focus', ()=>{
            $listResult.classList.add('list__dropdown-show')
            $parentElement.classList.add('border-bottom')
        })

        control.addEventListener('blur', ()=>{
            $listResult.classList.remove('list__dropdown-show')
            $parentElement.classList.remove('border-bottom')
        })
    })
})