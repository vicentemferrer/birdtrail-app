import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Marker, MarkerPressEvent } from 'react-native-maps';

import { Cluster } from '@/lib/clustering';
import { COLORS } from '@/lib/constants';

type Props = {
	cluster: Cluster;
	onPress: (event: MarkerPressEvent, cluster: Cluster) => void;
};

export default function ClusterMarker({ cluster, onPress }: Props) {
	const pointCount = cluster.points.length;

	const getClusterSize = (count: number) => {
		if (count < 10) return 40;
		if (count < 50) return 50;
		if (count < 100) return 60;
		return 70;
	};

	const hasVerified = cluster.points.some((point) => point.feature.obsReviewed);

	const clusterSize = getClusterSize(pointCount);
	const borderRadius = clusterSize / 2;

	const handlePress = (event: MarkerPressEvent) => {
		onPress(event, cluster);
	};

	return (
		<Marker coordinate={cluster.center} onPress={handlePress}>
			<View>
				<View
					style={[
						styles.clusterMarker,
						{
							width: 32,
							height: 32,
							borderRadius,
							backgroundColor: hasVerified ? COLORS.mossGreen : COLORS.earth
						}
					]}>
					<MaterialCommunityIcons name='bird' size={16} color={COLORS.white} />
				</View>
				<Text style={[styles.clusterText, { fontSize: 9 }]}>{pointCount}</Text>
			</View>
		</Marker>
	);
}

const styles = StyleSheet.create({
	clusterMarker: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: COLORS.white,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.3,
		shadowRadius: 4
	},
	clusterText: {
		color: COLORS.white,
		fontWeight: 'bold',
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: COLORS.woodBrown,
		borderRadius: 5,
		paddingVertical: 0.25,
		paddingHorizontal: 0.95,
		textAlign: 'center'
	}
});
