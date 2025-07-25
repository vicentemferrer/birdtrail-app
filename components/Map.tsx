import { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MarkerPressEvent, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { CalloutContext } from '@/contexts/context';
import useClustering from '@/hooks/useClustering';

import { Cluster } from '@/lib/clustering';
import { getCoords } from '@/lib/helpers';
import { APIObservation } from '@/lib/types';

import ClusterMarker from '@/components/ClusterMarker';
import CustomMarker from '@/components/CustomMarker';

type Props = {
	currRegion: Region;
	dataset: APIObservation[];
	enableClustering?: boolean;
	clusterDistance?: number;
};

export default function Map({
	currRegion,
	dataset,
	enableClustering = true,
	clusterDistance = 5
}: Props) {
	const { handleMarkerPress, handleClusterPress } = useContext(CalloutContext);
	const [currentRegion, setCurrentRegion] = useState<Region>(currRegion);

	const { clusters, singleMarkers } = useClustering({
		birds: dataset,
		region: currentRegion,
		minDistance: clusterDistance,
		enableClustering
	});

	const handleRegionChangeComplete = (region: Region) => {
		setCurrentRegion(region);
	};

	const onPress = (event: MarkerPressEvent, cluster: Cluster) => {
		handleClusterPress(cluster);
	};

	return (
		<MapView
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={currRegion}
			initialRegion={currRegion}
			onRegionChangeComplete={handleRegionChangeComplete}>
			{clusters.map((cluster) => (
				<ClusterMarker key={cluster.id} cluster={cluster} onPress={onPress} />
			))}

			{singleMarkers.map((bird: APIObservation, i) => (
				<CustomMarker
					key={`single-${i}`}
					coordinate={getCoords(bird)}
					onPress={handleMarkerPress.bind(null, bird)}
					verified={bird.obsReviewed}
				/>
			))}
		</MapView>
	);
}

const styles = StyleSheet.create({
	map: {
		width: '100%',
		height: '100%'
	}
});
