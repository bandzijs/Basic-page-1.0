class PropertyCard extends HTMLElement {
    connectedCallback() {
        this.id = Number(this.getAttribute('data-id') || '0');
        const title = this.getAttribute('title') || '';
        const image = this.getAttribute('image') || '';
        const pricePerNight = this.getAttribute('pricePerNight') || '';
        const total = this.getAttribute('total') || '';
        const dates = this.getAttribute('dates') || '';
        const speed = this.getAttribute('speed') || '';
        const tags = (this.getAttribute('tags') || '').split(',').filter(Boolean);
        this.innerHTML = `
            <article class="bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition-shadow cursor-pointer mb-3" data-id="${this.id}">
                <div class="aspect-[4/3] bg-gray-100">
                    <img src="${image}" alt="${title}" class="w-full h-full object-cover" />
                </div>
                <div class="p-4 space-y-2">
                    <div class="flex items-start justify-between gap-3">
                        <h3 class="font-semibold text-gray-900">${title}</h3>
                        <button aria-label="Save" class="text-gray-500 hover:text-gray-700">❤</button>
                    </div>
                    <div class="text-sm text-gray-600">${dates}</div>
                    <div class="text-sm text-gray-600">Internet: ${speed}</div>
                    <div class="flex flex-wrap gap-2 pt-1">
                        ${tags.map(t => `<span class=\"text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full\">${t}</span>`).join('')}
                    </div>
                    <div class="pt-2 flex items-baseline gap-2">
                        <span class="text-lg font-semibold">€${pricePerNight}</span>
                        <span class="text-sm text-gray-500">night · €${total} total</span>
                    </div>
                </div>
            </article>
        `;
        this.addEventListener('mouseenter', () => window.hoverStore && window.hoverStore.setHover(this.id));
        this.addEventListener('mouseleave', () => window.hoverStore && window.hoverStore.setHover(null));
    }
}
customElements.define('property-card', PropertyCard);
export {};


