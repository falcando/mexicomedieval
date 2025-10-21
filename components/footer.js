class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: var(--color-soft-black);
                    color: white;
                    padding: 3rem 2rem;
                    margin-top: auto;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .footer-logo {
                    font-family: 'Spectral', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: white;
                    margin-bottom: 1rem;
                }

                .footer-links h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: var(--color-deep-red);
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 0.5rem;
                }

                .footer-links a {
                    color: white;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .footer-links a:hover {
                    color: var(--color-deep-red);
                }
                .institutional-logos {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-bottom: 1rem;
                }

                .institutional-logos img {
                    height: 40px;
                    width: auto;
                }

                .footer-links ul a {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
.copyright {
                    text-align: center;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: 0.875rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-links a {
                    color: white;
                    transition: color 0.2s;
                }

                .social-links a:hover {
                    color: var(--color-deep-red);
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div>
                        <div class="footer-logo">México Medieval</div>
                        <p>Historia, investigación y divulgación desde el Sur Global.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="Youtube"><i data-feather="youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <h3>Secciones</h3>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/libros.html">Libros</a></li>
                            <li><a href="/articulos.html">Artículos</a></li>
                            <li><a href="/podcast.html">Podcast</a></li>
                            <li><a href="/videos.html">Videos</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/legal.html">Aviso de privacidad</a></li>
                            <li><a href="/legal.html">Cookies</a></li>
                            <li><a href="/legal.html">Licencias</a></li>
                            <li><a href="/contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="footer-links">Afiliación institucional</h3>
                        <div class="institutional-logos">
                            <a href="https://coljal.mx/investigacion-lineas/estudios-historicos/dr-hervin-fernandez-aceves/" target="_blank" rel="noopener noreferrer">
                                <img src="http://static.photos/education/200x200/1" alt="El Colegio de Jalisco">
                            </a>
</div>
                        <div class="mt-4">
                            <h3 class="footer-links">Perfiles académicos</h3>
                            <ul>
                                <li><a href="https://orcid.org/0000-0002-9800-5277" target="_blank" rel="noopener noreferrer">ORCID</a></li>
                                <li><a href="https://www.amazon.com.mx/stores/author/B08JFMJ42H" target="_blank" rel="noopener noreferrer">Amazon Author Page</a></li>
</ul>
                        </div>
                    </div>
</div>
                <div class="copyright">
                    &copy; 2023 México Medieval. Todos los derechos reservados.
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);