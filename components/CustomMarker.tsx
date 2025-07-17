import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function MarkerComponent() {
	return (
		<View style={{ position: 'relative' }}>
			<View
				style={{
					width: 32,
					height: 32,
					borderRadius: 16,
					borderWidth: 2,
					borderColor: '#ffffff',
					backgroundColor: '#558B2F', //sighting.verified ? '#558B2F' : '#8D6E63',
					justifyContent: 'center',
					alignItems: 'center',
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5 // Para Android
				}}>
				<MaterialCommunityIcons
					name='feather'
					style={{ width: 16, height: 16, color: '#ffffff' }}
				/>
			</View>
			<View
				style={{
					position: 'absolute',
					top: -4,
					right: -4,
					width: 12,
					height: 12,
					backgroundColor: '#81D4FA',
					borderRadius: 6,
					borderWidth: 1,
					borderColor: '#ffffff'
				}}
			/>
		</View>
	);
}
