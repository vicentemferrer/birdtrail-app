import { useEffect, useState } from 'react';

import { APIObservation } from '@/lib/types';

import data from '@/data/apiData.sample.json';

export default function useBirds() {
	const [birds, setBirds] = useState<APIObservation[]>([] as APIObservation[]);

	useEffect(() => {
		async function getBirds() {
			setBirds(data);
		}

		getBirds();
	}, []);

	return { birds };
}
