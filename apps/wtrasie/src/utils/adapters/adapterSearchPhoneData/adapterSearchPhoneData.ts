/* eslint-disable camelcase -- it is ok */
import type { Search, Maybe, Enum_Type, SearchResults} from 'queries';
import type {InputData, Hit} from './types';

function isInputData(data: unknown): data is InputData {
		return (
					typeof data === 'object' &&
					data !== null &&
					'hits' in data &&
					Array.isArray((data as InputData).hits)
		);
}

export function adapterSearchPhoneData(searchData: unknown): SearchResults {
		if (!isInputData(searchData)) {
				throw new Error('Invalid input data');
		}
		
		const adaptedHits: Array<Maybe<Search>> = searchData.hits.map((hit: Hit) => ({
				id: String(hit.id),
				lead: hit.lead.lead,
				title: hit.title,
				type: hit.type.toUpperCase() as Enum_Type,
		}));
		
		return {
				hits: adaptedHits,
		};
}