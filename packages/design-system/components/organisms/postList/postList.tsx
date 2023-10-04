import type { ReactElement } from "react";
import Img from "next/image";
import { Image } from "react-feather";
import { Link } from "../../atoms";
import { AvatarGroup } from "../../molecules";
import styles from './postList.module.scss'
import type { PostListProps } from "./types";

export function PostList({ authors = [], cover, slug, title }: PostListProps): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Link href={slug} title="koko">
        <article className={styles.article}>
          <div className={styles.img}>
            {cover?.src  ? (
              <Img
                alt={cover.alt || title}
                fill
                src={cover.src}
              />
            ) : (
              <Image size={50} />
            )}
          </div>
          <div className={styles.content}>
            <h2 className={styles.header}>{title}</h2>
            <AvatarGroup
              className={styles.autors}
              members={authors}
              size="default"
            />
          </div>
        </article>
      </Link>
    </div>
  );
}
