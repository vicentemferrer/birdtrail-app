export async function parseJson(res: Response) {
	return await res.json();
}

export function parseDate(
	date: string,
	lang = 'en-US',
	options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }
) {
	return new Date(date).toLocaleDateString(lang, { ...options });
}
