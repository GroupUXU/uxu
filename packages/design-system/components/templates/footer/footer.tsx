import React from 'react';
import type { ReactElement } from 'react';
import { Facebook, Twitter, Youtube, Instagram, GitHub } from "react-feather";
import { useSiteConfig } from "../../../hooks";
import { Link, Logo } from '../../atoms';
import { ThemeSwitcher } from '../../molecules';
import type { SocialLinkData } from "./components/SocialLink";
import { SocialLink } from "./components/SocialLink";
import styles from './footer.module.scss';
import type { FooterProps } from './types';

export function Footer ( {footerColumns}: FooterProps ): ReactElement {
  const {config: { site, social}} = useSiteConfig ();

  const socialPlatforms: Array<SocialLinkData> = [
    {
      name: 'Facebook',
      accountId: social?.facebook?.pageId,
      url: 'https://www.facebook.com/profile.php?id=',
      Icon: Facebook
    },
    {name: 'Twitter', accountId: social?.twitter?.accountName, url: 'https://twitter.com/', Icon: Twitter},
    {name: 'YouTube', accountId: social?.youtube?.channelId, url: 'https://www.youtube.com/channel/', Icon: Youtube},
    {name: 'Instagram', accountId: social?.instagram?.accountName, url: 'https://www.instagram.com/', Icon: Instagram},
    {name: 'GitHub', accountId: social?.github?.accountName, url: 'https://github.com/', Icon: GitHub},
  ];

  function renderSocialLinks (): Array<ReactElement> {
    return socialPlatforms.map ( platform => {
      return <SocialLink key={platform.name} {...platform} />;
    } );
  }

  function renderColumns (): Array<ReactElement> {
    return footerColumns.slice ( 0, 3 ).map ( ( column ) => {
      return (
        <div className={styles.column} key={column.id}>
          <strong className={styles.columnHeader}>{column.header}</strong>
          <ul>
            {column.links.map ( ( link ) => {
              return (
                <li key={link.id}>
                  <Link href={link.linkPath} title={link.title || ''}>
                    {link.title || ''}
                  </Link>
                </li>
              );
            } )}
          </ul>
        </div>
      );
    } );
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column} style={{justifyContent: "space-between", gridRow: "1/4"}}>
            <div className={styles.wrapperBrand}>
              <Link className={styles.logo} href="/" title={site?.shortname || ""}>
                <Logo brand={site?.brand || "uxu"}/>
              </Link>
              <Link href="https://www.uxu.pl" title="UXU">
                © 2023 UXU GROUP
              </Link>
              <ul>
                {renderSocialLinks ()}
              </ul>
            </div>
          </div>
          {renderColumns ()}
          <div className={styles.lastColumn}><ThemeSwitcher/></div>
        </div>
      </div>
    </footer>
  );
}
