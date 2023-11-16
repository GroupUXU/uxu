/* eslint-disable react/hook-use-state -- I don't have time for fix */
import { useState } from 'react';
import type { ReactElement } from 'react';
import classnames from 'classnames';
import { Modal } from '../../atoms/modal';
import { Hamburger } from '../../atoms/hamburger';
import type { HeaderProps } from './types';
import styles from './header.module.scss';

export function Header({ leftComponents, rightComponents, mobileHamburgerMenu }: HeaderProps): ReactElement {
  const [isHamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const handleHamburgerClick = (): void => {
    setHamburgerOpen(prevState => !prevState);
  };

  const hamburger = mobileHamburgerMenu && (
    <Hamburger
      className={styles.hamburger}
      onClick={handleHamburgerClick}
      open={isHamburgerOpen}
    />
  );

  const modal = mobileHamburgerMenu && (
    <Modal
      className={styles.modalMenu}
      open={isHamburgerOpen}
    >
      <div className={classnames('container', styles.modalMenuContainer)}>
        {mobileHamburgerMenu}
      </div>
    </Modal>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={classnames('container', styles.headerContainer)}>
          <div className={styles.left}>
            {leftComponents}
            {hamburger}
          </div>
          <div className={styles.right}>{rightComponents}</div>
        </div>
      </header>
      {modal}
    </>
  );
}
