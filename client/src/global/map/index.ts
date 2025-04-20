
import { MapStateProps, PropertyType } from 'types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const MapStore = create<MapStateProps>()(
    persist(
        (set) => ({
            isMarkerListingOpen: false,


            toggleIsMarkerListingOpen: () => set((state) => (
                { isMarkerListingOpen: !state.isMarkerListingOpen })),


            selectedMarketListing: {
                id: 0,
                title: '',
                img: '',
                bedroom: 0,
                bathroom: 0,
                price: 0,
                address: '',
                latitude: 0,
                longitude: 0,
            },
            setSelectedMarketListing: (property: PropertyType) =>
                set(() => (
                    {
                        selectedMarketListing: {
                            ...property
                        }
                    }
                ))
        }),
        {
            name: 'map-storage',
        }
    )
);