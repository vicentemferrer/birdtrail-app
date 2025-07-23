import { useRef, useState } from 'react';

import { BirdObservations } from '@/lib/types';

const initialState = { currSpecies: '' };

export default function useFilters(birds: BirdObservations) {
	const [filters, setFilters] = useState<typeof initialState>(initialState);
	const resetRef = useRef<boolean>(false);

	const birdsSpecies: Set<string> = new Set(birds.map((bird) => bird.properties.species));

	const filteredBirds =
		filters.currSpecies.length !== 0
			? birds.filter((bird) => bird.properties.species === filters.currSpecies)
			: [...birds];

	const species = Array.from(birdsSpecies);

	const setSelectedSpecies = (newSpecies: string) => {
		resetRef.current = newSpecies !== initialState.currSpecies;
		setFilters((prevState) => ({ ...prevState, currSpecies: newSpecies }));
	};

	const resetFilters = () => {
		setFilters(initialState);
		resetRef.current = false;
	};

	return {
		filteredBirds,
		species,
		filters,
		shouldReset: resetRef.current,
		setSelectedSpecies,
		resetFilters
	};
}
