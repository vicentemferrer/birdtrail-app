import { createContext } from 'react';

import { Cluster } from '@/lib/clustering';
import { APIObservation, SpeciesOption } from '@/lib/types';

interface ICalloutContext {
	selectedMarker: APIObservation | null;
	calloutVisible: boolean;
	handleMarkerPress: (feature: APIObservation) => void;
	closeCallout: () => void;
	selectedCluster: Cluster | null;
	clusterModalVisible: boolean;
	handleClusterPress: (cluster: Cluster) => void;
	closeClusterModal: () => void;
}

interface IFiltersContext {
	filteredBirds: APIObservation[];
	species: SpeciesOption[];
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
