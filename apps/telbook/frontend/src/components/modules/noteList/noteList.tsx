import type {ReactElement} from "react";
import {Note} from "design-system/components/atoms/note";
import type {NotionListProps} from './types';
import styles from './noteList.module.scss';

export function NoteList({data}: NotionListProps): ReactElement {
    return (
        <div className={styles.wrapper}>
            {data.map((note, index) => {
                return <Note key={`note-${index}`} {...note} />
            })}
        </div>
    )
}
