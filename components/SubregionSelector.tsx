import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FiltersContext } from '@/contexts/context';
import useModal from '@/hooks/useModal';

import { COLORS, ChiloeSubregion, CompatibleSubregionKeys } from '@/lib/constants';

import Button from './Button';
import Icon, { IconComponentType } from './Icon';

const { width } = Dimensions.get('window');

export default function SubregionSelector() {
	const { isVisible, openModal, closeModal } = useModal();
	const { selectedSubregion, onSelect } = useContext(FiltersContext);

	const handleSelect = (subregion: CompatibleSubregionKeys) => {
		onSelect(subregion);
		closeModal();
	};

	const subregions = Object.entries(ChiloeSubregion) as [string, ChiloeSubregion][];

	return (
		<>
			<Button variant='outline' size='icon' onPress={openModal}>
				<Icon IconComponent={Ionicons as IconComponentType} iconName='location' iconSize={24} />
			</Button>

			<Modal visible={isVisible} animationType='fade' transparent onRequestClose={closeModal}>
				<Pressable style={styles.overlay} onPress={closeModal}>
					<View style={styles.modal}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>Select Subregion</Text>
							<Pressable style={styles.closeButton} onPress={closeModal}>
								<FontAwesome5 name='times' size={24} color={COLORS.woodBrown} />
							</Pressable>
						</View>

						<ScrollView style={styles.subregionsList}>
							{subregions.map(([key, value]) => (
								<Pressable
									key={key}
									style={[
										styles.subregionItem,
										selectedSubregion === key && styles.subregionItemSelected
									]}
									onPress={() => handleSelect(key as CompatibleSubregionKeys)}>
									<View style={styles.subregionContent}>
										<Text style={styles.subregionText}>{value}</Text>
									</View>
									{selectedSubregion === key && (
										<FontAwesome5 name='check' size={20} color={COLORS.mossGreen} />
									)}
								</Pressable>
							))}
						</ScrollView>
					</View>
				</Pressable>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modal: {
		backgroundColor: COLORS.paperCream,
		borderRadius: 12,
		width: width * 0.85,
		maxHeight: '70%',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		elevation: 5,
		overflow: 'hidden'
	},
	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.earthLight
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: COLORS.mossGreen
	},
	closeButton: {
		padding: 4
	},
	subregionsList: {
		maxHeight: 300
	},
	subregionItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.earthLight
	},
	subregionItemSelected: {
		backgroundColor: COLORS.softBlueLight
	},
	subregionContent: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12
	},
	subregionText: {
		fontSize: 16,
		color: COLORS.woodBrown,
		fontWeight: '500'
	}
});
