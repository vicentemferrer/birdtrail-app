import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { CalloutContext } from '@/contexts/context';
import { BirdObservationFeature, BirdObservations } from '@/lib/types';

import CustomMarker from '@/components/CustomMarker';

type Props = {
	currRegion: Region;
	dataset: BirdObservations;
};

export default function Map({ currRegion, dataset }: Props) {
	const { handleMarkerPress } = useContext(CalloutContext);

	return (
		<MapView
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={currRegion}
			initialRegion={currRegion}>
			{dataset.map((bird: BirdObservationFeature, i) => (
				<CustomMarker
					key={i}
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
