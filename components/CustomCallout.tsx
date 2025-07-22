import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { CalloutContext } from '@/contexts/context';

export default function CustomCallout() {
	const { selectedMarker, calloutVisible, closeCallout } = useContext(CalloutContext);

	return (
		<Modal visible={calloutVisible} animationType='slide' onRequestClose={closeCallout} transparent>
			<Pressable onPress={closeCallout} style={{ flex: 1 }}>
				<View style={styles.container}>
					<View style={styles.card}>
						<View style={styles.cardContent}>
							{/* Header con título y botón cerrar */}
							<View style={styles.header}>
								<View style={styles.titleContainer}>
									<Text style={styles.species}>{selectedMarker?.properties.species}</Text>
									{/* <View style={styles.locationContainer}>
                <MapPin size={12} color="#6B7280" />
                <Text style={styles.location}>{selectedMarker}</Text>
              </View> */}
								</View>
								<Pressable
									style={styles.closeButton}
									onPress={closeCallout}
									android_ripple={{ color: '#E5E7EB', borderless: true }}>
									<Text style={styles.closeButtonText}>✕</Text>
								</Pressable>
							</View>

							{/* Información del observador y tiempo */}
							<View style={styles.infoContainer}>
								<View style={styles.infoItem}>
									<Ionicons name='eye' size={12} color='#6B7280' />
									<Text style={styles.infoText}>{selectedMarker?.properties.observer}</Text>
								</View>
								{/* <View style={styles.infoItem}>
              <Clock size={12} color="#6B7280" />
              <Text style={styles.infoText}>{selectedSighting.time}</Text>
            </View> */}
							</View>

							{/* Footer con badge y botón */}
							<View style={styles.footer}>
								{/* <View style={[
              styles.badge,
              selectedSighting.verified ? styles.badgeVerified : styles.badgePending
            ]}>
              <Text style={[
                styles.badgeText,
                selectedSighting.verified ? styles.badgeTextVerified : styles.badgeTextPending
              ]}>
                {selectedSighting.verified ? "Verificado" : "Pendiente"}
              </Text>
            </View> */}
								<Pressable style={styles.detailsButton} android_ripple={{ color: '#81D4FA20' }}>
									<Text style={styles.detailsButtonText}>See details</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</View>
			</Pressable>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
		padding: 16
	},
	card: {
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#F5F5DC',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5
	},
	cardContent: {
		padding: 16
	},
	header: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginBottom: 12
	},
	titleContainer: {
		flex: 1
	},
	species: {
		fontSize: 18,
		fontWeight: '600',
		color: '#558B2F',
		marginBottom: 4
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4
	},
	location: {
		fontSize: 14,
		color: '#6B7280'
	},
	closeButton: {
		padding: 8,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 36,
		minHeight: 36
	},
	closeButtonText: {
		fontSize: 16,
		color: '#9CA3AF',
		fontWeight: '500'
	},
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
		marginBottom: 12
	},
	infoItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4
	},
	infoText: {
		fontSize: 14,
		color: '#6B7280'
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	badge: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20
	},
	badgeVerified: {
		backgroundColor: '#558B2F'
	},
	badgePending: {
		backgroundColor: '#8D6E63'
	},
	badgeText: {
		fontSize: 12,
		fontWeight: '500'
	},
	badgeTextVerified: {
		color: '#FFFFFF'
	},
	badgeTextPending: {
		color: '#FFFFFF'
	},
	detailsButton: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#81D4FA',
		backgroundColor: 'transparent'
	},
	detailsButtonText: {
		fontSize: 14,
		color: '#6D4C41',
		fontWeight: '500'
	}
});
