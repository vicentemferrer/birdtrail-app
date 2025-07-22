import useFilters from '@/hooks/useFilters';
import { ReactNode } from 'react';
import { FiltersContext } from './context';

type Props = {
	children: ReactNode;
};

export default function FiltersProvider({ children }: Props) {
	const { selectedSpecies, setSelectedSpecies } = useFilters();

	return (
		<FiltersContext.Provider value={{ selectedSpecies, setSelectedSpecies }}>
			{children}
		</FiltersContext.Provider>
	);
}
