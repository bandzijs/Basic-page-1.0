import { getSampleListings, listingToCardAttributes } from './data';
import { hoverStore } from './state';

declare global {
    interface Window {
        SampleListings?: ReturnType<typeof getSampleListings>;
        hoverStore?: typeof hoverStore;
    }
}

type RenderState =
    | { status: 'loading' }
    | { status: 'error'; message: string }
    | { status: 'empty' }
    | { status: 'ready'; listings: ReturnType<typeof getSampleListings> };

const listContainerId = 'list-container';

function setWindowBindings(listings: ReturnType<typeof getSampleListings>) {
    window.SampleListings = listings;
    window.hoverStore = hoverStore;
}

function renderState(state: RenderState) {
    const container = document.getElementById(listContainerId);
    if (!container) {
        return;
    }

    if (state.status === 'loading') {
        container.innerHTML = `
            <div role="status" class="flex h-full items-center justify-center text-gray-500">
                Loading search results…
            </div>
        `;
        return;
    }

    if (state.status === 'error') {
        container.innerHTML = `
            <div role="alert" class="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
                ${state.message}
            </div>
        `;
        return;
    }

    if (state.status === 'empty') {
        container.innerHTML = `
            <div class="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-gray-600">
                <p class="text-lg font-semibold text-gray-800">No stays match these filters yet</p>
                <p>Try adjusting your dates, budget, or location to see more places.</p>
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();
    state.listings.forEach(listing => {
        const card = document.createElement('property-card');
        const attrs = listingToCardAttributes(listing);
        card.setAttribute('data-id', String(attrs.id));
        card.setAttribute('title', attrs.title);
        card.setAttribute('image', attrs.image);
        card.setAttribute('pricePerNight', String(attrs.pricePerNight));
        card.setAttribute('total', String(attrs.total));
        card.setAttribute('dates', attrs.dates);
        card.setAttribute('speed', `${attrs.internetMbps} Mbps`);
        card.setAttribute('tags', attrs.tags.join(','));
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

async function bootstrap() {
    renderState({ status: 'loading' });

    try {
        const listings = await loadListings();
        setWindowBindings(listings);
        if (!listings.length) {
            renderState({ status: 'empty' });
            return;
        }
        renderState({ status: 'ready', listings });
    } catch (error) {
        console.error('Failed to load search listings', error);
        renderState({ status: 'error', message: 'Something went wrong loading search results. Please refresh and try again.' });
    }
}

async function loadListings() {
    // Placeholder for future async call; keep async to simplify later integration.
    return getSampleListings();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}


