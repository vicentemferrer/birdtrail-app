import useMarkerData from '@/hooks/useMarkerData';
import { ReactNode } from 'react';
import { CalloutContext } from './context';

type Props = {
	children: ReactNode;
};

export default function CalloutProvider({ children }: Props) {
	const { selectedMarker, calloutVisible, handleMarkerPress, closeCallout } = useMarkerData();

	return (
		<CalloutContext.Provider
			value={{ selectedMarker, calloutVisible, handleMarkerPress, closeCallout }}>
			{children}
		</CalloutContext.Provider>
	);
}
