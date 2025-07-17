export interface BirdObservationProperties {
	species: string;
	date: string;
	observer: string;
	notes?: string;
	imgUrl?: string;
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
