import { useState } from 'react';

export default function useFilters() {
	const [selectedSpecies, setSelectedSpecies] = useState<string>('');

	return { selectedSpecies, setSelectedSpecies };
}
