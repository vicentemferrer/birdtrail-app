import { createContext } from 'react';

import { Cluster } from '@/lib/clustering';
import { CompatibleSubregionKeys } from '@/lib/constants';
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
	selectedSubregion: CompatibleSubregionKeys;
	setSelectedSpecies: (p: string) => void;
	resetFilters: () => void;
	onSelect: (s: CompatibleSubregionKeys) => void;
}

const CalloutContext = createContext({} as ICalloutContext);
const FiltersContext = createContext({} as IFiltersContext);

export { CalloutContext, FiltersContext };
