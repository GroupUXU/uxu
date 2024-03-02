import {type ReactElement} from "react";
import {curveMonotoneX} from '@visx/curve';
import {defaultStyles} from '@visx/tooltip';
import {XYChart, Tooltip, AnimatedGrid, AnimatedLineSeries} from '@visx/xychart';
import type {ChartBarLinesXYProps, ChartBarLinesXYAccessor, ChartBarLinesXYData} from './types';
import {AxisConfig} from "./components";
import style from './chartBarLinesXY.module.scss';
import {useRef} from "react";
import {useResizeDivObserver} from "../../../../hooks/useResizeDivObserver";

export function ChartBarLinesXY({data: linesData}: ChartBarLinesXYProps): ReactElement | null {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const {width, height} = useResizeDivObserver(wrapperRef);

    if(!linesData) return null;

    const accessors: { xAccessor: ChartBarLinesXYAccessor; yAccessor: ChartBarLinesXYAccessor } = {
        xAccessor: (d) => d.x,
        yAccessor: (d) => d.y,
    };

    return (
        <div className={style.wrapper} ref={wrapperRef}>
            <XYChart height={height} width={width} xScale={{type: 'band'}} yScale={{type: 'linear'}}>
                <rect width={width} height={height} fill="var(--uxu-color-background-secound)" rx={5}/>
                <AxisConfig orientation="left"/>
                <AxisConfig orientation="bottom"/>
                <AnimatedGrid columns={true} rows={true} numTicks={10} lineStyle={{
                    stroke: 'var(--uxu-color-border-default)',
                    strokeWidth: '0.1rem'
                }}/>
                {linesData.map(({name, color, data}, index) => (
                    <AnimatedLineSeries
                        key={index}
                        dataKey={name}
                        data={data}
                        {...accessors}
                        stroke={color}
                        strokeWidth={5}
                        curve={curveMonotoneX}
                    />
                ))}
                <Tooltip
                    snapTooltipToDatumX
                    snapTooltipToDatumY
                    showVerticalCrosshair
                    showSeriesGlyphs
                    style={tooltipStyle}
                    verticalCrosshairStyle={{
                        stroke: 'var(--uxu-color-background-foreground)'
                    }}
                    glyphStyle={{
                        fill: 'var(--uxu-color-background-foreground)'
                    }}
                    renderTooltip={({tooltipData}) => {
                        const datum = tooltipData?.nearestDatum?.datum;
                        const seriesColor = linesData.find(line => line.name === tooltipData?.nearestDatum?.key)?.color;
                        return (
                            <>
                                <div className={style.wrapperPoint}>
                                    <div className={style.header} style={{color: seriesColor}}>
                                        {tooltipData?.nearestDatum?.key}
                                    </div>
                                    <p style={{color: seriesColor}}>
                                        {accessors.xAccessor(datum as ChartBarLinesXYData)}, {accessors.yAccessor(datum as ChartBarLinesXYData)}
                                    </p>
                                </div>
                            </>
                        )
                    }}
                />
            </XYChart>
        </div>
    );
}

const tooltipStyle = {
    ...defaultStyles,
    backgroundColor: 'var(--uxu-color-background-default)',
    padding: 'var(--uxu-space-default)',
    border: 'var(--uxu-border-default)',
    borderRadius: 'var(--uxu-radii-default)',
}
