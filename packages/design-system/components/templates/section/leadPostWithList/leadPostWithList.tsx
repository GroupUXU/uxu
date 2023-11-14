import Image from 'next/image';
import type { PostShort } from 'utils'
import { Container } from '../../../atoms';
import type { LeadPostWithListProps } from './types'
import { LeadPost, PostList } from './component'
import styles from './leadPostWithList.module.scss';

export function LeadPostWithList ( { posts }: LeadPostWithListProps ) {
  const leadPostData: Array<PostShort> = posts.slice(0, 1);
  const rest: Array<PostShort> = posts.slice(1, 5);

  return (
    <section className={styles.wrapper}>
      {leadPostData[0]?.cover?.src && (
        <div className={styles.wrapperImage}>
          <Image src={leadPostData[0].cover.src} layout="fill" objectFit="cover" alt={leadPostData[0].cover.caption || ""}/>
        </div>
      )}
      <Container className={styles.content}>
        {leadPostData[ 0 ] && <LeadPost {...leadPostData[ 0 ]} />}
        {rest[0] && <PostList posts={rest}/>}
      </Container>
    </section>
  );
}
