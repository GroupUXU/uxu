import { useState, useContext, useEffect, useMemo, isValidElement, Children } from 'react';
import type { ReactElement, ReactNode, PropsWithChildren } from 'react';
import classnames from 'classnames';
import { ChevronDown, ChevronRight, Minus } from "react-feather";
import { Link } from '../../atoms/link';
import { TreeContext } from './tree';
import type { BranchProps } from './types';
import styles from './tree.module.scss';

function checkChildrenForActive(children: ReactNode): boolean {
  let isActiveChild = false;
  Children.forEach(children, (child: ReactElement<PropsWithChildren<{ active?: boolean }>>): void => {
    if (isValidElement(child) && child.type === Branch && (child.props.active || checkChildrenForActive(child.props.children))) {
      isActiveChild = true;
    }
  });
  return isActiveChild;
};


export function renderBranches( branches: Array<BranchProps> ): Array<ReactElement> {
  return branches.map ( ( branch ) => (
    <Branch href={branch.href} key={branch.title} title={branch.title}>
      {branch.branches ? renderBranches (branch.branches) : null}
    </Branch>
  ) );
};

export function Branch({ title, children, href, active = false }: BranchProps): ReactElement {
  const { setActiveBranch, activeHref, full } = useContext(TreeContext);
  const [isExpanded, setExpanded] = useState(active);

  useEffect(() => {
    if (checkChildrenForActive(children)) {
      setExpanded(true);
    }
  }, [children]);

  function handleToggle(): void {
    setExpanded(prev => !prev);
    setActiveBranch(active ? null : 'custom-id');
  };

  const Title: ReactElement = useMemo(() => (
    <Link className={classnames(styles.branchLink, { [styles.full]: full })} href={href} title={title}>{title}</Link>
  ), [href, title, full]);

  return (
    <li className={classnames(styles.branch, { [styles.full]: full })}>
      {children ?
        <button
          className={classnames(styles.branchWrapperLink, {
            [styles.active]: isExpanded,
            [styles.activeSlug]: href === activeHref,
            [styles.full]: full
          })}
          onClick={handleToggle}
          type="button"
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
          {full ? null : <Minus />}
          {Title}
        </div>
      }
      {isExpanded ? (
        <ul className={classnames(styles.nodeList, { [styles.full]: full })}>
          {children}
        </ul>
      ) : null}
    </li>
  );
};
