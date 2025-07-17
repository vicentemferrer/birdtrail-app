import { StyleSheet, View } from 'react-native';
import { Region } from 'react-native-maps';

import CalloutProvider from '@/contexts/CalloutProvider';
import useBirds from '@/hooks/useBirds';

import CustomCallout from '@/components/CustomCallout';
import Map from '@/components/Map';

const mainRegion: Region = {
	latitude: -42.65,
	longitude: -73.85,
	latitudeDelta: 0.5,
	longitudeDelta: 1.25
};

export default function App() {
	const { birds } = useBirds();

	return (
		<View style={styles.container}>
			<CalloutProvider>
				<Map currRegion={mainRegion} dataset={birds} />
				<CustomCallout />
			</CalloutProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
