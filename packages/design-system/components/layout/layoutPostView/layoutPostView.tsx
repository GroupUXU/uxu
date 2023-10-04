/* eslint-disable react/jsx-no-leaked-render -- i don't have time now */
import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { SiteBar, Container } from '../../atoms';
import { Footer, Header } from '../../templates';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import { menuItems } from "./consts";
import type { LayoutPostViewProps } from './types';
import styles from './layoutPostView.module.scss';

export function LayoutPostView({ topElement, siteBarLeft, footer, seo, children, searchEngine }: LayoutPostViewProps): ReactElement {
  const router = useRouter ();
  const currentSlug = router.pathname || '/';

  const isLinkActive = useCallback((slug: string) => currentSlug === slug, [currentSlug]);

  return (
    <>
      <NextSeo {...seo} />
      <Header
        leftComponents={<HeaderLeftComponents isLinkActive={isLinkActive} menuItems={menuItems} searchEngine={searchEngine} />}
        mobileHamburgerMenu={<MobileVerticalModal currentSlug={currentSlug} isLinkActive={isLinkActive} menuItems={menuItems} />}
        rightComponents={<HeaderRightComponents modalAlignment='right' switchModalButtonText='sugestia' />}
      />
      <div className={styles.menuSpacer} />
      {topElement}
      <Container>
        <div className={styles.container}>
          <div className={styles.siteBarLeft}>{siteBarLeft && <SiteBar site="left">{siteBarLeft}</SiteBar>}</div>
          <div style={{position: 'relative'}}>{children}</div>
        </div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
