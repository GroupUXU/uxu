import type { ReactElement } from "react";
import type { PostListProps } from './types';
import { Link } from "../../../../../atoms";
import { AvatarGroup } from "../../../../../molecules";
import styles from './postList.module.scss';
import Image from "next/image";

export function PostList ( {posts}: PostListProps ): ReactElement | null {

  if ( !posts.length ) return null

  return (
    <div className={styles.wrapper}>
      {
        posts.map ( ( post ) => {
          return (
            <Link href={post.slug} title={post.title} key={post.id}>
              <article className={styles.article}>
                {post.cover?.src && (
                  <div className={styles.cover}>
                    <Image src={post.cover.src} layout="fill" objectFit="cover" alt={post.cover.caption || ""}/>
                  </div>
                )}
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