import type {ReactElement} from 'react';
import type {TableProps} from './types';
import style from './table.module.scss';

export function Table({columns, data}: TableProps): ReactElement {
		return (
					<div className={style.wrapperTable}>
							<table className={style.table}>
									<thead>
									<tr>
											{columns.map((column, index) => (
														<th
																	key={column.id}
																	style={{
																			borderLeft: index === 0 ? 'var(--uxu-border-default)' : 'none',
																			borderRight: index === columns.length - 1 ? 'var(--uxu-border-default)' : 'none',
																	}}
														>
																{column.value}
														</th>
											))}
									</tr>
									</thead>
									<tbody>
									{data.map((row, index) => (
												<tr key={index}>
														{columns.map((column) => <td key={column.id + index}>{row[column.id].value}</td>)}
												</tr>
									))}
									</tbody>
							</table>
					</div>
		);
}

