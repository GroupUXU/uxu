import type {AdapterSearchPhoneData, AdapterSearchPhoneDataProps} from './types';

export function adapterSearchPhoneData(searchData: unknown): AdapterSearchPhoneData | [] {
		if (typeof searchData !== 'object' || searchData === null) return [];
		if (!('data' in searchData)) return [];
		const data = (searchData as AdapterSearchPhoneDataProps).data;

		return data.map(item => ({
				id: item.id,
				type: 'phone',
				title: item.attributes.phone,
				lead: {
						lead: item.attributes.network
				}
		}));
}