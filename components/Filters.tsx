import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FiltersContext } from '@/contexts/context';
import useModal from '@/hooks/useModal';
import Button from './Button';
import Icon, { IconComponentType } from './Icon';

const { width } = Dimensions.get('window');

type Props = {
	dataset: string[];
};

export default function Filters({ dataset }: Props) {
	const { isVisible, openModal, closeModal } = useModal();
	const { selectedSpecies, setSelectedSpecies } = useContext(FiltersContext);

	const handleSelect = (specie: string) => {
		setSelectedSpecies(specie);
		closeModal();
	};

	return (
		<>
			<Button variant='outline' size='icon' style={{ position: 'absolute' }} onPress={openModal}>
				<Icon IconComponent={Ionicons as IconComponentType} iconName='filter'></Icon>
			</Button>

			<Modal visible={isVisible} animationType='fade' transparent onRequestClose={closeModal}>
				<Pressable style={styles.overlay} onPress={closeModal}>
					<View style={styles.modal}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>Select Category</Text>
							<Pressable style={styles.closeButton} onPress={closeModal}>
								<FontAwesome5 name='times' size={24} color='#666666' />
							</Pressable>
						</View>

						<ScrollView style={styles.categoriesList}>
							<Pressable style={[styles.categoryItem]} onPress={() => handleSelect('')}>
								<View style={styles.categoryContent}>
									<Text style={styles.categoryText}>All</Text>
								</View>
							</Pressable>

							{dataset.map((specie, i) => (
								<Pressable
									key={i}
									style={[
										styles.categoryItem,
										selectedSpecies === specie && styles.categoryItemSelected
									]}
									onPress={() => handleSelect(specie)}>
									<View style={styles.categoryContent}>
										<Text style={styles.categoryText}>{specie}</Text>
									</View>
									{selectedSpecies === specie && (
										<FontAwesome5 name='check' size={20} color='#3A5BA0' />
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
		marginBottom: 16
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
		backgroundColor: '#FFFFFF',
		minHeight: 48
	},
	selectorError: {
		borderColor: '#E53E3E'
	},
	selectorContent: {
		flex: 1
	},
	selectedCategory: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	selectedCategoryText: {
		fontSize: 16,
		color: '#333333',
		fontWeight: '500'
	},
	placeholder: {
		fontSize: 16,
		color: '#A0A0A0'
	},
	errorText: {
		fontSize: 14,
		color: '#E53E3E',
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
		backgroundColor: '#FFFFFF',
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
		borderBottomColor: '#F0F0F0'
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#3A5BA0'
	},
	closeButton: {
		padding: 4
	},
	categoriesList: {
		maxHeight: 300
	},
	categoryItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#F5F5F5'
	},
	categoryItemSelected: {
		backgroundColor: '#F0F4FF'
	},
	categoryContent: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12
	},
	categoryText: {
		fontSize: 16,
		color: '#333333',
		fontWeight: '500'
	}
});
