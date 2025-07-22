import { useEffect, useState } from 'react';

import { BirdObservations } from '@/lib/types';

import { features } from '@/data/birds.json';

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
