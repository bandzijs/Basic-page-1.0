"use strict";
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        var shadowRoot = this.shadowRoot;
        if (!shadowRoot)
            return;
        shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    left: 0;
                    z-index: 50;
                    transition: all 0.3s ease;
                }
                nav.scrolled {
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .dark nav.scrolled {
                    background: rgba(17, 24, 39, 0.9);
                }
                .logo {
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .scrolled .logo {
                    color: #1a202c;
                }
                .dark .scrolled .logo {
                    color: white;
                }
                ul {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    position: relative;
                }
                .scrolled a {
                    color: #1a202c;
                }
                .dark .scrolled a {
                    color: white;
                }
                a:hover {
                    opacity: 0.8;
                }
                a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: white;
                    transition: width 0.3s ease;
                }
                .scrolled a::after {
                    background: #1a202c;
                }
                .dark .scrolled a::after {
                    background: white;
                }
                a:hover::after {
                    width: 100%;
                }
                .theme-toggle {
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                }
                .scrolled .theme-toggle {
                    color: #1a202c;
                }
                .dark .scrolled .theme-toggle {
                    color: white;
                }
                .theme-toggle:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                .scrolled .theme-toggle:hover {
                    background: rgba(0, 0, 0, 0.05);
                }
                .dark .scrolled .theme-toggle:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                @media (max-width: 768px) {
                    nav {
                        padding: 0.75rem 1rem;
                    }
                    .logo {
                        font-size: 1.25rem;
                    }
                    ul {
                        gap: 0.75rem;
                        flex-wrap: wrap;
                        justify-content: flex-end;
                        row-gap: 0.5rem;
                    }
                    a {
                        font-size: 0.9rem;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">
                    <i data-feather="compass"></i>
                    <span>NoDepo</span>
                </a>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <button id="theme-toggle" class="theme-toggle">
                            <i data-feather="moon"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
