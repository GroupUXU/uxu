import { AnimatedAxis } from "@visx/xychart";
import type { AxisConfigProps } from './types';

export function AxisConfig({ orientation = 'bottom' }: AxisConfigProps) {
		const commonStroke = "var(--uxu-color-border-default)";
		const tickLabelProps = {
				fill: 'var(--uxu-color-text-default)',
				fontSize: 14,
				fontWeight: 'bold',
		};
		
		return (
					<AnimatedAxis
								orientation={orientation}
								stroke={commonStroke}
								strokeWidth="0.3rem"
								hideAxisLine
								tickStroke={commonStroke}
								tickLabelProps={() => tickLabelProps}
					/>
		);
};
