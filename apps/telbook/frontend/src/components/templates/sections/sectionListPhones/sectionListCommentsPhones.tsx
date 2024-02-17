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
               action={comment.phone ? <Link className="btn primary" href={createSlugForPhone(comment.phone)} title={comment.phone}>{comment.phone}</Link> : undefined}
               fill
               key={comment.id}
               type={comment.type}
            >
              {comment.message}
            </Note>
         )
       })}
     </section>
  )
}