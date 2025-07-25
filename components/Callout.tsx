import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { CalloutContext } from '@/contexts/context';

import { COLORS } from '@/lib/constants';
import { parseTime } from '@/lib/helpers';

import Icon, { IconComponentType } from './Icon';

export default function Callout() {
	const { selectedMarker, calloutVisible, closeCallout } = useContext(CalloutContext);

	return (
		<Modal visible={calloutVisible} animationType='slide' onRequestClose={closeCallout} transparent>
			<Pressable onPress={closeCallout} style={{ flex: 1 }}>
				<View style={styles.container}>
					<View style={styles.card}>
						<View style={styles.cardContent}>
							<View style={styles.header}>
								<View style={styles.titleContainer}>
									<Text style={styles.species}>{selectedMarker?.comName}</Text>
									<View style={styles.locationContainer}>
										<Icon
											IconComponent={MaterialIcons as IconComponentType}
											iconName='location-on'
											iconSize={12}
											iconColor={COLORS.softBlue}
										/>
										<Text style={styles.location}>{selectedMarker?.locName}</Text>
									</View>
								</View>
								<Pressable
									style={styles.closeButton}
									onPress={closeCallout}
									android_ripple={{ color: `${COLORS.paperCream}80`, borderless: true }}>
									<Text style={styles.closeButtonText}>✕</Text>
								</Pressable>
							</View>

							<View style={styles.infoContainer}>
								<View style={styles.infoItem}>
									<Ionicons name='eye' size={12} color={COLORS.woodBrown} />
									<Text style={styles.infoText}>{selectedMarker?.howMany}</Text>
								</View>
								<View style={styles.infoItem}>
									<Icon
										IconComponent={MaterialIcons as IconComponentType}
										iconName='schedule'
										iconSize={12}
										iconColor={COLORS.woodBrown}
									/>
									<Text style={styles.infoText}>{parseTime(selectedMarker?.obsDt)}</Text>
								</View>
							</View>

							<View style={styles.footer}>
								<View
									style={[
										styles.badge,
										selectedMarker?.obsReviewed ? styles.badgeVerified : styles.badgePending
									]}>
									<Text
										style={[
											styles.badgeText,
											selectedMarker?.obsReviewed
												? styles.badgeTextVerified
												: styles.badgeTextPending
										]}>
										{selectedMarker?.obsReviewed ? 'Verified' : 'Pending'}
									</Text>
								</View>
								<Pressable
									style={styles.detailsButton}
									android_ripple={{ color: `${COLORS.softBlue}20` }}>
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
		backgroundColor: `${COLORS.paperCream}F5`,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: COLORS.paperCream,
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
		color: COLORS.mossGreen,
		marginBottom: 4
	},
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4
	},
	location: {
		fontSize: 14,
		color: COLORS.woodBrown
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
		color: COLORS.earth,
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
		color: COLORS.woodBrown
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
		backgroundColor: COLORS.mossGreen
	},
	badgePending: {
		backgroundColor: COLORS.earth
	},
	badgeText: {
		fontSize: 12,
		fontWeight: '500'
	},
	badgeTextVerified: {
		color: COLORS.white
	},
	badgeTextPending: {
		color: COLORS.white
	},
	detailsButton: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: COLORS.softBlue,
		backgroundColor: COLORS.transparent
	},
	detailsButtonText: {
		fontSize: 14,
		color: COLORS.woodBrown,
		fontWeight: '500'
	}
});
