import path from 'path';
import {filesListToParse} from '../consts';
import {type NetworkOperatorNumbersRange} from "../types";
import {createNetworkOperatorNumbersRange} from './utils';
import {saveListData} from "../utils";

// initialization
let networkOperatorNumbersRange: NetworkOperatorNumbersRange = {};

export async function createListRangePhones(): Promise<void> {
		for (const fileListToParse of filesListToParse) {
				networkOperatorNumbersRange = await createNetworkOperatorNumbersRange({fileListToParse, networkOperatorNumbersRange});
		}
		
		saveListData<NetworkOperatorNumbersRange>({
				saveNewListInPath: path.join(__dirname,  '..',  'utils', 'networkOperatorNumbersRange.ts'),
				listData: networkOperatorNumbersRange,
				listName: 'networkOperatorNumbersRange',
				typeInString: `Record<string, { operatorId: string, operatorName: string, range: number, typ: 'stationary' | 'mobile' | 'premium', createdAt: string, zone?: number | null, zoneName?: string | null }>`
		});
}

