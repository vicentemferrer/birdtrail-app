import { APIObservation } from './types';

export async function parseJson(res: Response) {
	return await res.json();
}

export function parseDate(
	dateString: string,
	lang = 'en-US',
	options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }
) {
	return new Date(dateString).toLocaleDateString(lang, { ...options });
}

export function parseTime(
	dateString: string,
	lang = 'en-US',
	options: Intl.DateTimeFormatOptions = { timeStyle: 'short', hourCycle: 'h24' }
) {
	return new Date(dateString).toLocaleTimeString(lang, { ...options });
}

export function getCoords(obs: APIObservation) {
	return { latitude: obs.lat, longitude: obs.lng };
}
