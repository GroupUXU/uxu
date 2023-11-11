/* eslint-disable react/jsx-no-leaked-render -- i don't have time now */
import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { SiteBar, Container } from '../../atoms';
import { Footer, Header } from '../../templates';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import type { LayoutListingPostProps } from './types';
import styles from './layoutListingPost.module.scss';

export function LayoutListingPost({ children, footer, headerMenu, searchEngineConfig, seo, siteBarLeft, siteBarRight, topElement }: LayoutListingPostProps): ReactElement {
  const router = useRouter();
  const currentSlug = router.pathname || '/';

  const isLinkActive = useCallback((slug: string) => currentSlug === slug, [currentSlug]);

  return (
    <>
      <NextSeo {...seo} />
      <Header
        leftComponents={<HeaderLeftComponents headerMenu={headerMenu} isLinkActive={isLinkActive} searchEngineConfig={searchEngineConfig} />}
        mobileHamburgerMenu={<MobileVerticalModal activeHref={currentSlug} headerMenu={headerMenu} isLinkActive={isLinkActive} />}
        rightComponents={<HeaderRightComponents modalAlignment='right' switchModalButtonText='sugestia' />}
      />
      <div className={styles.menuSpacer} />
      {topElement}
      <Container>
        <div className={styles.container}>
          <div className={styles.siteBarLeft}>{siteBarLeft && <SiteBar site="left">{siteBarLeft}</SiteBar>}</div>
          <div style={{position: 'relative'}}>{children}</div>
          <div className={styles.siteBarRight}>{siteBarRight && <SiteBar site="right">{siteBarRight}</SiteBar>}</div>
        </div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
