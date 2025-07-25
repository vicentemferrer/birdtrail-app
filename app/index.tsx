import { useContext } from 'react';
import { View } from 'react-native';
import { Region } from 'react-native-maps';

import CalloutProvider from '@/contexts/CalloutProvider';
import { FiltersContext } from '@/contexts/context';

import Callout from '@/components/Callout';
import ClusterModalContainer from '@/components/ClusterModalContainer';
import SafeView from '@/components/core/SafeView';
import Filters from '@/components/Filters';
import Map from '@/components/Map';

const mainRegion: Region = {
	latitude: -42.65,
	longitude: -73.85,
	latitudeDelta: 0.5,
	longitudeDelta: 1.25
};

export default function App() {
	const { filteredBirds, species } = useContext(FiltersContext);

	return (
		<SafeView>
			<View style={{ position: 'relative', zIndex: 1 }}>
				<Filters dataset={species} />
			</View>
			<CalloutProvider>
				<Map currRegion={mainRegion} dataset={filteredBirds} />
				<Callout />
				<ClusterModalContainer />
			</CalloutProvider>
		</SafeView>
	);
}
