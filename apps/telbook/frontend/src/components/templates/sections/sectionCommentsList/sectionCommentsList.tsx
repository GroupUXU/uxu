import type {ReactElement} from "react";
import style from './sectionCommentsList.module.scss';
import {NoteList} from "../../../modules/noteList";
import Link from "next/link";
import {createSlugForPhone} from "../../../../utils/function";
import {SectionCommentsListProps} from './types';

export function SectionCommentsList({data}: SectionCommentsListProps): ReactElement {
    return (
        <section className={style.wrapper}>
            <NoteList data={data.map((comment) => ({
                typ: comment.status || "default",
                children: comment.message,
                action: comment.author?.title ? (
                    <Link
                        className={`btn ${comment.status}`}
                        href={createSlugForPhone(comment.author.title, comment.id || "")}
                        title={comment.author.title}
                    >
                        {comment.author.title}
                    </Link>
                ) : null
            }))}/>
        </section>
    )
}
