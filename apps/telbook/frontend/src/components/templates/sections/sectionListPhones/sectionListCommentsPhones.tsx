import type {ReactElement} from "react";
import {Note} from "design-system/components/atoms/note";
import Link from "next/link";
import styles from './sectionListCommentsPhones.module.scss';
import type {SectionListCommentsPhonesProps} from './types';
import {createSlugForPhone} from '../../../../utils/function';

export function SectionListCommentsPhones({comments}: SectionListCommentsPhonesProps): ReactElement {
  return (
     <section className={styles.section}>
       {comments.map((comment) => {
         return (
            <Note
               action={comment.author?.title ? <Link className="btn primary" href={createSlugForPhone(comment.author.title, comment.author.id)} title={comment.author.title}>{comment.author.title}</Link> : undefined}
               fill
               key={comment.id}
               typ={comment.reputation}
            >
              {comment.message}
            </Note>
         )
       })}
     </section>
  )
}