import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Container } from '../../atoms/container';
import { Header } from '../../templates/header';
import { Footer } from '../../templates/footer';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import type { LayoutFullProps } from './types';
import styles from './layoutFull.module.scss';

export function LayoutFull( { children, footer, headerMenu, searchEngineConfig, seo }: LayoutFullProps): ReactElement {
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
      <Container className={styles.wrapper}>
          {children}
      </Container>
      <Footer {...footer} />
    </>
  );
}
