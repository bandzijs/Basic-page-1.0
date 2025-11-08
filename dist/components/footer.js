"use strict";
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        var shadowRoot = this.shadowRoot;
        if (!shadowRoot)
            return;
        shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #1a202c;
                    color: white;
                    padding: 4rem 2rem;
                }
                .dark footer {
                    background: #111827;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .footer-description {
                    color: #a0aec0;
                    margin-bottom: 2rem;
                }
                .footer-links h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                }
                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                .footer-links a {
                    color: #a0aec0;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .footer-links a:hover {
                    color: white;
                }
                .footer-bottom {
                    border-top: 1px solid #2d3748;
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                .social-links a {
                    color: #a0aec0;
                    background: #2d3748;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                }
                .social-links a:hover {
                    color: white;
                    background: #4a5568;
                    transform: translateY(-2px);
                }
                .copyright {
                    color: #a0aec0;
                    font-size: 0.875rem;
                }
                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                        text-align: left;
                    }
                    .social-links {
                        margin-bottom: 0;
                    }
                }
            </style>
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-about">
                            <div class="footer-logo">
                                <i data-feather="compass"></i>
                                <span>NoDepo</span>
                            </div>
                            <p class="footer-description">
                                Creating digital experiences that inspire and engage.
                            </p>
                        </div>
                        <div class="footer-links">
                            <h3>Product</h3>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Releases</a></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-links">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">GDPR</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="copyright">
                            &copy; ${new Date().getFullYear()} NoDepo. All rights reserved.
                        </div>
                        <div class="social-links">
                            <a href="#"><i data-feather="twitter"></i></a>
                            <a href="#"><i data-feather="github"></i></a>
                            <a href="#"><i data-feather="linkedin"></i></a>
                            <a href="#"><i data-feather="instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
