import path from 'path';
import {networkOperatorsListPLByID as networkOperatorsListPLByIDInitialization, saveListData} from '../utils';
import {type NetworkOperatorsListPLByID, type NetworkOperatorsListPLByName} from "../types";
import {createNetworkOperatorsListPLByName, createNetworkOperatorsListPLByID} from './utils';
import {filesListToParse} from '../consts';

// initialization
let networkOperatorsListPLByID: NetworkOperatorsListPLByID = networkOperatorsListPLByIDInitialization || {};
let networkOperatorsListPLByName: NetworkOperatorsListPLByName = {};


export async function createListPhoneOperators(): Promise<void> {
		for (const fileToParse of filesListToParse) {
				networkOperatorsListPLByID = await createNetworkOperatorsListPLByID({fileToParse, networkOperatorsListPLByID});
		}
		
		networkOperatorsListPLByName = createNetworkOperatorsListPLByName(networkOperatorsListPLByID);
		
		saveListData<NetworkOperatorsListPLByID>({
				saveNewListInPath: path.join(__dirname, '..',  'utils', 'networkOperatorsListPLByID.ts'),
				listData: networkOperatorsListPLByID,
				listName: 'networkOperatorsListPLByID',
				typeInString: `Record<string, { name: string, createdAt: string, checkedManually: boolean }>`
		});
		
		saveListData<NetworkOperatorsListPLByName>({
				saveNewListInPath: path.join(__dirname,  '..',  'utils', 'networkOperatorsListPLByName.ts'),
				listData: networkOperatorsListPLByName,
				listName: 'networkOperatorsListPLByName',
				typeInString: `Record<string, { id: string, createdAt: string }>`
		});
}

