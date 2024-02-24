import {type ReactElement, useRef} from "react";
import { defaultStyles } from '@visx/tooltip';
import {useResizeDivObserver} from "../../../../hooks/useResizeDivObserver";
import { XYChart, Tooltip, AnimatedGrid, BarSeries } from '@visx/xychart';
import { ChartBarSeriesXYProps, ChartBarSeriesXYData } from './types';
import { AxisConfig } from "./components";
import style from './chartBarSeriesXY.module.scss';


export function ChartBarSeriesXY({ data: seriesData }: ChartBarSeriesXYProps): ReactElement | null {
		const wrapperRef = useRef<HTMLDivElement>(null);
		const {width, height} = useResizeDivObserver(wrapperRef);

		if (!seriesData) return null;


		const accessors = {
				xAccessor: (d: ChartBarSeriesXYData) => d.x,
				yAccessor: (d: ChartBarSeriesXYData) => d.y,
				fillAccessor: (d: ChartBarSeriesXYData) => d.color,
		}

		return (
					<div className={style.wrapper} ref={wrapperRef}>
							<XYChart height={height} width={width} xScale={{ type: 'band', padding: 0.2 }} yScale={{ type: 'linear' }}>
									<rect width={width} height={height} fill="var(--uxu-color-background-secound)" rx={5} />
									<AxisConfig orientation="left" />
									<AxisConfig orientation="bottom" />
									<AnimatedGrid
												columns={true}
												rows={true}
												numTicks={10}
												lineStyle={{
														stroke: 'var(--uxu-color-border-default)',
														strokeWidth: '0.1rem'
												}}
									/>
									{Object.entries(seriesData).map(([seriesName, seriesValues], index) => (
												<BarSeries
															key={`${index}-${seriesName}`}
															dataKey={seriesName}
															data={seriesValues}
															colorAccessor={accessors.fillAccessor}
															{...accessors}
												/>
									))}
									<Tooltip
												snapTooltipToDatumX
												snapTooltipToDatumY
												showVerticalCrosshair
												showSeriesGlyphs
												style={{
														...defaultStyles,
														backgroundColor: 'var(--uxu-color-background-default)',
														padding: 'var(--uxu-space-default)',
														border: 'var(--uxu-border-default)',
														borderRadius: 'var(--uxu-radii-default)',
												}}
												verticalCrosshairStyle={{
														stroke: 'var(--uxu-color-background-foreground)'
												}}
												glyphStyle={{
														fill: 'var(--uxu-color-background-foreground)'
												}}
												renderTooltip={({ tooltipData }) => {
														const datum = tooltipData?.nearestDatum?.datum as ChartBarSeriesXYData;
														return (
																	<div className={style.wrapperPoint}>
																			<div className={style.header} style={{ color: datum.color }}>
																					{datum.x}
																			</div>
																			<p>
																					{tooltipData?.nearestDatum?.key}, {datum.y}
																			</p>
																	</div>
														);
												}}
									/>
							</XYChart>
					</div>
		);
}
