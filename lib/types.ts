export interface BirdObservationProperties {
	species: string;
	date: string;
	time: string;
	observer: string;
	location: string;
	notes?: string;
	imgUrl?: string;
	verified: boolean;
}

export interface PointGeometry {
	type: 'Point';
	coordinates: [number, number];
}

export interface BirdObservationFeature {
	type: 'Feature';
	properties: BirdObservationProperties;
	geometry: PointGeometry;
}

export type BirdObservations = BirdObservationFeature[];

export interface BirdsGeoJSON {
	type: 'FeatureCollection';
	features: BirdObservations;
}

export interface APIObservation {
	speciesCode: string;
	comName: string;
	sciName: string;
	locId: string;
	locName: string;
	obsDt: string;
	howMany: number;
	lat: number;
	lng: number;
	obsValid: boolean;
	obsReviewed: boolean;
	locationPrivate: boolean;
	subId: string;
}

export interface SpeciesOption {
	code: string;
	name: string;
}

export interface Coords {
	latitude: number;
	longitude: number;
}
