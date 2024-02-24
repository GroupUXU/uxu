/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type {ReactElement} from "react";
import classnames from 'classnames';
import {transformChunkToComponent} from '../../../../molecules/contentPartDisplay/parsers/transformChunkToComponent/transformChunkToComponent';
import {AdsSlot} from '../../../../atoms/adsSlot';
import {ChartBarLinesXY, ChartBarSeriesXY} from "../../../../atoms/charts";
import {ParseContentPartToChunk, ParserChunksWithStrategy, strategyForContentPartInPostDesktop, strategyForContentPartInPostMobile} from '../../../../molecules/contentPartDisplay';
import {ButtonsSocialShare} from '../../../../molecules/listButtonsSocialShare';
import {TagList} from '../../../../molecules/tagList';
import {useSiteConfig} from "../../../../../hooks/useSiteConfig";
import {Cover, PhoneMetaWrapper} from "./components";
import styles from './phoneView.module.scss';
import type {PhoneViewProps} from './types';


const createData = () => Array.from({length: 20}, (_, i) => ({
		x: `01.${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
		y: Math.floor(Math.random() * 1150),
}));

const createDataSeries = () => Array.from({length: 3}, (_, i) => ({
		x: `01.${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
		y: Math.floor(Math.random() * 1150),
}));

const dataLines = [
		{name: 'test', color: 'var(--uxu-color-border-active)', data: createData()},
];

const seriesData = {
		"ocen": [
				{x: "warning", y: 0, color: "yellow"},
				{x: "danger", y: 20, color: "red"},
				{x: "positive", y: 320, color: "green"},
		]
}


export	function PhoneView({phoneFullData}: PhoneViewProps): ReactElement {
		const {config: {client}} = useSiteConfig();
		const isMobile = client.platform.isMobile;
		const strategy = isMobile ? strategyForContentPartInPostMobile : strategyForContentPartInPostDesktop;
		const adSlots: Array<string> = isMobile ? ['2XMXAMIDTEXTX1', '2XMXAMIDTEXTX2', '2XMXAMIDTEXTX3'] : ['2XDXAMIDTEXTX1', '2XDXAMIDTEXTX2', '2XDXAMIDTEXTX3']
		const {cover = null, phone, lead, format, createdAt, reputation, contentParts, gallery} = phoneFullData;

		
		return (
					<article className={classnames(styles.article, 'article')}>
							<div className={styles.wrapperLeadWithAd}>
									<div className={styles.content}>
											{phone && <h1 className={styles.header}>{phone} czyj to numer telefonu ?</h1>}
											{lead && <p className={styles.lead}>{lead}</p>}
											<PhoneMetaWrapper reputation={reputation} createdAt={createdAt}/>
									</div>
									<div className={classnames(styles.wrapperAds, styles.adsInPost)}>
											{!isMobile && <AdsSlot slot="2XDXLEADX1" stickyOffset="9rem"/>}
									</div>
							</div>
							<Cover cover={cover} title={phone || ""}/>
							<div className={styles.wrapperContentWithAd}>
									<div className={classnames(styles.wrapperAds, styles.adsInPost)} style={{paddingTop: "var(--uxu-space-default)"}}>
											{!isMobile && <AdsSlot slot="2XDXSITEBARLEFTX1" stickyOffset="9rem"/>}
									</div>
									<div className={styles.content}>
											<TagList tags={format}/>
											<ParseContentPartToChunk contentParts={contentParts}>
													{({chunkComponents}) => (
																<ParserChunksWithStrategy adSlots={adSlots} chunks={chunkComponents} strategy={strategy}>
																		{({chunksWithStrategy}) => chunksWithStrategy.map(transformChunkToComponent)}
																</ParserChunksWithStrategy>
													)}
											</ParseContentPartToChunk>
											<h3>Wyszukiwania według miesięcy</h3>
											<ChartBarLinesXY linesData={dataLines}/>
											<ChartBarSeriesXY seriesData={seriesData}/>
									</div>
									<div className={classnames(styles.wrapperAds, styles.adsInPost)} style={{paddingTop: "var(--uxu-space-default)"}}>
											{!isMobile && <AdsSlot slot="2XDXSITEBARRIGHTX1" stickyOffset="9rem"/>}
									</div>
									<div/>
									<div className={styles.content}>
											<ButtonsSocialShare/>
									</div>
									<div/>
							</div>
					</article>
		);
};
