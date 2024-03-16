/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- I need this */
import {useMemo, type ReactElement, type CSSProperties} from 'react';
import {BookOpen, FileText, Phone} from 'react-feather';
import classnames from 'classnames';
import {Link} from '../../../../../../../atoms/link';
import styles from './searchSuggestionList.module.scss';
import type {SuggestionListProps} from "./types";

export function SearchSuggestionList({suggestions, listType, onMouseEnter, currentHoveredSuggestionIndex, setIsOpenModal}: SuggestionListProps): ReactElement {
		const afterStyle: CSSProperties = ({top: `${currentHoveredSuggestionIndex * 6}rem`});
		
		const icon = useMemo(() => ({
				phone: <Phone/>,
				post: <BookOpen/>,
				default: <FileText/>,
		}), []);
		
		return (
					<ul className={classnames(styles.searchResultList, 'searchResultList')} style={{'--uxu-searchResultList': afterStyle.top} as CSSProperties}>
							{suggestions.map(({title, slug, type, lead}, index) => (
										<li
													key={slug}
													onClick={() => {setIsOpenModal(false)}}
													onMouseEnter={() => {onMouseEnter(index)}}
										>
												<Link href={slug} title={title}>
														{icon[type] || icon.default}
														<div className={styles.content}>
																<p className={styles.title}>{title}</p>
																{listType === 'searchResults' && lead ? <span className={styles.lead}>{lead}</span> : null}
														</div>
												</Link>
										</li>
							))}
					</ul>
		);
}
