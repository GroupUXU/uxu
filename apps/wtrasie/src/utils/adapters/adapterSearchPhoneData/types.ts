export type InputData = {
		hits: Array<{
				title: string;
				createdAt: string;
				id: number;
				type: string;
				lead: {
						id: number;
						lead: string;
				};
		}>;
}

export type Hit = {
		title: string;
		createdAt: string;
		id: number | string;
		type: string;
		lead: {
				lead: string;
		};
}