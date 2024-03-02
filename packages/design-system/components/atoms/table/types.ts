import type {ReactElement} from "react";

export type TableProps = {
		columns: Array<{ id: string, value: string | ReactElement }>,
		data: Array<Record<string, { id: string, value: string | ReactElement }>>
}