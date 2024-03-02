export type ChartBarSeriesXYData = {
		x: string | number;
		y: string | number;
		color: string;
}

export type SeriesData = Record<string, ChartBarSeriesXYData[]>;

export type ChartBarSeriesXYProps = {
		data?: SeriesData
};
