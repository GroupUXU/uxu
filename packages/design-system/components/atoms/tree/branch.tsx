/* eslint-disable -- i don't have time now  */
import React, { useState, useContext, ReactNode, useEffect, useMemo } from 'react';
import type { ReactElement } from 'react';
import { ChevronDown, ChevronRight, Minus } from "react-feather";
import { Link } from '../link';
import classnames from 'classnames';
import styles from './tree.module.scss';
import { BranchProps } from './types'
import { TreeContext } from './tree'

const checkChildrenForActive = (children: ReactNode): boolean => {
  let isActiveChild = false;
  React.Children.forEach(children, child => {
    if (React.isValidElement(child) && child.type === Branch && (child.props.active || checkChildrenForActive(child.props.children))) {
      isActiveChild = true;
    }
  });
  return isActiveChild;
};


export function renderBranches( branches: Array<BranchProps> ): Array<ReactElement> {
  return branches.map ( ( branch ) => (
    <Branch key={branch.title} title={branch.title} href={branch.href}>
      {branch.branches && renderBranches (branch.branches)}
    </Branch>
  ) );
};

export const Branch: React.FC<BranchProps> = ({ title, children, href, active }) => {
  const { setActiveBranch, activeHref, full } = useContext(TreeContext);
  const [isExpanded, setExpanded] = useState<boolean>(!!active);

  useEffect(() => {
    if (checkChildrenForActive(children)) {
      setExpanded(true);
    }
  }, [children]);

  const handleToggle = () => {
    setExpanded(prev => !prev);
    setActiveBranch(active ? null : 'custom-id');
  };

  const Title = useMemo(() => (
    <Link href={href} title={title} className={classnames(styles.branchLink, { [styles.full]: full })}>{title}</Link>
  ), [href, title, full]);

  return (
    <li className={classnames(styles.branch, { [styles.full]: full })}>
      {children ?
        <button
          onClick={handleToggle}
          className={classnames(styles.branchWrapperLink, {
            [styles.active]: isExpanded,
            [styles.activeSlug]: href === activeHref,
            [styles.full]: full
          })}
        >
          {full ? (
            <>
              {Title}
              {isExpanded ? <ChevronDown /> : <ChevronRight />}
            </>
          ) : (
            <>
              {isExpanded ? <ChevronDown /> : <ChevronRight />}
              {Title}
            </>
          )}
        </button>
        :
        <div className={styles.branchWrapperLink}>
          {full ? "" : <Minus />}
          {Title}
        </div>
      }
      {isExpanded && (
        <ul style={{ display: isExpanded ? 'block' : 'none' }} className={classnames(styles.nodeList, { [styles.full]: full })}>
          {children}
        </ul>
      )}
    </li>
  );
};
