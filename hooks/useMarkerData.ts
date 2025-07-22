import { useState } from 'react';

import { BirdObservationFeature } from '@/lib/types';
import useModal from './useModal';

export default function useMarkerData() {
	const [selectedMarker, setSelectedMarker] = useState<BirdObservationFeature | null>(null);
	const { isVisible, openModal, closeModal } = useModal();

	const handleMarkerPress = (feature: BirdObservationFeature) => {
		setSelectedMarker(feature);
		openModal();
	};

	const closeCallout = () => {
		closeModal();
		setSelectedMarker(null);
	};

	return {
		selectedMarker,
		calloutVisible: isVisible,
		handleMarkerPress,
		closeCallout
	};
}
