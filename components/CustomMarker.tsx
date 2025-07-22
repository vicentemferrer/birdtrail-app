import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { Marker, MarkerPressEvent } from 'react-native-maps';

import { COLORS } from '@/lib/constants';
import { Coords } from '@/lib/types';

type Props = {
	coordinate: Coords;
	onPress: (event: MarkerPressEvent) => void;
	verified?: boolean;
};

export default function CustomMarker({ coordinate, onPress, verified = false }: Props) {
	return (
		<Marker coordinate={coordinate} onPress={onPress}>
			<View style={{ position: 'relative' }}>
				<View
					style={[styles.marker, { backgroundColor: verified ? COLORS.mossGreen : COLORS.earth }]}>
					<MaterialCommunityIcons name='bird' size={16} color={COLORS.white} />
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
		borderColor: COLORS.white,
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
