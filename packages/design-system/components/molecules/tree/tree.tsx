import React, { createContext, useState, useMemo } from 'react';
import type { ReactElement } from 'react';
import classnames from 'classnames';
import type { TreeProps, ITreeContext } from './types';
import styles from './tree.module.scss';

export const TreeContext = createContext<ITreeContext> ( {
  full: false,
  activeHref: "",
  activeBranch: null,
  setActiveBranch: () => {/* empty */
  },
} );

export function Tree ( {children, activeHref, full}: TreeProps ): ReactElement {
  const [activeBranch, setActiveBranch] = useState<string | null> ( null );

  const contextValue = useMemo ( () => ({
    activeBranch,
    setActiveBranch,
    activeHref,
    full: Boolean ( full )
  }), [activeBranch, activeHref, full] );

  return (
    <TreeContext.Provider value={contextValue}>
      <ul className={classnames ( styles.tree, {[ styles.full ]: full} )}>{children}</ul>
    </TreeContext.Provider>
  );
};
