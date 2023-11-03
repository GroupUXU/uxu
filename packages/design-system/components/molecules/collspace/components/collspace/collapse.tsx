import { useState, useEffect } from "react";
import type { ReactElement } from 'react';
import classnames from 'classnames';
import type { CollapseProps } from "../../types";
import styles from './collapse.module.scss';

export function Collapse({ id, title, isOpen: open = false, children, className, notifyCollapseStateChange }: CollapseProps): ReactElement {
  const [isOpen, setIsOpen] = useState(open);


  useEffect((): void => { setIsOpen(open)  }, [open])

  function toggleCollapse(): void {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    notifyCollapseStateChange?.(newIsOpen, id);
  };

  return (
    <div className={classnames(styles.wrapper, className, 'collapse')}>
      <div className={classnames(styles.label, 'label')}>
        <button
          className={styles.button}
          onClick={toggleCollapse}
          type="button"
        >
          {title}
        </button>
      </div>
      <div
        className={classnames(styles.content, 'content', { [styles.open]: isOpen })}
      >
        {children}
      </div>
    </div>
  );
}
