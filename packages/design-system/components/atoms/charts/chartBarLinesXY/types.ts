export type ChartBarLinesXYData = {
		x: string | number;
		y: string | number;
}

export type LinesData = Array<{ name: string, color: string, data: Array<ChartBarLinesXYData> }>;

export type ChartBarLinesXYAccessor = (d: ChartBarLinesXYData) => string | number;

export type ChartBarLinesXYProps = {
		data?: LinesData
};
