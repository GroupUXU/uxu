/* eslint-disable react/jsx-no-leaked-render -- i don't have time now */
import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Container } from '../../atoms/container';
import { Header } from '../../templates/header';
import { Footer } from '../../templates/footer';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components';
import { PostView } from './components'
import type { LayoutPostViewProps } from './types';
import styles from './layoutPostView.module.scss';

export function LayoutPostView({ footer, headerMenu, searchEngineConfig, seo, topElement, postViewData }: LayoutPostViewProps): ReactElement {
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
      <div className={styles.bg} />
      {topElement}
      <Container>
        {postViewData && <PostView postViewData={postViewData}/>}
      </Container>
      <Footer {...footer} />
    </>
  );
}
