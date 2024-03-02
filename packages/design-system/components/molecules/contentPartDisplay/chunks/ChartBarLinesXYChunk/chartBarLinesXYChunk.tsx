import type { ReactElement } from 'react';
import { ChartBarLinesXY } from '../../../../atoms/charts';
import type { ChartBarLinesXYProps } from '../../../../atoms/charts/chartBarLinesXY/types';
import style from './chartBarLinesXYChunk.module.scss';
import {useSiteConfig} from "../../../../../hooks/useSiteConfig";

export function ChartBarLinesXYChunk({ data }: ChartBarLinesXYProps): ReactElement | null {
  const {config: {client: {platform: {isMobile}}}} = useSiteConfig();
  if(isMobile) return null
  return (
      <div className={style.wrapper}>
        <ChartBarLinesXY data={data} />
      </div>
  )
}
