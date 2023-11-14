import type { ReactElement } from "react";
import { Link } from "../../../../../atoms";
import { AvatarGroup } from "../../../../../molecules";
import type { LeadPostProps } from './types'
import styles from './leadPost.module.scss';

export function LeadPost(props: LeadPostProps): ReactElement {
  const { title, lead, authors, slug } = props;
  return (
    <Link className={styles.wrapper} href={slug} title={title}>
      <AvatarGroup members={authors} size="default" />
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.lead}>{lead}</p>
    </Link>
  );
}
