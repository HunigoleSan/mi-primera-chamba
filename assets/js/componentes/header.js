export function headerFunction() {
    const header = document.createElement("header");
    let url_base = "http://127.0.0.1:5501"
    header.classList.add("c-header");
    header.innerHTML = `
        <div class="c-logo">
            <span>Mi Primera Chamba</span>
        </div>

        <div class="c-enlaces-btn">
            <div class="c-enlaces">
                <a href="${url_base}/index.html">Inicio</a>
                <a href="${url_base}/pages/buscar.html">Buscar Empleo</a>
                <a href="${url_base}/pages/nosotros.html">Nosotros</a>
                <a href="${url_base}/pages/contacto.html">Contáctanos</a>
            </div>
            <div class="c-btns">
                <a href="${url_base}/pages/iniciar_sesion.html" class="btn-login">Iniciar Sesión</a>
                <a href="${url_base}/pages/registro.html" class="btn-register">Registrarse</a>
            </div>
        </div>

        <!-- Icono Oculto Inicialmente -->
        <div class="c-hamburguer">
            <img onclick="touchHamburguer()" src="${url_base}/media/svg/hamburguer-alter.svg" alt="Menú hamburguesa">
        </div>
    
        <!-- Menú Oculto Inicialmente -->
        <div class="menu-movil">
            <a href="${url_base}/index.html">Inicio</a>
            <a href="${url_base}/pages/buscar.html">Buscar Empleo</a>
            <a href="${url_base}/pages/nosotros.html">Nosotros</a>
            <a href="${url_base}/pages/contacto.html">Contáctanos</a>
            <div class="c-btns c-btns-movil">
                <a href="${url_base}/pages/iniciar_sesion.html" class="btn-login btn-movil">Iniciar Sesión</a>
                <a href="${url_base}/pages/registro.html" class="btn-register btn-movil">Registrarse</a>
            </div>
        </div>
    `;

    return header;
}
