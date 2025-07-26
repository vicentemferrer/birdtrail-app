export const COLORS = {
	earth: '#8D6E63',
	mossGreen: '#558B2F',
	paperCream: '#F5F5DC',
	woodBrown: '#6D4C41',
	softBlue: '#81D4FA',

	earthLight: '#A1887F',
	mossGreenLight: '#689F38',
	woodBrownLight: '#8D6E63',
	softBlueLight: '#B3E5FC',

	white: '#FFFFFF',
	transparent: 'transparent'
} as const;

export enum ChiloeSubregion {
	ANCUD = 'Ancud',
	CASTRO = 'Castro',
	CHONCHI = 'Chonchi',
	CURACO_DE_VELEZ = 'Curaco de Vélez',
	DALCAHUE = 'Dalcahue',
	PUQUELDON = 'Puqueldón',
	QUEILEN = 'Queilén',
	QUELLON = 'Quellón',
	QUEMCHI = 'Quemchi',
	QUINCHAO = 'Quinchao'
}

export enum ChiloeSubregionCode {
	ANCUD = 'CL-LL-ANC',
	CASTRO = 'CL-LL-CAS',
	CHONCHI = 'CL-LL-CHO',
	CURACO_DE_VELEZ = 'CL-LL-CUR',
	DALCAHUE = 'CL-LL-DAL',
	PUQUELDON = 'CL-LL-PUQ',
	QUEILEN = 'CL-LL-QIL',
	QUELLON = 'CL-LL-QLL',
	QUEMCHI = 'CL-LL-QMC',
	QUINCHAO = 'CL-LL-QNC'
}

export type CompatibleSubregionKeys = keyof typeof ChiloeSubregion &
	keyof typeof ChiloeSubregionCode;
