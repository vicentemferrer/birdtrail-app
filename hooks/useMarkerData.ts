import { useState } from 'react';

import { Cluster } from '@/lib/clustering';
import { APIObservation } from '@/lib/types';

import useModal from './useModal';

export default function useMarkerData() {
	const [selectedMarker, setSelectedMarker] = useState<APIObservation | null>(null);
	const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);
	const { isVisible, openModal, closeModal } = useModal();
	const {
		isVisible: isClusterModalVisible,
		openModal: openClusterModal,
		closeModal: closeClusterModal
	} = useModal();

	const handleMarkerPress = (feature: APIObservation) => {
		setSelectedMarker(feature);
		openModal();
	};

	const closeCallout = () => {
		closeModal();
		setSelectedMarker(null);
	};

	const handleClusterPress = (cluster: Cluster) => {
		setSelectedCluster(cluster);
		openClusterModal();
	};

	const closeClusterModalHandler = () => {
		closeClusterModal();
		setSelectedCluster(null);
	};

	return {
		selectedMarker,
		calloutVisible: isVisible,
		handleMarkerPress,
		closeCallout,
		selectedCluster,
		clusterModalVisible: isClusterModalVisible,
		handleClusterPress,
		closeClusterModal: closeClusterModalHandler
	};
}
