class QRCodeComponent extends HTMLElement {
    constructor() {
        super();
        this.qrCodeElement = null;
        this.url = '';
        this.customImage = '';
        this.data = '';
    }

    static get observedAttributes() {
        return ['url', 'data', 'image', 'size', 'title'];
    }

    connectedCallback() {
        this.url = this.getAttribute('url') || '';
        this.customImage = this.getAttribute('image') || '';
        this.data = this.getAttribute('data') || '';
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            if (name === 'url') this.url = newValue;
            if (name === 'image') this.customImage = newValue;
            if (name === 'data') this.data = newValue;
            this.render();
        }
    }

    render() {
        this.innerHTML = `
            <style>
                .qr-container {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 16px;
                    padding: 20px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.3s ease;
                    max-width: 200px;
                }
                .qr-container:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
                }
                .qr-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1a202c;
                    text-align: center;
                    margin: 0;
                }
                .qr-code {
                    width: 120px;
                    height: 120px;
                    background: white;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #e2e8f0;
                }
                .qr-placeholder {
                    color: #64748b;
                    font-size: 12px;
                    text-align: center;
                }
                .dark .qr-container {
                    background: rgba(17, 24, 39, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .dark .qr-title {
                    color: white;
                }
                .dark .qr-code {
                    background: #1f2937;
                    border-color: #374151;
                }
                .dark .qr-placeholder {
                    color: #9ca3af;
                }
            </style>
            <div class="qr-container">
                <h3 class="qr-title" id="qr-title">Scan to Visit</h3>
                <div class="qr-code" id="qr-code">
                    <div class="qr-placeholder">QR Code</div>
                </div>
            </div>
        `;

        this.qrCodeElement = this.querySelector('#qr-code');
        const titleElement = this.querySelector('#qr-title');
        
        // Update title if provided
        const customTitle = this.getAttribute('title');
        if (titleElement && customTitle) {
            titleElement.textContent = customTitle;
        }
        
        this.generateQRCode();
    }

    generateQRCode() {
        if (!this.qrCodeElement) return;

        // Option 1: Use custom image if provided
        if (this.customImage) {
            const img = document.createElement('img');
            img.src = this.customImage;
            img.alt = 'QR Code';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '8px';
            // Fallback: if image fails, generate a QR from URL/data
            img.onerror = () => {
                const fallbackData = this.data || this.url || window.location.href;
                this.generateQRCodeFromAPI(fallbackData);
            };
            this.qrCodeElement.innerHTML = '';
            this.qrCodeElement.appendChild(img);
            return;
        }

        // Option 2: Use API to generate QR code from URL/data
        const qrData = this.data || this.url || window.location.href;
        this.generateQRCodeFromAPI(qrData);
    }

    generateQRCodeFromAPI(data) {
        if (!this.qrCodeElement) return;

        // Use QR Server API to generate real QR code
        const qrSize = this.getAttribute('size') || '120';
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(data)}`;
        
        const img = document.createElement('img');
        img.src = qrUrl;
        img.alt = 'QR Code';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '8px';
        
        this.qrCodeElement.innerHTML = '';
        this.qrCodeElement.appendChild(img);
    }
}

customElements.define('qr-code', QRCodeComponent);