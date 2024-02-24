import type {ReactElement} from "react";
import classnames from "classnames";
import type {CommentListProps} from './types'
import style from './commentList.module.scss';

export function CommentList({data}: CommentListProps): Array<ReactElement> | ReactElement {
    if (!data?.length) {
        return (
            <div className={style.wrapper}>
                <span className={style.info}>Brak komentarzy</span>
            </div>
        )
    }
    return data.map((comment) => {
        const status = comment.status || 'default';
        return (
            <div className={style.wrapper} key={comment.id}>
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
                        <span className={style.date}>{comment.createdAt}</span>
                    </div>
                </div>
                <p>{comment.message}</p>
            </div>
        )
    })
}
