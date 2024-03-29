/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type {ReactElement} from "react";
import classnames from 'classnames';
import {
    transformChunkToComponent
} from '../../../../molecules/contentPartDisplay/parsers/transformChunkToComponent/transformChunkToComponent';
import {AdsSlot} from '../../../../atoms/adsSlot';
import {
    ParseContentPartToChunk,
    ParserChunksWithStrategy,
    strategyForContentPartInPostDesktop,
    strategyForContentPartInPostMobile
} from '../../../../molecules/contentPartDisplay';
import {ButtonsSocialShare} from '../../../../molecules/listButtonsSocialShare';
import {TagList} from '../../../../molecules/tagList';
import {useSiteConfig} from "../../../../../hooks/useSiteConfig";
import {Cover, PhoneMetaWrapper, Comments, CommentAdd} from "./components";
import styles from './phoneView.module.scss';
import type {PhoneViewProps} from './types';
import {Note} from "../../../../atoms/note";


export function PhoneView({phoneData, comments, onCommentAdd, infiniteScrollMoreComments}: PhoneViewProps): ReactElement {
    const {config: {client}} = useSiteConfig();
    const isMobile = client.platform.isMobile;
    const strategy = isMobile ? strategyForContentPartInPostMobile : strategyForContentPartInPostDesktop;
    const adSlots: Array<string> = isMobile ? ['2XMXAMIDTEXTX1', '2XMXAMIDTEXTX2', '2XMXAMIDTEXTX3'] : ['2XDXAMIDTEXTX1', '2XDXAMIDTEXTX2', '2XDXAMIDTEXTX3']
    const {cover = null, phone, lead, format, createdAt, status, contentParts} = phoneData;
    
    return (
        <article className={classnames(styles.article, 'article')}>
            <div className={styles.wrapperLeadWithAd}>
                <div className={styles.content}>
                    {phone && <h1 className={styles.header}>{phone} czyj to numer telefonu ?</h1>}
                    {lead && <p className={styles.lead}>{lead}</p>}
                    <PhoneMetaWrapper status={status} createdAt={createdAt}/>
                </div>
                <div className={classnames(styles.wrapperAds, styles.adsInPost)}>
                    {!isMobile && <AdsSlot slot="2XDXLEADX1" stickyOffset="9rem"/>}
                </div>
            </div>
            <Cover cover={cover} title={phone || ""}/>
            <div className={styles.wrapperContentWithAd}>
                <div className={classnames(styles.wrapperAds, styles.adsInPost)}
                     style={{paddingTop: "var(--uxu-space-default)"}}>
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
                </div>
                <div className={classnames(styles.wrapperAds, styles.adsInPost)}
                     style={{paddingTop: "var(--uxu-space-default)"}}>
                    {!isMobile && <AdsSlot slot="2XDXSITEBARRIGHTX1" stickyOffset="9rem"/>}
                </div>
                <div/>
                <div className={styles.content}>
                    <ButtonsSocialShare/>
                    <div className={styles.wrapperComments}>
                        <h3>Podziel się wiedzą z innymi</h3>
                        <Note typ="warning" fill>
                            Nie zachowuj informacji wyłącznie dla siebie. Podziel się swoimi spostrzeżeniami na temat
                            tego rozmówcy,
                            aby pomóc innym ustalić, czy numer telefonu jest uznawany za zaufany, czy też nie.
                        </Note>
                        <CommentAdd onCommentAdd={onCommentAdd}/>
                        <h3>Komentarze</h3>
                        <Comments infiniteScrollMoreComments={infiniteScrollMoreComments} comments={comments}/>
                    </div>
                </div>
                <div/>
            </div>
        </article>
    );
};
