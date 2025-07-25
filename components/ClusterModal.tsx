import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Cluster } from '@/lib/clustering';
import { COLORS } from '@/lib/constants';
import { parseDate } from '@/lib/helpers';
import { BirdObservationFeature } from '@/lib/types';

type Props = {
	visible: boolean;
	cluster: Cluster | null;
	onClose: () => void;
	onSelectBird: (bird: BirdObservationFeature) => void;
};

export default function ClusterModal({ visible, cluster, onClose, onSelectBird }: Props) {
	if (!cluster) return null;

	const orderedPoints = [...cluster.points].sort((a, b) =>
		new Date(a.feature.properties.date) < new Date(b.feature.properties.date) ? 0 : -1
	);

	const renderBirdItem = ({ item }: { item: any }) => {
		const bird = item.feature;
		return (
			<TouchableOpacity
				style={styles.birdItem}
				onPress={() => {
					onSelectBird(bird);
					onClose();
				}}>
				<View style={styles.birdHeader}>
					<MaterialCommunityIcons
						name='bird'
						size={20}
						color={bird.properties.verified ? COLORS.mossGreen : COLORS.earth}
					/>
					<Text style={styles.speciesText}>{bird.properties.species}</Text>
					{bird.properties.verified && (
						<MaterialCommunityIcons name='check-circle' size={16} color={COLORS.mossGreen} />
					)}
				</View>
				<Text style={styles.observerText}>By: {bird.properties.observer}</Text>
				<Text style={styles.dateText}>
					{parseDate(bird.properties.date)} - {bird.properties.time}
				</Text>
				<Text style={styles.locationText}>{bird.properties.location}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<Modal visible={visible} animationType='slide' transparent={true} onRequestClose={onClose}>
			<View style={styles.modalOverlay}>
				<View style={styles.modalContent}>
					<View style={styles.modalHeader}>
						<Text style={styles.modalTitle}>
							Observations in this area ({cluster.points.length})
						</Text>
						<TouchableOpacity onPress={onClose} style={styles.closeButton}>
							<MaterialCommunityIcons name='close' size={24} color={COLORS.woodBrown} />
						</TouchableOpacity>
					</View>

					<FlatList
						data={orderedPoints}
						renderItem={renderBirdItem}
						keyExtractor={(item, index) => `cluster-bird-${index}`}
						style={styles.birdsList}
					/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'flex-end'
	},
	modalContent: {
		backgroundColor: COLORS.white,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		maxHeight: '70%',
		paddingTop: 20
	},
	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#E0E0E0'
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: COLORS.woodBrown
	},
	closeButton: {
		padding: 5
	},
	birdsList: {
		paddingHorizontal: 20
	},
	birdItem: {
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#F0F0F0'
	},
	birdHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5
	},
	speciesText: {
		fontSize: 16,
		fontWeight: '600',
		color: COLORS.woodBrown,
		marginLeft: 8,
		flex: 1
	},
	observerText: {
		fontSize: 14,
		color: COLORS.earth,
		marginLeft: 28
	},
	dateText: {
		fontSize: 12,
		color: '#666',
		marginLeft: 28,
		marginTop: 2
	},
	locationText: {
		fontSize: 12,
		color: '#666',
		marginLeft: 28,
		fontStyle: 'italic'
	}
});
