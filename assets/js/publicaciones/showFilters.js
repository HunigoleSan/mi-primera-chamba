function showFilters(){
    let filter_show_mobile = document.querySelector(".filter-show-mobile")
    let job = document.getElementById("job")
    let cerrar_jobs = document.getElementById("cerrar_jobs")
    console.log(job)
    filter_show_mobile.addEventListener("click",()=>{
        job.classList.toggle("job-show")
    })
    cerrar_jobs.addEventListener("click",()=>{
        job.classList.toggle("job-show")
    })
}

window.document.addEventListener("DOMContentLoaded",()=>{
    showFilters()

})