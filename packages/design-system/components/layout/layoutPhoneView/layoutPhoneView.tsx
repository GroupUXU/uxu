/* eslint-disable react/jsx-no-leaked-render -- i don't have time now */
import { useCallback } from 'react';
import type { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Container } from '../../atoms/container';
import { Header } from '../../templates/header';
import { Footer } from '../../templates/footer';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components';
import { PhoneView } from './components'
import type { LayoutPhoneViewProps } from './types';
import styles from './layoutPhoneView.module.scss';

export function LayoutPhoneView({ footer, headerMenu, searchEngineConfig, seo, topElement, phoneData, comments, onCommentAdd, infiniteScrollMoreComments }: LayoutPhoneViewProps): ReactElement {
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
        <PhoneView phoneData={phoneData} comments={comments} onCommentAdd={onCommentAdd} infiniteScrollMoreComments={infiniteScrollMoreComments} />
      </Container>
      <Footer {...footer} />
    </>
  );
}
