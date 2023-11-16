import type { ReactElement } from 'react';
import classNames from 'classnames';
import type { HamburgerProps } from './hamburger.types';
import styles from './hamburger.module.scss';

export function Hamburger({ className, onClick, open }: HamburgerProps): ReactElement {
  const hamburgerClass = classNames(
    styles.hamburger,
    className,
    { [styles.open]: open }
  );

  return (
    <button className={hamburgerClass} onClick={onClick} type="button">
      <span />
      <span />
    </button>
  );
}
