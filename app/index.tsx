import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Region } from 'react-native-maps';

const mainRegion: Region = {
	latitude: -42.65,
	longitude: -73.85,
	latitudeDelta: 0.5,
	longitudeDelta: 1.25
};

export default function App() {
	return (
		<View style={styles.container}>
			<MapView style={styles.map} region={mainRegion} initialRegion={mainRegion} />
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
