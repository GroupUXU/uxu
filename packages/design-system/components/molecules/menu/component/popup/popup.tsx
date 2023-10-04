/* eslint-disable react/jsx-sort-props -- I don't have time to fix this problem */
import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import { useMenuContext } from '../../context/context';
import { calculatePosition } from './utils/calculatePosition';
import type { MenuPopupProps, Position, Size } from './types';
import styles from './menuPopup.module.scss';

export function MenuPopup({ children, className }: MenuPopupProps): ReactElement {
  const [menuPopupSize, setMenuPopupSize] = useState<Size>({ width: 0, height: 0 });
  const [position, setPosition] = useState<Position>({ top: '0', left: '0' });
  const { isOpen, containerSize, menuPosition } = useMenuContext();
  const menuPopupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (menuPopupRef.current && isOpen && menuPopupSize.width === 0 && menuPopupSize.height === 0) {
      const { width, height } = menuPopupRef.current.getBoundingClientRect();
      setMenuPopupSize({ width, height });
    }
  }, [isOpen, menuPopupSize]);

  useLayoutEffect(() => {
    setPosition(calculatePosition(menuPosition, menuPopupSize, containerSize));
  }, [menuPosition, menuPopupSize, containerSize]);

  const popupClassName = classNames(styles.popup, className ? className : undefined);

  const popupStyle = {
    top: `${position.top}${typeof position.top === 'number' ? 'px' : ''}`,
    left: `${position.left}${typeof position.left === 'number' ? 'px' : ''}`,
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div ref={menuPopupRef} className={popupClassName} style={popupStyle}>
      {children}
    </div>
  );
}
