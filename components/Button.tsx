import { COLORS } from '@/lib/constants';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

interface Props {
	variant?: 'primary' | 'outline' | 'secondary' | 'interactive';
	size?: 'icon' | 'small' | 'medium' | 'large';
	onPress?: () => void;
	children: ReactNode;
	style?: ViewStyle;
	disabled?: boolean;
}

export default function Button({
	variant = 'primary',
	size = 'medium',
	onPress,
	children,
	style,
	disabled = false
}: Props) {
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={({ pressed }) => [
				styles.base,
				styles[variant],
				styles[size],
				disabled && styles.disabled,
				pressed && styles[`${variant}Pressed`],
				style
			]}>
			{children}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8
	},
	primary: {
		backgroundColor: COLORS.mossGreen
	},
	outline: {
		backgroundColor: COLORS.paperCream
	},
	secondary: {
		backgroundColor: COLORS.earth
	},
	interactive: {
		backgroundColor: COLORS.softBlue
	},
	disabled: {
		opacity: 0.5
	},
	pressed: {
		opacity: 0.8
	},
	outlinePressed: {
		backgroundColor: COLORS.earth,
		color: 'white'
	},
	primaryPressed: {
		backgroundColor: COLORS.earth
	},
	interactivePressed: {
		backgroundColor: COLORS.earth
	},
	secondaryPressed: {
		backgroundColor: COLORS.earth
	},
	icon: {
		width: 44,
		height: 44,
		padding: 10
	},
	small: {
		paddingHorizontal: 12,
		paddingVertical: 8
	},
	medium: {
		paddingHorizontal: 16,
		paddingVertical: 10
	},
	large: {
		paddingHorizontal: 20,
		paddingVertical: 14
	}
});
