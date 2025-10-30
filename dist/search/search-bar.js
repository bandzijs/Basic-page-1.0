class SearchBar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host { display:block; }
                .bar { font-family: Fieldwork, Arial, sans-serif; }
            </style>
            <div class="bar w-full bg-white/90 backdrop-blur rounded-lg shadow-lg ring-1 ring-black/5 p-3">
                <div class="flex flex-col sm:flex-row gap-3 items-stretch">
                    <input placeholder="Destination" type="text" class="flex-1 h-12 px-4 rounded-md ring-1 ring-gray-200 focus:outline-none" />
                    <input placeholder="Move in" type="date" class="sm:w-44 h-12 px-4 rounded-md ring-1 ring-gray-200 focus:outline-none" />
                    <input placeholder="Move out" type="date" class="sm:w-44 h-12 px-4 rounded-md ring-1 ring-gray-200 focus:outline-none" />
                    <input placeholder="Guests" type="number" min="1" value="1" class="sm:w-32 h-12 px-4 rounded-md ring-1 ring-gray-200 focus:outline-none" />
                    <div class="flex gap-3">
                        <button class="h-12 px-4 rounded-md ring-1 ring-gray-300 hover:bg-gray-50">Filters</button>
                        <select class="h-12 px-4 rounded-md ring-1 ring-gray-200">
                            <option>Sort by</option>
                            <option>Price (low)</option>
                            <option>Price (high)</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('search-bar', SearchBar);
export {};


