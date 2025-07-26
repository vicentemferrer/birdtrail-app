import { useEffect, useState } from 'react';

import { parseJson } from '@/lib/helpers';
import { APIObservation } from '@/lib/types';

import localData from '@/data/apiData.sample.json';
import { ChiloeSubregionCode, CompatibleSubregionKeys } from '@/lib/constants';

export default function useBirds() {
	const [selectedSubregion, setSelectedSubregion] = useState<CompatibleSubregionKeys>('ANCUD');
	const [birds, setBirds] = useState<APIObservation[]>([] as APIObservation[]);

	useEffect(() => {
		async function getBirds() {
			const endpoint = process.env.EXPO_PUBLIC_API_ENDPOINT;
			const apiKey = process.env.EXPO_PUBLIC_API_KEY;

			if (endpoint !== undefined && apiKey !== undefined && (endpoint || apiKey)) {
				const options = { headers: { 'x-ebirdapitoken': apiKey } };

				const url = endpoint.replace('{SUBREGION}', ChiloeSubregionCode[selectedSubregion]);

				const data = await fetch(url, options).then(parseJson);
				setBirds(data);
			} else {
				setBirds(localData);
			}
		}

		getBirds();
	}, [selectedSubregion]);

	const onSelect = (subregion: CompatibleSubregionKeys) => {
		setSelectedSubregion(subregion);
	};

	return { birds, selectedSubregion, onSelect };
}
