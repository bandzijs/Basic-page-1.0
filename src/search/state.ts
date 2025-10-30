export type ListingHoverEvent = { type: 'hover'; id: number | null };

type Listener = (e: ListingHoverEvent) => void;

class HoverStore {
    private selectedId: number | null = null;
    private listeners: Set<Listener> = new Set();

    subscribe(listener: Listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    setHover(id: number | null) {
        this.selectedId = id;
        const evt: ListingHoverEvent = { type: 'hover', id };
        this.listeners.forEach(l => l(evt));
    }

    getHover() {
        return this.selectedId;
    }
}

export const hoverStore = new HoverStore();


