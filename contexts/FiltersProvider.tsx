import { ReactNode } from 'react';

import useBirds from '@/hooks/useBirds';
import useFilters from '@/hooks/useFilters';
import { FiltersContext } from './context';

type Props = {
	children: ReactNode;
};

export default function FiltersProvider({ children }: Props) {
	const { birds } = useBirds();

	const { filteredBirds, species, filters, shouldReset, setSelectedSpecies, resetFilters } =
		useFilters(birds);

	return (
		<FiltersContext.Provider
			value={{ filteredBirds, species, filters, shouldReset, setSelectedSpecies, resetFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}
