import type { ReactElement } from "react";
import classnames from "classnames";
import type { StickyWrapperProps } from './types';
import styles from "./stickyWrapper.module.scss";


export function StickyWrapper({ children, top, className }: StickyWrapperProps): ReactElement {
  return (<div className={classnames(styles.wrapper, className)} style={{ top }}>{children}</div>)
}