import type { ReactElement } from 'react';
import classnames from 'classnames';
import { vectorBrands } from 'assets';
import type { LogoProps } from "./types";
import styles from './logo.module.scss';

export function Logo({ brand, className }: LogoProps): ReactElement {
  return (
    <div className={classnames(styles.wrapper, className)}>
      {vectorBrands[brand]}
    </div>
  );
}
