import type { ReactElement } from 'react';
import classnames from 'classnames';
import { useSiteConfig } from "../../../../hooks/useSiteConfig";
import { Link } from '../../../atoms/link';
import { Logo } from '../../../atoms/logo';
import { SearchEngineInModal } from '../../../organisms/searchEngine';
import type { HeaderLeftComponentsProps } from './types';
import styles from './headerLeftComponents.module.scss';


export function HeaderLeftComponents({ headerMenu, isLinkActive, searchEngineConfig }: HeaderLeftComponentsProps): ReactElement {
const { config: { site } } = useSiteConfig();
  function createNavLink( slug: string, title: string ): ReactElement {
    return (
      <li key={slug}>
        <Link className={classnames ( {[ styles.active ]: isLinkActive ( slug )} )} href={slug} title={title}>
          {title}
        </Link>
      </li>
    )
  };
  return (
    <>
      <Link  className={classnames(styles.logoMobile, styles.logo)} href="/" title="wTrasie">
        <Logo brand={site.shortBrand} className={styles.logo}/>
      </Link>
      <Link className={classnames(styles.logoDesktop, styles.logo)} href="/" title="wTrasie">
        <Logo brand={site.brand} className={styles.logo}/>
      </Link>
        <nav className={styles.nav}>
          {headerMenu.map(({ href, title }) => createNavLink(href, title))}
        </nav>
      <SearchEngineInModal
        className={styles.wrapperSearch}
        searchEngineConfig={searchEngineConfig}
      />
    </>
  );
};
