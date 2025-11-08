class MapView extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.width = '100%';
        this.style.height = '100%';
        this.innerHTML = `<div id="leaflet-map" style="width:100%;height:100%"></div>`;
        this.map = L.map(this.querySelector('#leaflet-map')).setView([52.2297, 21.0122], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(this.map);
        this.markers = new Map();
        (window.SampleMarkers || []).forEach(m => {
            const icon = L.divIcon({
                className: 'price-badge',
                html: `<div style="background:#111827;color:white;padding:6px 8px;border-radius:9999px;font-weight:600;font-size:12px;box-shadow:0 2px 6px rgba(0,0,0,.2)">€${m.price}</div>`
            });
            const marker = L.marker([m.lat, m.lng], { icon }).addTo(this.map);
            marker.on('mouseover', () => window.hoverStore && window.hoverStore.setHover(m.id));
            marker.on('mouseout', () => window.hoverStore && window.hoverStore.setHover(null));
            this.markers.set(m.id, marker);
        });
        if (window.hoverStore) {
            window.hoverStore.subscribe((e) => this.highlight(e.id));
        }
    }
    highlight(id) {
        if (!this.markers) return;
        this.markers.forEach((marker, mid) => {
            const el = marker.getElement();
            if (!el) return;
            el.style.transform = id === mid ? 'scale(1.1)' : 'scale(1)';
            el.style.zIndex = id === mid ? '1000' : '0';
        });
    }
}
customElements.define('map-view', MapView);
