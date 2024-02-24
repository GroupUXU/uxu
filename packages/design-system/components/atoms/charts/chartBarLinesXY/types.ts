export type ChartBarLineXYData = {
		x: string | number;
		y: string | number;
}

export type LinesData = Array<{ name: string, color: string, data: Array<ChartBarLineXYData> }>;

export type ChartBarLineXYAccessor = (d: ChartBarLineXYData) => string | number;

export type ChartBarLineXYProps = {
		linesData?: LinesData
};