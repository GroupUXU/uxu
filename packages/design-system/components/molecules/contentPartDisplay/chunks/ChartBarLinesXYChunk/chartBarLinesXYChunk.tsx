import type { ReactElement } from 'react';
import { ChartBarLinesXY } from '../../../../atoms/charts';
import type { ChartBarLinesXYProps } from '../../../../atoms/charts/chartBarLinesXY/types';
import style from './chartBarLinesXYChunk.module.scss';

export function ChartBarLinesXYChunk({ data }: ChartBarLinesXYProps): ReactElement {
  return (
      <div className={style.wrapper}>
        <ChartBarLinesXY data={data} />
      </div>
  )
}
