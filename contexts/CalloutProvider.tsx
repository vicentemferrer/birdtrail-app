import { ReactNode } from 'react';

import useMarkerData from '@/hooks/useMarkerData';
import { CalloutContext } from './context';

type Props = {
	children: ReactNode;
};

export default function CalloutProvider({ children }: Props) {
	const {
		selectedMarker,
		calloutVisible,
		handleMarkerPress,
		closeCallout,
		selectedCluster,
		clusterModalVisible,
		handleClusterPress,
		closeClusterModal
	} = useMarkerData();

	return (
		<CalloutContext.Provider
			value={{
				selectedMarker,
				calloutVisible,
				handleMarkerPress,
				closeCallout,
				selectedCluster,
				clusterModalVisible,
				handleClusterPress,
				closeClusterModal
			}}>
			{children}
		</CalloutContext.Provider>
	);
}
