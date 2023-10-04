import type { ReactElement } from 'react';
import type { ContentPartProps } from '../../../types';
import styles from './paragraphChunk.module.scss';

export function ParagraphChunk( { id, value }: ContentPartProps): ReactElement {
  const paragraph = value || '';
  return <div className={styles.wrapper} key={id}>{paragraph}</div>;
}
