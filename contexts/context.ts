import { createContext, Dispatch, SetStateAction } from 'react';

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
	selectedSpecies: string;
	setSelectedSpecies: Dispatch<SetStateAction<string>>;
}

const CalloutContext = createContext({} as ICalloutContext);
const FiltersContext = createContext({} as IFiltersContext);

export { CalloutContext, FiltersContext };
