import type { ReactElement } from 'react';
import Markdown from 'react-markdown'
import type { ChunkProps } from '../../types';
import styles from './paragraphChunk.module.scss';

export function ParagraphChunk({ value }: ChunkProps<{ value?: string, }>): ReactElement {
  const paragraph = String(value) || '';
  return <Markdown className={styles.wrapper}>{paragraph}</Markdown>;
}
