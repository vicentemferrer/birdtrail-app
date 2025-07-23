import { createContext } from 'react';

import { BirdObservationFeature, BirdObservations } from '@/lib/types';

interface ICalloutContext {
	selectedMarker: BirdObservationFeature | null;
	calloutVisible: boolean;
	handleMarkerPress: (feature: BirdObservationFeature) => void;
	closeCallout: () => void;
}

interface IFiltersContext {
	filteredBirds: BirdObservations;
	species: string[];
	filters: {
		currSpecies: string;
	};
	shouldReset: boolean;
	setSelectedSpecies: (p: string) => void;
	resetFilters: () => void;
}

const CalloutContext = createContext({} as ICalloutContext);
const FiltersContext = createContext({} as IFiltersContext);

export { CalloutContext, FiltersContext };
