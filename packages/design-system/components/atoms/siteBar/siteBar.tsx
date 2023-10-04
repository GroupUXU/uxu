import classnames from "classnames";
import type { SiteBarProps } from "./types";
import styles from './sitebar.module.scss';

export function SiteBar ({ site, children, className }: SiteBarProps ): JSX.Element {
  const siteBar = classnames(styles.wrapper, className, {
    [styles.left]: site === 'left',
    [styles.right]: site === 'right',
  });

  return (
    <div className={siteBar}>
      {children}
    </div>
  );
}
