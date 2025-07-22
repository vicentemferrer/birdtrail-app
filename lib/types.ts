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

export interface Coords {
	latitude: number;
	longitude: number;
}
