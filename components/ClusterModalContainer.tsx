import { useContext } from 'react';

import { CalloutContext } from '@/contexts/context';
import ClusterModal from './ClusterModal';

export default function ClusterModalContainer() {
	const { selectedCluster, clusterModalVisible, closeClusterModal, handleMarkerPress } =
		useContext(CalloutContext);

	return (
		<ClusterModal
			visible={clusterModalVisible}
			cluster={selectedCluster}
			onClose={closeClusterModal}
			onSelectBird={handleMarkerPress}
		/>
	);
}
