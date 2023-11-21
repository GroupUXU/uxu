/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type { ReactElement } from "react";
import classnames from 'classnames';
import { transformChunkToComponent } from '../../molecules/chunks/components/parsers/transformChunkToComponent/transformChunkToComponent';
import { Ads } from '../../atoms/ads';
import { ParseContentPartToChunk } from '../../molecules/chunks';
import { ButtonsSocialShare } from '../../molecules/listButtonsSocialShare';
import { TagList } from '../../molecules/tagList';
import { ArticleMetaWrapper, Cover } from "./components";
import styles from './postView.module.scss';
import type { PostViewProps } from './types';

export function PostView({ postViewData }: PostViewProps ): ReactElement {
  const { cover = null, authors = [], createdAt, title = '', lead = '', tags = [], contentparts = [] } = postViewData;

  return (
    <article className={classnames( styles.article, 'article' )}>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          {title && <h1 className={styles.header}>{title}</h1>}
          {lead && <p className={styles.lead}>{lead}</p>}
          <ArticleMetaWrapper authors={authors} createdAt={createdAt}/>
        </div>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)}>
          <Ads slot="s250250" stickyOffset="9rem">
            <div id='div-gpt-ad-1700309639482-0' style={{minWidth: '250px', minHeight: '250px' }}>
              <script dangerouslySetInnerHTML={{ __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1700309639482-0'); });`, }} />
            </div>
          </Ads>
        </div>
      </div>
      <Cover cover={cover} title={title}/>
      <div className={styles.adWithContentWrapper}>
        <div className={styles.content}>
          <TagList tags={tags}/>
            <ParseContentPartToChunk contentParts={contentparts}>
              {({chunkComponents}) => chunkComponents.map(transformChunkToComponent)}
            </ParseContentPartToChunk>
        </div>
        <div className={classnames(styles.wrapperAds, styles.adsInPost)} style={{ paddingTop: "var(--uxu-space-default)" }}>
          <Ads slot="s250600" stickyOffset="9rem" />
        </div>
        <div className={styles.content}>
          <ButtonsSocialShare />
        </div>
      </div>
    </article>
  );
};