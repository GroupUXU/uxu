import type { ReactElement } from "react";
import { parseFormatDate } from "utils";
import { AvatarGroup } from "../../../../../../molecules/avatarGroup";
import styles from "./articleMetaWrapper.module.scss";
import type { ArticleMetaWrapperProps } from "./types";

export function ArticleMetaWrapper({ authors, createdAt }: ArticleMetaWrapperProps): ReactElement {

  function renderAuthors(): Array<ReactElement> | null {
    return authors?.map((author, index) => {
      const prefix = index > 0 ? ', ' : '';
      return <span key={author.id}>{prefix}{author.title}</span>;
    }) || null;
  }

  return (
    <div className={styles.wrapperArticleMeta}>
      <AvatarGroup members={authors || []} size="default" />
      <div className={styles.wrapperMeta}>
        <div className={styles.authors}>
          {renderAuthors()}
        </div>
        <div className={styles.wrapperPublicationDate}>
          {createdAt ? <span>{parseFormatDate(createdAt)}</span> : null}
        </div>
      </div>
    </div>
  );
}
