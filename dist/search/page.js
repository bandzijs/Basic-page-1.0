"use strict";
(function () {
    var listContainerId = 'list-container';
    function cloneListing(listing) {
        return Object.assign({}, listing);
    }
    function setWindowBindings(listings) {
        window.SampleListings = listings;
        window.SampleMarkers = listings.map(function (listing) { return ({
            id: listing.id,
            lat: listing.lat,
            lng: listing.lng,
            price: listing.pricePerNight
        }); });
    }
    function renderState(state) {
        var container = document.getElementById(listContainerId);
        if (!container) {
            return;
        }
        if (state.status === 'loading') {
            container.innerHTML = "\n            <div role=\"status\" class=\"flex h-full items-center justify-center text-gray-500\">\n                Loading search results\u2026\n            </div>\n        ";
            return;
        }
        if (state.status === 'error') {
            container.innerHTML = "\n            <div role=\"alert\" class=\"rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700\">\n                ".concat(state.message, "\n            </div>\n        ";
            return;
        }
        if (state.status === 'empty') {
            container.innerHTML = "\n            <div class=\"flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-gray-600\">\n                <p class=\"text-lg font-semibold text-gray-800\">No stays match these filters yet</p>\n                <p>Try adjusting your dates, budget, or location to see more places.</p>\n            </div>\n        ";
            return;
        }
        var fragment = document.createDocumentFragment();
        state.listings.forEach(function (listing) {
            var card = document.createElement('property-card');
            card.setAttribute('data-id', String(listing.id));
            card.setAttribute('title', listing.title);
            card.setAttribute('image', listing.imageUrl);
            card.setAttribute('pricePerNight', String(listing.pricePerNight));
            card.setAttribute('total', String(listing.total));
            card.setAttribute('dates', listing.dates);
            card.setAttribute('speed', "".concat(listing.internetMbps, " Mbps"));
            card.setAttribute('tags', (listing.tags || []).join(','));
            fragment.appendChild(card);
        });
        container.innerHTML = '';
        container.appendChild(fragment);
    }
    function loadListings() {
        var listings = window.SampleListings || [];
        return listings.map(cloneListing);
    }
    function bootstrap() {
        renderState({ status: 'loading' });
        try {
            var listings = loadListings();
            setWindowBindings(listings);
            if (!listings.length) {
                renderState({ status: 'empty' });
                return;
            }
            renderState({ status: 'ready', listings: listings });
        }
        catch (error) {
            console.error('Failed to load search listings', error);
            renderState({ status: 'error', message: 'Something went wrong loading search results. Please refresh and try again.' });
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap);
    }
    else {
        bootstrap();
    }
})();
