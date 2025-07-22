import { useState } from 'react';

import { BirdObservations } from '@/lib/types';

export default function useFilters(birds: BirdObservations) {
	const [selectedSpecies, setSelectedSpecies] = useState<string>('');

	const birdsSpecies: Set<string> = new Set(birds.map((bird) => bird.properties.species));

	const filteredBirds =
		selectedSpecies.length !== 0
			? birds.filter((bird) => bird.properties.species === selectedSpecies)
			: [...birds];

	const species = Array.from(birdsSpecies);

	return { filteredBirds, species, selectedSpecies, setSelectedSpecies };
}
