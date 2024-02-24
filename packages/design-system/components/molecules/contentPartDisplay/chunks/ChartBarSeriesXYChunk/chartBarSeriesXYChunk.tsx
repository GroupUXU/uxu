import type { ReactElement } from 'react';
import { ChartBarSeriesXY } from '../../../../atoms/charts';
import type { ChartBarSeriesXYProps } from '../../../../atoms/charts/chartBarSeriesXY/types';
import style from './chartBarSeriesXYChunk.module.scss';

export function ChartBarSeriesXYChunk({ data }: ChartBarSeriesXYProps): ReactElement {
  return (
      <div className={style.wrapper}>
        <ChartBarSeriesXY data={data} />
      </div>
  )
}
