import Image from 'next/image';
import type { ReactElement } from "react";
import type { PostShort } from 'utils'
import { Container } from '../../../atoms/container';
import type { LeadPostWithListProps } from './types'
import { LeadPost, PostList } from './component'
import styles from './leadPostWithList.module.scss';

export function LeadPostWithList ({ posts }: LeadPostWithListProps ): ReactElement {
  const leadPostData: Array<PostShort> = posts.slice(0, 1);
  const rest: Array<PostShort> = posts.slice(1, 5);

  return (
    <section className={styles.wrapper}>
      {leadPostData[0]?.cover?.src ? (
        <div className={styles.wrapperImage}>
          <Image alt={leadPostData[0].cover.caption || leadPostData[0].title} fill priority sizes="(max-width: 600px) 100vw, 50vw"  src={leadPostData[0].cover.src} />
        </div>
      ) : null}
      <Container className={styles.content}>
        {leadPostData[0] ? <LeadPost {...leadPostData[ 0 ]} /> : null}
        {rest[0] ? <PostList posts={rest}/> : null}
      </Container>
    </section>
  );
}
