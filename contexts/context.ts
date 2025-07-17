import { BirdObservationFeature } from '@/lib/types';
import { createContext } from 'react';

interface ICalloutContext {
	selectedMarker: BirdObservationFeature | null;
	calloutVisible: boolean;
	handleMarkerPress: (feature: BirdObservationFeature) => void;
	closeCallout: () => void;
}

const CalloutContext = createContext({} as ICalloutContext);

export { CalloutContext };
