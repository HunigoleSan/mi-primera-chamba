import {componentListResult} from './../componentes/listResult.js';
import {departmentsData} from './../data/departments.js'


function updateSearch(){
    let $controlDropdown = document.querySelectorAll('.control-dropdown')

    $controlDropdown.forEach(element => {
        
        element.addEventListener('input',(e)=>{
            let fatherElement = element.parentElement
            let fathersBrother = fatherElement.nextElementSibling
            if(element.id == "deparments"){
                fathersBrother.innerHTML = ""
                let value = element.value.trim()
                if(value.length === 0){
                    document.getElementById('listCitys').innerHTML = ""
                }
                let componentRender = findDeparment(value)
                if(componentRender.length > 1){
                    if(typeof componentRender === "object"){
                        componentRender.forEach(dep => {
                            fathersBrother.insertAdjacentHTML("beforeend",componentListResult(dep.department))
                        })
                    }else{
                        fathersBrother.insertAdjacentHTML("beforeend",componentRender)
                    }
                }else if (componentRender.length === 1){
                    console.log("ingreso al 1")
                    let $citys = document.getElementById('listCitys')
                    document.getElementById('listCitys').innerHTML = ""
                    componentRender.forEach(dep => {
                        fathersBrother.insertAdjacentHTML("beforeend",componentListResult(dep.department))
                        dep.citys.map(city => {
                            $citys.insertAdjacentHTML("beforeend",componentListResult(city))
                        })

                    })
                }
            }else if(element.id == "citys"){
                let value = document.getElementById('deparments').value.trim()
                fathersBrother.innerHTML = ""
                let componentRender = findDeparment(value)
    
                if(componentRender.length > 0){
                    if(typeof componentRender === "object"){
                        componentRender.forEach(deparment => {
                            let cityComponentRender = findCity(deparment,element.value)
                            console.log(typeof cityComponentRender)
                            if(typeof cityComponentRender === "object"){
                                console.log(cityComponentRender.length)
                                cityComponentRender.map(city => {
                                    fathersBrother.insertAdjacentHTML("beforeend",componentListResult(city))
                                })
                            }else if(typeof cityComponentRender === "string"){
                                fathersBrother.insertAdjacentHTML("beforeend",cityComponentRender)
                            }
                        })
                    }
                }
            }
        })
    })
}



function findDeparment(value){
    let newValue = value.toLowerCase()
    let deparments = departmentsData.filter(deparment => deparment.department.toLowerCase().includes(newValue))

    if(deparments.length > 0){
        return deparments
    }else{
        return "No esta habilitado"
    }
}
function findCity(deparment,value){
    let newValue = value.toLowerCase().trim()
    if(typeof deparment === "object"){
        let citys = deparment.citys.filter(dep => dep.toLowerCase().includes(newValue))
        if(citys.length > 0){
            return citys
        }else{
            return "No esta habilitado"
        }
    }
}


window.document.addEventListener('DOMContentLoaded',()=>{
    updateSearch()
})