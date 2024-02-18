import type {ReactElement} from 'react';
import type {TableChunkProps} from './types';
import {Table} from '../../../../atoms/table'

export function TableChunk({columns, data}: TableChunkProps): ReactElement {
		return <Table columns={columns} data={data}/>
}

