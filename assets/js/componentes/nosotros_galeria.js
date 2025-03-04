export function galeriaFunction() {
    const galeria = document.createElement('div');
    galeria.classList.add("nosotros-galeria");
    galeria.innerHTML = `
        <div class="content-galeria">
            <img class="img_galeria" src="/media/nosotros-img/nosotrosIMG_galeria1.png" alt="img_galeria">
            <div class="contenido-galeria">
             <h2>¿Quiénes Somos?</h2><br>
             <p>
                Mi Primera Chamba es una plataforma dedicada a ayudar a jóvenes y personas sin experiencia laboral a 
                conseguir su primer empleo. 
                Nos enfocamos en conectar talento emergente con empresas que buscan incorporar nuevos profesionales, 
                brindando herramientas y asesoría 
                para hacer el proceso más accesible y exitoso.
             </p>
            </div>  
        </div>

        <div class="content-galeria" id="img_galeriaVoltear">
           <div class="contenido-galeria">
           <h2>Nuestra Misión</h2><br>
           <p>
               Facilitar el acceso al mercado laboral a quienes buscan su primer empleo,
               proporcionando recursos, orientación y oportunidades 
               que impulsen su desarrollo profesional.
            </p>
           </div>  
            <img class="img_galeria" class="img_galeriaR" src="/media/nosotros-img/nosotrosIMG_galeria2.png" alt="img_galeria">
        </div>

        <div class="content-galeria">
               <img class="img_galeria" src="/media/nosotros-img/nosotrosIMG_galeria3.png" alt="img_galeria">
           <div class="contenido-galeria">
            <h2>Nuestra Visión</h2><br>
            <p>
               Ser la plataforma líder en inserción laboral para jóvenes y primerizos, contribuyendo a la 
               reducción del desempleo juvenil y fomentando un entorno laboral inclusivo.
            </p>

           </div>  
        </div>
        <br>
        <h1>Nuestros valores</h1>

        <div class="content-galeria">
            <img class="iconIMG_nosotros" src="/media/nosotros-img/icon1_nosotros.png" alt="iconIMG_nosotros">
            <img class="iconIMG_nosotros" src="/media/nosotros-img/icon2_nosotros.png" alt="iconIMG_nosotros">
            <img class="iconIMG_nosotros" src="/media/nosotros-img/icon3_nosotros.png" alt="iconIMG_nosotros">
            <img class="iconIMG_nosotros" src="/media/nosotros-img/icon4_nosotros.png" alt="iconIMG_nosotros">
        </div>


    `;

    return galeria;
}

