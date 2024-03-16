/* eslint-disable camelcase, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment -- it is ok */
import { type SearchResults, Enum_Type} from 'queries';
import type {AdapterSearchPhoneDataProps} from './types';

export function adapterSearchPhoneData(searchData: unknown): SearchResults {
		if (typeof searchData !== 'object' || searchData === null) return {hits: []};
		if (!('data' in searchData)) return {hits: []};
		const data = (searchData as AdapterSearchPhoneDataProps).data;
		
		return {
				hits: data.map(item => ({
						id: `${item.id}`,
						lead:  item.attributes.network,
						title: item.attributes.phone,
						type: Enum_Type.Phone,
				}))
		};
}