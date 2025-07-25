import { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MarkerPressEvent, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { CalloutContext } from '@/contexts/context';
import useClustering from '@/hooks/useClustering';
import { Cluster } from '@/lib/clustering';
import { BirdObservationFeature, BirdObservations } from '@/lib/types';

import ClusterMarker from '@/components/ClusterMarker';
import CustomMarker from '@/components/CustomMarker';

type Props = {
	currRegion: Region;
	dataset: BirdObservations;
	enableClustering?: boolean;
	clusterDistance?: number;
};

export default function Map({
	currRegion,
	dataset,
	enableClustering = true,
	clusterDistance = 5
}: Props) {
	const { handleMarkerPress } = useContext(CalloutContext);
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

	const handleClusterPress = (event: MarkerPressEvent, cluster: Cluster) => {
		const firstBird = cluster.points[0]?.feature;
		if (firstBird) {
			handleMarkerPress(firstBird);
		}

		// Alternativamente, podrías hacer zoom al área del cluster:
		// const region = {
		//   latitude: cluster.center.latitude,
		//   longitude: cluster.center.longitude,
		//   latitudeDelta: Math.abs(cluster.bounds.maxLat - cluster.bounds.minLat) * 1.2,
		//   longitudeDelta: Math.abs(cluster.bounds.maxLng - cluster.bounds.minLng) * 1.2,
		// };
		// mapRef.current?.animateToRegion(region, 1000);
	};

	return (
		<MapView
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={currRegion}
			initialRegion={currRegion}
			onRegionChangeComplete={handleRegionChangeComplete}>
			{clusters.map((cluster) => (
				<ClusterMarker key={cluster.id} cluster={cluster} onPress={handleClusterPress} />
			))}

			{singleMarkers.map((bird: BirdObservationFeature, i) => (
				<CustomMarker
					key={`single-${i}`}
					coordinate={{
						latitude: bird.geometry.coordinates[1],
						longitude: bird.geometry.coordinates[0]
					}}
					onPress={handleMarkerPress.bind(null, bird)}
					verified={bird.properties.verified}
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
