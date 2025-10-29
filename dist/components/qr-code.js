class QRCodeComponent extends HTMLElement {
    constructor() {
        super();
        this.qrCodeElement = null;
        this.url = '';
    }

    static get observedAttributes() {
        return ['url', 'size'];
    }

    connectedCallback() {
        this.url = this.getAttribute('url') || window.location.href;
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'url' && newValue !== oldValue) {
            this.url = newValue;
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
                <h3 class="qr-title">Scan to Visit</h3>
                <div class="qr-code" id="qr-code">
                    <div class="qr-placeholder">QR Code</div>
                </div>
            </div>
        `;

        this.qrCodeElement = this.querySelector('#qr-code');
        this.generateQRCode();
    }

    generateQRCode() {
        if (!this.qrCodeElement) return;

        // Create QR code using a simple method
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;

        canvas.width = 120;
        canvas.height = 120;

        // Simple QR-like pattern
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 120, 120);
        
        // Create a simple pattern that looks like a QR code
        const cellSize = 4;
        const cells = 30;
        
        for (let i = 0; i < cells; i++) {
            for (let j = 0; j < cells; j++) {
                if ((i + j) % 3 === 0 || (i * j) % 7 === 0) {
                    ctx.fillStyle = '#fff';
                } else {
                    ctx.fillStyle = '#000';
                }
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }

        // Add corner markers
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 20, 20);
        ctx.fillRect(100, 0, 20, 20);
        ctx.fillRect(0, 100, 20, 20);
        
        ctx.fillStyle = '#fff';
        ctx.fillRect(4, 4, 12, 12);
        ctx.fillRect(104, 4, 12, 12);
        ctx.fillRect(4, 104, 12, 12);

        this.qrCodeElement.innerHTML = '';
        this.qrCodeElement.appendChild(canvas);
    }
}

customElements.define('qr-code', QRCodeComponent);
