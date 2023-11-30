/* eslint-disable react/jsx-no-leaked-render -- i don't have time now */
import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { SiteBar } from '../../atoms/siteBar';
import { Container } from '../../atoms/container';
import { Header } from '../../templates/header';
import { Footer } from '../../templates/footer';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import type { LayoutListingPostProps } from './types';
import styles from './layoutStaticText.module.scss';

export function LayoutStaticText( { children, footer, headerMenu, searchEngineConfig, seo, siteBarLeft, siteBarRight, topElement }: LayoutListingPostProps): ReactElement {
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
      <Container className={styles.container}>
          <div className={styles.siteBarLeft}>{siteBarLeft && <SiteBar site="left">{siteBarLeft}</SiteBar>}</div>
          <section className={styles.content}>{children}</section>
          <div className={styles.siteBarRight}>{siteBarRight && <SiteBar site="right">{siteBarRight}</SiteBar>}</div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
