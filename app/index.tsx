import { View } from 'react-native';
import { Region } from 'react-native-maps';

import CalloutProvider from '@/contexts/CalloutProvider';
import useBirds from '@/hooks/useBirds';

import SafeView from '@/components/core/SafeView';
import CustomCallout from '@/components/CustomCallout';
import Filters from '@/components/Filters';
import Map from '@/components/Map';
import { FiltersContext } from '@/contexts/context';
import { useContext } from 'react';

const mainRegion: Region = {
	latitude: -42.65,
	longitude: -73.85,
	latitudeDelta: 0.5,
	longitudeDelta: 1.25
};

export default function App() {
	const { birds } = useBirds();
	const { selectedSpecies } = useContext(FiltersContext);

	const birdsSpecies: Set<string> = new Set(birds.map((bird) => bird.properties.species));

	const species = Array.from(birdsSpecies);

	const filteredBirds =
		selectedSpecies.length !== 0
			? birds.filter((bird) => bird.properties.species === selectedSpecies)
			: [...birds];

	return (
		<SafeView>
			<View style={{ position: 'relative', zIndex: 1 }}>
				<Filters dataset={species} />
			</View>
			<CalloutProvider>
				<Map currRegion={mainRegion} dataset={filteredBirds} />
				<CustomCallout />
			</CalloutProvider>
		</SafeView>
	);
}
