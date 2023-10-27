import type { ReactElement } from 'react';
import classnames from 'classnames';
import { useSiteConfig } from "hooks";
import { Logo, Link } from '../../../atoms';
import { SearchEngineInModal } from '../../../organisms';
import type { HeaderLeftComponentsProps } from './types';
import styles from './headerLeftComponents.module.scss';


export function HeaderLeftComponents({ headerMenu, isLinkActive, searchEngineConfig }: HeaderLeftComponentsProps): ReactElement {
const { site } = useSiteConfig();
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
        <Logo brand={site?.shortBrand || "uxu"} className={styles.logo}/>
      </Link>
      <Link className={classnames(styles.logoDesktop, styles.logo)} href="/" title="wTrasie">
        <Logo brand={site?.brand || "uxu"} className={styles.logo}/>
      </Link>
        <nav className={styles.nav}>
          {headerMenu.map(({ slug, title }) => createNavLink(slug, title))}
        </nav>
      <SearchEngineInModal
        className={styles.wrapperSearch}
        searchEngineConfig={searchEngineConfig}
      />
    </>
  );
};
