export function headerFunction() {
    const header = document.createElement("header");
    header.classList.add("c-header");
    header.innerHTML = `
        <div class="c-logo">
            <span>Mi Primera Chamba</span>
        </div>

        <div class="c-enlaces-btn">
            <div class="c-enlaces">
                <a href="/index.html">Inicio</a>
                <a href="/pages/buscar.html">Buscar Empleo</a>
                <a href="/pages/nosotros.html">Nosotros</a>
                <a href="/pages/contacto.html">Contáctanos</a>
            </div>
            <div class="c-btns">
                <button class="btn-login">Iniciar Sesión</button>
                <button class="btn-register">Registrarse</button>
            </div>
        </div>

        <!-- Icono Oculto Inicialmente -->
        <div class="c-hamburguer">
            <img onclick="touchHamburguer()" src="assets/svg/hamburguer-alter.svg" alt="Menú hamburguesa">
        </div>
    
        <!-- Menú Oculto Inicialmente -->
        <div class="menu-movil">
            <a href="#">Inicio</a>
            <a href="#">Buscar Empleo</a>
            <a href="#">Nosotros</a>
            <a href="#">Contáctanos</a>
            <div class="c-btns c-btns-movil">
                <button class="btn-login btn-movil">Iniciar Sesión</button>
                <button class="btn-register btn-movil">Registrarse</button>
            </div>
        </div>
    `;

    return header;
}
