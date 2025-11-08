export type Listing = {
    id: number;
    title: string;
    imageUrl: string;
    pricePerNight: number;
    total: number;
    dates: string;
    internetMbps: number;
    tags?: string[];
    lat: number;
    lng: number;
};

export const sampleListings: Listing[] = [
    {
        id: 1,
        title: 'Bright studio in Śródmieście',
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
        pricePerNight: 19,
        total: 570,
        dates: 'Nov 1 – Nov 30',
        internetMbps: 300,
        tags: ['Top pick', 'Guest-Verified'],
        lat: 52.2297,
        lng: 21.0122
    },
    {
        id: 2,
        title: 'Modern 1BR near Powiśle',
        imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
        pricePerNight: 22,
        total: 660,
        dates: 'Nov 5 – Dec 5',
        internetMbps: 500,
        tags: ['+2% off'],
        lat: 52.2350,
        lng: 21.0250
    },
    {
        id: 3,
        title: 'Riverside loft in Praga',
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop',
        pricePerNight: 25,
        total: 750,
        dates: 'Oct 28 – Nov 28',
        internetMbps: 200,
        tags: ['Utilities included'],
        lat: 52.2480,
        lng: 21.0300
    }
];

export type MarkerDatum = { id: number; lat: number; lng: number; price: number };

export type PropertyCardAttributes = {
    id: number;
    title: string;
    image: string;
    pricePerNight: number;
    total: number;
    dates: string;
    internetMbps: number;
    tags: string[];
};

export const sampleMarkers: MarkerDatum[] = sampleListings.map(listingToMarker);

export function listingToMarker(listing: Listing): MarkerDatum {
    return {
        id: listing.id,
        lat: listing.lat,
        lng: listing.lng,
        price: listing.pricePerNight
    };
}

export function listingToCardAttributes(listing: Listing): PropertyCardAttributes {
    return {
        id: listing.id,
        title: listing.title,
        image: listing.imageUrl,
        pricePerNight: listing.pricePerNight,
        total: listing.total,
        dates: listing.dates,
        internetMbps: listing.internetMbps,
        tags: listing.tags ?? []
    };
}

export function getSampleListings(): Listing[] {
    return sampleListings.map(l => ({ ...l }));
}

export function getSampleMarkers(): MarkerDatum[] {
    return sampleMarkers.map(m => ({ ...m }));
}

