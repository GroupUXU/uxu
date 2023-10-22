import type { ReactElement } from 'react';
import Markdown from 'react-markdown'
import type { ContentPartProps } from '../../../types';
import styles from './paragraphChunk.module.scss';

export function ParagraphChunk( { id, value }: ContentPartProps): ReactElement {
  const paragraph = value || '';
  return <Markdown className={styles.wrapper} key={id}>{paragraph}</Markdown>;
}
