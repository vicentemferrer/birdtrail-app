import { createContext } from 'react';

import { Cluster } from '@/lib/clustering';
import { BirdObservationFeature, BirdObservations } from '@/lib/types';

interface ICalloutContext {
	selectedMarker: BirdObservationFeature | null;
	calloutVisible: boolean;
	handleMarkerPress: (feature: BirdObservationFeature) => void;
	closeCallout: () => void;
	selectedCluster: Cluster | null;
	clusterModalVisible: boolean;
	handleClusterPress: (cluster: Cluster) => void;
	closeClusterModal: () => void;
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
