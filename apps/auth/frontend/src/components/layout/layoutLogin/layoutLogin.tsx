import type { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { Container } from 'design-system/components/atoms/container';
import type { LayoutFullProps } from './types';
import styles from './layoutLogin.module.scss';

export function LayoutLogin( { children, seo }: LayoutFullProps): ReactElement {

  return (
    <>
      <NextSeo {...seo} />
      <Container className={styles.wrapper}>
          {children}
      </Container>
    </>
  );
}
