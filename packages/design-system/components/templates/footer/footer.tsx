/* eslint-disable react/jsx-no-leaked-render -- I don't have time for this fix */
import type { ReactElement } from 'react';
import { Link, Logo } from '../../atoms';
import { useSiteConfig } from "../../../hooks";
import styles from './footer.module.scss';
import type { FooterProps } from './types';

export function Footer({ footerColumns, brand }: FooterProps): ReactElement {
  const { site } = useSiteConfig();

  const generateKey = (prefix: string, index: number): string => `${prefix}-${index}`;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapperBrand}>
          <Link href="/" title={site?.shortname || ""}>
            <Logo brand={brand} />
          </Link>
          <p>
            © 2023
            <Link href="https://www.uxu.pl" title="UXU">
              UXU
            </Link>
          </p>
        </div>

        {footerColumns.map((column, i) => (
          <div key={generateKey('column', i)}>
            {column.header && <strong className={styles.columnHeader}>{column.header}</strong>}
            <ul>
              {column.links.map((link, j) => (
                <li key={generateKey('link', j)}>
                  <Link href={link.linkPath} title={link.title || ''}>
                    {link.title || ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
