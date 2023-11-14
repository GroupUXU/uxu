import type { ReactElement } from "react";
import { Link } from "../../atoms/link";
import type { TagListProps } from "./types";
import styles from './tagList.module.scss';

export function TagList({ tags }: TagListProps): ReactElement {
  return (
    <ul className={styles.list}>
      {tags?.map((tag) => {
        return <li key={tag.id}><Link href={tag.slug} title={tag.title}>{tag.title}</Link></li>
      })}
    </ul>
  );
}
