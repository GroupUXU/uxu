import type { ReactElement } from 'react';
import { useSiteConfig } from '../../../../../../hooks';
import { extractHashFromYoutubeUrl } from '../../../../../../utils';
import type { ContentPartProps } from '../../../types';
import styles from './embedYouTubeChunk.module.scss';

export function EmbedYouTubeChunk(props: ContentPartProps): ReactElement | null {
  const { client } = useSiteConfig();
  const hash = props.url ? extractHashFromYoutubeUrl(props.url) : null;
  if (!hash) return null;
  return (
    <div className={styles.wrapper}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height={client?.platform.isMobile ? '150px' : '400px'}
        src={`https://www.youtube.com/embed/${hash}`}
        title="YouTube video player"
        width={client?.platform.isMobile ? '230px' : '680px'}
      />
    </div>
  );
}
