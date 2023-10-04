/* eslint-disable react/jsx-sort-props -- I don't have time to fix this problem */
import { useState, useRef, useEffect } from 'react';
import type { ReactElement, KeyboardEvent } from 'react';
import { Context } from '../../context/context';
import type { MenuContainerProps } from "./types";
import styles from './menuContainer.module.scss'

export function MenuContainer( { children, menuPosition = 'bottom' }: MenuContainerProps ): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean> ( false );
  const [containerSize, setContainerSize] = useState<{ width: number, height: number }> ( {width: 0, height: 0} );
  const containerRef = useRef<HTMLDivElement> ( null );

  const toggleMenu = (): void => {
    setIsOpen ( !isOpen )
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  useEffect ( () => {
    if (containerRef.current) {
      const { width, height} = containerRef.current.getBoundingClientRect ();
      setContainerSize ( { width, height } );
    }
  }, [containerRef] );

  return (
    <Context.Provider value={{ containerSize , isOpen, menuPosition, setIsOpen}}>
      <div
        className={styles.container}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        tabIndex={0}
        role="button"
      >
        {children}
      </div>
    </Context.Provider>
  );
}
