import { useState } from 'react';

import { BirdObservationFeature } from '@/lib/types';

export default function useMarkerData() {
	const [selectedMarker, setSelectedMarker] = useState<BirdObservationFeature | null>(null);
	const [calloutVisible, setCalloutVisible] = useState<boolean>(false);

	const handleMarkerPress = (feature: BirdObservationFeature) => {
		setSelectedMarker(feature);
		setCalloutVisible(true);
	};

	const closeCallout = () => {
		setCalloutVisible(false);
		setSelectedMarker(null);
	};

	return {
		selectedMarker,
		calloutVisible,
		handleMarkerPress,
		closeCallout
	};
}
