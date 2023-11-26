/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type { ReactElement } from "react";
import classnames from 'classnames';
import { transformChunkToComponent } from '../../../../molecules/contentPartDisplay/parsers/transformChunkToComponent/transformChunkToComponent';
import { AdsSlot } from '../../../../atoms/adsSlot';
import { ParseContentPartToChunk, ParserChunksWithStrategy, strategyForContentPartInPostDesktop, strategyForContentPartInPostMobile } from '../../../../molecules/contentPartDisplay';
import { ButtonsSocialShare } from '../../../../molecules/listButtonsSocialShare';
import { TagList } from '../../../../molecules/tagList';
import { useSiteConfig } from "../../../../../hooks/useSiteConfig";
import { ArticleMetaWrapper, Cover } from "./components";
import styles from './postView.module.scss';
import type { PostViewProps } from './types';

export function PostView({ postViewData }: PostViewProps ): ReactElement {
  const { config: { client } } = useSiteConfig();
  const isMobile = client.platform.isMobile;
  const adSlots: Array<string> = isMobile ? [ '2XMXAMIDTEXTX1', '2XMXAMIDTEXTX2', '2XMXAMIDTEXTX3' ] : [ '2XDXAMIDTEXTX1', '2XDXAMIDTEXTX2', '2XDXAMIDTEXTX3' ]
  const { cover = null, authors = [], createdAt, title = '', lead = '', tags = [], contentparts = [] } = postViewData;

  return (
    <article className={classnames( styles.article, 'article' )}>
      <div className={styles.wrapperLeadWithAd}>
        <div className={styles.content}>
          {title && <h1 className={styles.header}>{title}</h1>}
          {lead && <p className={styles.lead}>{lead}</p>}
          <ArticleMetaWrapper authors={authors} createdAt={createdAt}/>
        </div>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)}>
          {!isMobile && <AdsSlot slot="2XDXLEADX1" stickyOffset="9rem" />}
        </div>
      </div>
      <Cover cover={cover} title={title}/>
      <div className={styles.wrapperContentWithAd}>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)} style={{ paddingTop: "var(--uxu-space-default)" }}>
          {!isMobile && <AdsSlot slot="2XDXSITEBARLEFTX1" stickyOffset="9rem" />}
        </div>
        <div className={styles.content}>
          <TagList tags={tags}/>
            <ParseContentPartToChunk contentParts={contentparts}>
              {({ chunkComponents }) => (
                <ParserChunksWithStrategy adSlots={adSlots} chunks={chunkComponents} strategy={isMobile ? strategyForContentPartInPostMobile : strategyForContentPartInPostDesktop}>
                  {({ chunksWithStrategy }) => chunksWithStrategy.map(transformChunkToComponent)}
                </ParserChunksWithStrategy>
              )}
            </ParseContentPartToChunk>
        </div>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)} style={{ paddingTop: "var(--uxu-space-default)" }}>
          {!isMobile && <AdsSlot slot="2XDXSITEBARRIGHTX1" stickyOffset="9rem"/>}
        </div>
        <div />
        <div className={styles.content}>
          <ButtonsSocialShare />
        </div>
        <div />
      </div>
    </article>
  );
};
