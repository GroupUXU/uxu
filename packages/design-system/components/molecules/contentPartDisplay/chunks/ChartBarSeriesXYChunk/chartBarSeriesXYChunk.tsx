import type { ReactElement } from 'react';
import { ChartBarSeriesXY } from '../../../../atoms/charts';
import type { ChartBarSeriesXYProps } from '../../../../atoms/charts/chartBarSeriesXY/types';
import style from './chartBarSeriesXYChunk.module.scss';
import {useSiteConfig} from "../../../../../hooks/useSiteConfig";

export function ChartBarSeriesXYChunk({ data }: ChartBarSeriesXYProps): ReactElement | null {
  const {config: {client: {platform: {isMobile}}}} = useSiteConfig();
  if(isMobile) return null
  return (
      <div className={style.wrapper}>
        <ChartBarSeriesXY data={data} />
      </div>
  )
}
