export function footerFunction() {
  const footer = document.createElement("footer");
  
  footer.innerHTML = `
        <div class="c-footer">
            <div class="c-footer-logo">
                <span>Mi Primera Chamba</span>
                <div class="c-redes">
                    <a href="#" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="c-footer-trabajos">
                <h2>Trabajos</h2>
                <a href="#">Ingeniería</a>
                <a href="#">Desarrollo</a>
                <a href="#">Medicina</a>
                <a href="#">Comunicaciones</a>
            </div>
            <div class="c-footer-nosotros">
                <h2>Nosotros</h2>
                <a href="#">Historia</a>
                <a href="#">Objetivo</a>
                <a href="#">Nosotros</a>
            </div>
            <div class="c-footer-contacto">
                <h2>Contáctanos</h2>
                <a href="#">+51 908 621 582</a>
                <a href="#">myfristwork@gmail.com</a>
                <a href="#">Soporte</a>
            </div>
    
        </div>
        <div class="copyrigth">
            <p style="text-align: center;">&copy; 2025 Mi Primera Chamba. Todos los derechos reservados.</p>
        </div>
    `;

  return footer;
}
