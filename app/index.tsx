import { StyleSheet, View } from 'react-native';
import MapView, { Geojson, Region } from 'react-native-maps';

import CustomMarker from '@/components/CustomMarker';
import data from '@/data/birds.json';
import { BirdsGeoJSON } from '@/lib/types';

const mainRegion: Region = {
	latitude: -42.65,
	longitude: -73.85,
	latitudeDelta: 0.5,
	longitudeDelta: 1.25
};

export default function App() {
	return (
		<View style={styles.container}>
			<MapView provider='google' style={styles.map} region={mainRegion} initialRegion={mainRegion}>
				<Geojson geojson={data as BirdsGeoJSON} markerComponent={<CustomMarker />} />
				{/* {birds.map((bird: BirdObservationFeature, i) => (
					<Marker
						key={i}
						coordinate={{
							latitude: bird.geometry.coordinates[1],
							longitude: bird.geometry.coordinates[0]
						}}
						calloutAnchor={{ x: 0.5, y: 0.4 }}>
						<Callout>
							<View
								style={{
									backgroundColor: 'white',
									padding: 15,
									borderRadius: 8,
									borderColor: '#ddd',
									borderWidth: 1,
									minWidth: 200,
									alignItems: 'center'
								}}>
								<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mi texto</Text>
							</View>
						</Callout>
					</Marker>
				))} */}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		width: '100%',
		height: '100%'
	}
});
