import { useEffect, useState } from 'react';

import { features } from '@/data/birds.json';
import { BirdObservations } from '@/lib/types';

export default function useBirds() {
	const [birds, setBirds] = useState<BirdObservations>([] as BirdObservations);

	useEffect(() => {
		async function getBirds() {
			setBirds(features as BirdObservations);
		}

		getBirds();
	}, []);

	return { birds };
}
