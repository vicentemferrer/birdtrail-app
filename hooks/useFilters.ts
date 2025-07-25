import { useRef, useState } from 'react';

import { APIObservation, SpeciesOption } from '@/lib/types';

const initialState = { currSpecies: '' };

export default function useFilters(birds: APIObservation[]) {
	const [filters, setFilters] = useState<typeof initialState>(initialState);
	const resetRef = useRef<boolean>(false);

	const birdsSpeciesMap = new Map<string, SpeciesOption>();

	birds.forEach((bird) => {
		if (!birdsSpeciesMap.has(bird.speciesCode)) {
			birdsSpeciesMap.set(bird.speciesCode, {
				code: bird.speciesCode,
				name: bird.comName
			});
		}
	});

	const filteredBirds =
		filters.currSpecies.length !== 0
			? birds.filter((bird) => bird.speciesCode === filters.currSpecies)
			: [...birds];

	const species = Array.from(birdsSpeciesMap.values()).sort((a, b) => a.name.localeCompare(b.name));

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
