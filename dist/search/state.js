class HoverStore {
    constructor() {
        this.selectedId = null;
        this.listeners = new Set();
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    setHover(id) {
        this.selectedId = id;
        const evt = { type: 'hover', id };
        this.listeners.forEach(l => l(evt));
    }
    getHover() {
        return this.selectedId;
    }
}
window.hoverStore = new HoverStore();
