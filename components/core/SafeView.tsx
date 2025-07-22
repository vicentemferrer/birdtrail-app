import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
	children: ReactNode;
	style?: object;
};

export default function SafeView({ children, style }: Props) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }, style]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
