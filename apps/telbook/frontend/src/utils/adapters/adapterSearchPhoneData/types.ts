export type AdapterSearchPhoneDataProps = {
		data: Array<{
				id: number,
				attributes: {
						network: string,
						phone: string,
						createdAt: string,
						updatedAt: string,
						ratings: {
								error: number,
								danger: number,
								default: number,
								success: number,
								warning: number
						},
						typ: string,
						owner: null | string
				}
		}>,
		meta: null | {
				pagination: {
						page: number,
						pageSize: number,
						pageCount: number,
						total: number
				}
		}
};

export type AdapterSearchPhoneData = Array<{
		id: number,
		type: string,
		title: string,
		lead: {
				lead: string
		}
}>;