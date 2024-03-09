import type { ReactElement } from "react";
import Image from "next/image";
import { Link } from "../../../../../atoms/link";
import { AvatarGroup } from "../../../../../molecules/avatarGroup";
import type { PostListProps } from './types';
import styles from './postList.module.scss';

export function PostList ( {posts}: PostListProps ): ReactElement | null {

  if ( !posts.length ) return null

  return (
    <div className={styles.wrapper}>
      {
        posts.map ( ( post ) => {
          return (
            <Link href={post.slug} key={post.id} title={post.title}>
              <article className={styles.article}>
                {post.cover?.src ? (
                  <div className={styles.cover}>
                    <Image alt={post.cover.caption || post.title} fill priority sizes="(max-width: 600px) 100vw, 50vw" src={post.cover.src}  />
                  </div>
                ) : null}
                <div className={styles.conent}>
                  <AvatarGroup members={post.authors} size="small"/>
                  <h2>{post.title}</h2>
                  <p>{post.lead}</p>
                </div>
              </article>
            </Link>
          )
        } )}
    </div>
  )
}
