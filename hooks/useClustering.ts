import { useMemo, useState } from 'react';
import { Region } from 'react-native-maps';

import { Cluster, clusterMarkers, filterClustersInRegion, getZoomLevel } from '@/lib/clustering';
import { BirdObservationFeature } from '@/lib/types';

interface UseClusteringProps {
	birds: BirdObservationFeature[];
	region: Region;
	minDistance?: number;
	enableClustering?: boolean;
}

interface ClusteringState {
	clusters: Cluster[];
	singleMarkers: BirdObservationFeature[];
	isLoading: boolean;
}

export default function useClustering({
	birds,
	region,
	minDistance = 40,
	enableClustering = true
}: UseClusteringProps): ClusteringState {
	const [isLoading, setIsLoading] = useState(false);

	const { clusters, singleMarkers } = useMemo(() => {
		if (!enableClustering || birds.length === 0) {
			return {
				clusters: [],
				singleMarkers: birds
			};
		}

		setIsLoading(true);

		try {
			const zoom = getZoomLevel(region.latitudeDelta, region.longitudeDelta);

			const allClusters = clusterMarkers(birds, minDistance, zoom);

			const visibleClusters = filterClustersInRegion(allClusters, region);

			const clustersWithMultiplePoints = visibleClusters.filter(
				(cluster) => cluster.points.length > 1
			);

			const singlePointClusters = visibleClusters.filter((cluster) => cluster.points.length === 1);

			const individualMarkers = singlePointClusters.map((cluster) => cluster.points[0].feature);

			return {
				clusters: clustersWithMultiplePoints,
				singleMarkers: individualMarkers
			};
		} finally {
			setIsLoading(false);
		}
	}, [birds, region, minDistance, enableClustering]);

	return {
		clusters,
		singleMarkers,
		isLoading
	};
}
