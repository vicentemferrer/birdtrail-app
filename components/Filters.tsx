import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FiltersContext } from '@/contexts/context';
import useModal from '@/hooks/useModal';

import { COLORS } from '@/lib/constants';
import { SpeciesOption } from '@/lib/types';

import Button from './Button';
import Icon, { IconComponentType } from './Icon';

const { width } = Dimensions.get('window');

type Props = {
	dataset: SpeciesOption[];
};

export default function Filters({ dataset }: Props) {
	const { isVisible, openModal, closeModal } = useModal();
	const { filters, shouldReset, setSelectedSpecies, resetFilters } = useContext(FiltersContext);

	const handleSelect = (specie: string) => {
		setSelectedSpecies(specie);
		closeModal();
	};

	return (
		<>
			<View style={styles.container}>
				<Button variant='outline' size='icon' onPress={openModal}>
					<Icon IconComponent={Ionicons as IconComponentType} iconName='filter' iconSize={24} />
				</Button>

				<Button
					variant='outline'
					size='icon'
					style={{ display: shouldReset ? 'flex' : 'none' }}
					onPress={resetFilters}>
					<Icon
						IconComponent={Ionicons as IconComponentType}
						iconName='refresh-outline'
						iconSize={24}
					/>
				</Button>
			</View>

			<Modal visible={isVisible} animationType='fade' transparent onRequestClose={closeModal}>
				<Pressable style={styles.overlay} onPress={closeModal}>
					<View style={styles.modal}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>Select Species</Text>
							<Pressable style={styles.closeButton} onPress={closeModal}>
								<FontAwesome5 name='times' size={24} color={COLORS.woodBrown} />
							</Pressable>
						</View>

						<ScrollView style={styles.speciesList}>
							<Pressable
								style={[
									styles.speciesItem,
									filters.currSpecies === '' && styles.speciesItemSelected
								]}
								onPress={() => handleSelect('')}>
								<View style={styles.speciesContent}>
									<Text style={styles.speciesText}>All</Text>
								</View>
								{filters.currSpecies === '' && (
									<FontAwesome5 name='check' size={20} color={COLORS.mossGreen} />
								)}
							</Pressable>

							{dataset.map((specie) => (
								<Pressable
									key={specie.code}
									style={[
										styles.speciesItem,
										filters.currSpecies === specie.code && styles.speciesItemSelected
									]}
									onPress={() => handleSelect(specie.code)}>
									<View style={styles.speciesContent}>
										<Text style={styles.speciesText}>{specie.name}</Text>
									</View>
									{filters.currSpecies === specie.code && (
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
	container: {
		position: 'absolute',
		gap: 10,
		padding: 20,
		right: 0
	},
	selector: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: '#E5E5E5',
		borderRadius: 8,
		backgroundColor: COLORS.white,
		minHeight: 48
	},
	selectorError: {
		borderColor: COLORS.earth
	},
	selectorContent: {
		flex: 1
	},
	selectedSpecies: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	selectedSpeciesText: {
		fontSize: 16,
		color: COLORS.woodBrown,
		fontWeight: '500'
	},
	placeholder: {
		fontSize: 16,
		color: COLORS.earthLight
	},
	errorText: {
		fontSize: 14,
		color: COLORS.earth,
		marginTop: 4,
		marginLeft: 4
	},
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
	speciesList: {
		maxHeight: 300
	},
	speciesItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.earthLight
	},
	speciesItemSelected: {
		backgroundColor: COLORS.softBlueLight
	},
	speciesContent: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12
	},
	speciesText: {
		fontSize: 16,
		color: COLORS.woodBrown,
		fontWeight: '500'
	}
});
