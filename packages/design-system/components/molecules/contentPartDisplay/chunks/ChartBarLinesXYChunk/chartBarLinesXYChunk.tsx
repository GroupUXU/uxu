import type { ReactElement } from 'react';
import { ChartBarSeriesXY } from '../../../../atoms/charts';
import type { ChartBarSeriesXYProps } from '../../../../atoms/charts/chartBarSeriesXY/types';

export function ChartBarLinesXYChunk({ seriesData }: ChartBarSeriesXYProps): ReactElement {
  return <ChartBarSeriesXY seriesData={seriesData} />
}
