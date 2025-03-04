function componentPublication(data){
    let {title,subtitle,description,contract} = data // destructuración
    let html = `
    <article class="company">
        <div class="company__information">
            <h3 class="company__information-title">${title}</h3>
            <h4 class="company__information-subtitle">${subtitle}</h4>
            <p class="company__information-description">${description}</p>
        </div>
        <div class="company__contract">
            ${
                contract.map(({icon,label}) => `
                    <div class="company__contract-item">
                        <i class='bx ${icon} grey'></i>
                        <span>${label} S/</span>
                    </div>
                `).join('')
            }
        </div>
    </article>
    `
    return html
}

export {componentPublication};