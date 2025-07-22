import FiltersProvider from '@/contexts/FiltersProvider';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<FiltersProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</FiltersProvider>
		</SafeAreaProvider>
	);
}
