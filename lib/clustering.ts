import { BirdObservationFeature, Coords } from './types';

export interface ClusterPoint extends Coords {
	feature: BirdObservationFeature;
}

export interface Cluster {
	id: string;
	center: Coords;
	points: ClusterPoint[];
	bounds: {
		minLat: number;
		maxLat: number;
		minLng: number;
		maxLng: number;
	};
}

export function getPixelDistance(point1: Coords, point2: Coords, zoom: number = 10): number {
	const latDiff = Math.abs(point1.latitude - point2.latitude);
	const lngDiff = Math.abs(point1.longitude - point2.longitude);

	const pixelsPerDegree = (Math.pow(2, zoom) * 256) / 360;

	const latPixels = latDiff * pixelsPerDegree;
	const lngPixels = lngDiff * pixelsPerDegree * Math.cos((point1.latitude * Math.PI) / 180);

	return Math.sqrt(latPixels * latPixels + lngPixels * lngPixels);
}

export function getZoomLevel(latitudeDelta: number, longitudeDelta: number): number {
	const avgDelta = (latitudeDelta + longitudeDelta) / 2;
	return Math.max(1, Math.min(20, Math.log2(360 / avgDelta)));
}

export function clusterMarkers(
	birds: BirdObservationFeature[],
	minDistance: number = 40,
	zoom: number = 10
): Cluster[] {
	if (birds.length === 0) return [];

	const points: ClusterPoint[] = birds.map((bird) => ({
		latitude: bird.geometry.coordinates[1],
		longitude: bird.geometry.coordinates[0],
		feature: bird
	}));

	const clusters: Cluster[] = [];
	const processed = new Set<number>();

	points.forEach((point, index) => {
		if (processed.has(index)) return;

		const cluster: Cluster = {
			id: `cluster-${clusters.length}`,
			center: { ...point },
			points: [point],
			bounds: {
				minLat: point.latitude,
				maxLat: point.latitude,
				minLng: point.longitude,
				maxLng: point.longitude
			}
		};

		processed.add(index);

		points.forEach((otherPoint, otherIndex) => {
			if (processed.has(otherIndex)) return;

			const distance = getPixelDistance(point, otherPoint, zoom);

			if (distance <= minDistance) {
				cluster.points.push(otherPoint);
				processed.add(otherIndex);

				cluster.bounds.minLat = Math.min(cluster.bounds.minLat, otherPoint.latitude);
				cluster.bounds.maxLat = Math.max(cluster.bounds.maxLat, otherPoint.latitude);
				cluster.bounds.minLng = Math.min(cluster.bounds.minLng, otherPoint.longitude);
				cluster.bounds.maxLng = Math.max(cluster.bounds.maxLng, otherPoint.longitude);
			}
		});

		if (cluster.points.length > 1) {
			const avgLat = cluster.points.reduce((sum, p) => sum + p.latitude, 0) / cluster.points.length;
			const avgLng =
				cluster.points.reduce((sum, p) => sum + p.longitude, 0) / cluster.points.length;
			cluster.center = { latitude: avgLat, longitude: avgLng };
		}

		clusters.push(cluster);
	});

	return clusters;
}

export function filterClustersInRegion(
	clusters: Cluster[],
	region: {
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	}
): Cluster[] {
	const minLat = region.latitude - region.latitudeDelta / 2;
	const maxLat = region.latitude + region.latitudeDelta / 2;
	const minLng = region.longitude - region.longitudeDelta / 2;
	const maxLng = region.longitude + region.longitudeDelta / 2;

	return clusters.filter((cluster) => {
		return !(
			cluster.bounds.maxLat < minLat ||
			cluster.bounds.minLat > maxLat ||
			cluster.bounds.maxLng < minLng ||
			cluster.bounds.minLng > maxLng
		);
	});
}
