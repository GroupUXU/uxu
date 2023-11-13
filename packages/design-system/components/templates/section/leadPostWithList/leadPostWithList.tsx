
import Image from 'next/image';
import type { PostShort } from 'utils'
import { Container } from '../../../atoms/container';
import type { LeadPostWithListProps } from './types'
import { LeadPost, PostList } from './component'
import styles from './leadPostWithList.module.scss';

export function LeadPostWithList ( { posts }: LeadPostWithListProps ) {
  const leadPostData: PostShort = posts.slice(0, 1)[0];
  const rest: Array<PostShort> = posts.slice(1, 5);

  return (
    <section className={styles.wrapper}>
      {leadPostData.cover?.src && (
        <div className={styles.wrapperImage}>
          <Image src={leadPostData.cover.src} layout="fill" objectFit="cover" alt={leadPostData.cover.caption || ""}/>
        </div>
      )}
      <Container className={styles.content}>
        <LeadPost {...leadPostData} />
        <PostList posts={rest} />
      </Container>
    </section>
  );
}
