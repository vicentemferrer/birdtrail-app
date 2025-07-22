import { ComponentType } from 'react';

type IconProps = {
	name: string;
	size?: number;
	color?: string;
	[key: string]: any;
};

export type IconComponentType = ComponentType<IconProps>;

type Props = {
	IconComponent: IconComponentType;
	iconName: string;
	iconSize?: number;
	iconColor?: string;
	iconProps?: Omit<IconProps, 'name' | 'size' | 'color'>;
};

export default function Icon({
	IconComponent,
	iconName,
	iconSize,
	iconColor,
	iconProps = {}
}: Props) {
	return <IconComponent name={iconName} size={iconSize} color={iconColor} {...iconProps} />;
}
