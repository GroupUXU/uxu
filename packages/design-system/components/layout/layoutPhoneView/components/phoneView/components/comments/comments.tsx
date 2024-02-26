import type {ReactElement} from "react";
import classnames from "classnames";
import {parseFormatDate} from 'utils';
import type {CommentsProps} from './types';
import style from './comments.module.scss';

export function Comments({comments}: CommentsProps): Array<ReactElement> | ReactElement {
    if (!comments?.length) {
        return (
            <div className={style.wrapper}>
                <div className={style.comment}>
                    <span className={style.info}>Brak komentarzy</span>
                </div>
            </div>
        )
    }


    return (
        <div className={style.wrapper}>
            {comments.map((comment) => {
                const status = comment.status || 'default';
                return (
                    <div className={style.comment} key={comment.id}>
                        <div
                            className={classnames(style.wrapperData, {
                                [style.success]: status === 'success',
                                [style.warning]: status === 'warning',
                                [style.danger]: status === 'danger',
                                [style.error]: status === 'error'
                            })}
                        >
                            <div className={style.circle}/>
                            <div className={style.data}>
                                <span className={style.reputation}>{comment.status}</span>
                                <span className={style.date}>{parseFormatDate(comment.createdAt)}</span>
                            </div>
                        </div>
                        <p>{comment.message}</p>
                    </div>
                )
            })}
        </div>
    )
}
