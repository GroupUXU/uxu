import { useState, useCallback, cloneElement, Children, isValidElement } from "react";
import type { ReactNode } from 'react';
import type { CollapseProps } from "../../types";
import classnames from 'classnames';
import styles from './collspaceGroup.module.scss';

export function CollapseGroup({ children, initialOpenId = "", className }: { children: ReactNode, initialOpenId?: string; className?: string }) {
  const [openId, setOpenId] = useState<string>(initialOpenId);

  const handleCollapseStateChange = useCallback((isOpen: boolean, id: string) => {
    const actions = {
      true: id,
      false: openId === id ? "" : openId
    };
    setOpenId(actions[String(isOpen)] as string);
  }, [openId]);




  return (
    <div className={classnames(styles.wrapper, className)}>
      {Children.map(children, (child) =>
        isValidElement<CollapseProps>(child)
          ? cloneElement(child, {
            isOpen: child.props.id === openId,
            notifyCollapseStateChange: handleCollapseStateChange,
          })
          : child
      )}
    </div>
  );
}
