import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { Marker, MarkerPressEvent } from 'react-native-maps';

import { Coords } from '@/lib/types';

type Props = {
	coordinate: Coords;
	onPress: (event: MarkerPressEvent) => void;
};

export default function CustomMarker({ coordinate, onPress }: Props) {
	return (
		<Marker coordinate={coordinate} onPress={onPress}>
			<View style={{ position: 'relative' }}>
				<View style={styles.marker}>
					<MaterialCommunityIcons name='bird' size={16} color='#ffffff' />
				</View>
			</View>
		</Marker>
	);
}

const styles = StyleSheet.create({
	marker: {
		width: 32,
		height: 32,
		borderRadius: 16,
		borderWidth: 2,
		borderColor: '#ffffff',
		backgroundColor: '#558B2F', // sighting?.verified ? '#558B2F' : '#8D6E63',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	}
});
