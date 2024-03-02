import type { ReactElement } from "react";
import { Link } from "../../atoms/link";
import type { TagListProps } from "./types";
import styles from './tagList.module.scss';

export function TagList({ tags }: TagListProps): ReactElement {
  return (
     <ul className={styles.list}>
       {tags?.map(({ id, slug, title }) => (
          <li key={id}>
            {slug ? <Link href={slug} title={title}>{title}</Link> : <p>{title}</p>}
          </li>
       ))}
     </ul>
  );
}
