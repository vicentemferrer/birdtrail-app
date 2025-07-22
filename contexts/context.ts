import { BirdObservationFeature } from '@/lib/types';
import { createContext, Dispatch, SetStateAction } from 'react';

interface ICalloutContext {
	selectedMarker: BirdObservationFeature | null;
	calloutVisible: boolean;
	handleMarkerPress: (feature: BirdObservationFeature) => void;
	closeCallout: () => void;
}

interface IFiltersContext {
	selectedSpecies: string;
	setSelectedSpecies: Dispatch<SetStateAction<string>>;
}

const CalloutContext = createContext({} as ICalloutContext);
const FiltersContext = createContext({} as IFiltersContext);

export { CalloutContext, FiltersContext };
