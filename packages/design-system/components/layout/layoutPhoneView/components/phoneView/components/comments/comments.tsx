import type {ReactElement} from "react";
import classnames from "classnames";
import {parseFormatDate, statusMapToPL} from 'utils';
import type {CommentsProps} from './types';
import style from './comments.module.scss';
import {InfiniteScroll} from "../../../../../../molecules/infiniteScroll";

export function Comments({comments, infiniteScrollMoreComments}: CommentsProps): Array<ReactElement> | ReactElement {
		if (!comments.length) {
				return (
							<div className={style.wrapper}>
									<div className={style.comment}>
											<span className={style.info}>Brak komentarzy</span>
									</div>
							</div>
				)
		}
		
		
		return (
					<InfiniteScroll {...infiniteScrollMoreComments}>
							<div className={style.wrapper}>
									{comments.map((comment) => {
											const status = comment.status || 'default';
											return (
														<div className={style.comment} key={comment.id}>
																<div className={classnames(style.wrapperData, style[status])}>
																		<div className={style.circle}/>
																		<div className={style.data}>
																				<span className={style.reputation}>{statusMapToPL(comment.status)}</span>
																				<span className={style.date}>{parseFormatDate(comment.createdAt)}</span>
																		</div>
																</div>
																<p>{comment.message}</p>
														</div>
											)
									})}
							</div>
					</InfiniteScroll>
		)
}
