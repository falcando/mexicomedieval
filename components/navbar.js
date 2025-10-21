class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }

                .logo {
                    color: var(--color-deep-red);
                    font-family: 'Spectral', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }

                .nav-links a {
                    color: var(--color-soft-black);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                    position: relative;
                }

                .nav-links a:hover {
                    color: var(--color-deep-red);
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--color-deep-red);
                    transition: width 0.3s;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .dropdown {
                    position: relative;
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: white;
                    min-width: 200px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    z-index: 1;
                    padding: 0.5rem 0;
                }

                .dropdown:hover .dropdown-content {
                    display: block;
                }

                .dropdown-content a {
                    color: var(--color-soft-black);
                    padding: 0.75rem 1rem;
                    text-decoration: none;
                    display: block;
                    transition: background-color 0.2s;
                }

                .dropdown-content a:hover {
                    background-color: rgba(139, 0, 0, 0.05);
                }

                .lang-toggle {
                    background: none;
                    border: none;
                    color: var(--color-soft-black);
                    cursor: pointer;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">México Medieval</a>
                <div class="nav-links">
                    <a href="/">Inicio</a>
                    <div class="dropdown">
                        <a href="#">Investigación <i data-feather="chevron-down"></i></a>
                        <div class="dropdown-content">
                            <a href="/libros.html">Libros</a>
                            <a href="/articulos.html">Artículos</a>
                            <a href="/papers.html">Papers</a>
                        </div>
                    </div>
                    <a href="/podcast.html">Podcast</a>
                    <a href="/videos.html">Videos</a>
                    <a href="/acerca.html">Acerca de</a>
                    <a href="/contacto.html">Contacto</a>
                    <button id="langToggle" class="lang-toggle">
                        <span>ES</span>
                        <i data-feather="globe"></i>
                    </button>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);