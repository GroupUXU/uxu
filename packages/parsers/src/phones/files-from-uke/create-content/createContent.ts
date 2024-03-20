import path from 'path';
// Pobieram pliki
import {lastUpdatePhoneData} from './lastUpdatePhoneData';
import {networkOperatorNumbersRange, saveListData} from '../utils';
import {generatePhoneNumbers, generatePhoneNumberStatusImage} from './utils';
import type {LastUpdatePhone} from "./types";


async function createContent(): Promise<boolean> {
		try {
				if (lastUpdatePhoneData.error) return false;
				// ustalam index dla ostatnio obsługiwanego range
				const keys = Object.keys(networkOperatorNumbersRange);
				let currentIndex = lastUpdatePhoneData.range ? keys.indexOf(lastUpdatePhoneData.range.toString()) : 0;
				if (currentIndex === -1) currentIndex = 0;
				
				// ustalam początkowy numer oraz końcowy numer telefonu
				const startNumer = lastUpdatePhoneData.lastNumber ? lastUpdatePhoneData.lastNumber : parseInt(String(keys[currentIndex]).padEnd(9, '0'));
				const endNumer = parseInt(String(keys[currentIndex]).padEnd(9, '9')).valueOf();
				const phoneNumbersGenerator = generatePhoneNumbers(startNumer, endNumer);
				const createPhoneNow = phoneNumbersGenerator.next().value;
				
				// created image
				generatePhoneNumberStatusImage({phone: `+48${createPhoneNow}`});
				console.log(createPhoneNow)
				return true;
				
		} catch (error) {
				console.error(error);
				// 11. Aktualizacja flagi błędu w przypadku wystąpienia wyjątku
				let lastUpdatePhoneDataNew: LastUpdatePhone = {...lastUpdatePhoneData};
				lastUpdatePhoneDataNew.error = true;
				saveListData<LastUpdatePhone>({
						saveNewListInPath: path.join(__dirname, 'lastUpdatePhoneData.ts'),
						listData: lastUpdatePhoneDataNew,
						listName: 'lastUpdatePhoneData',
						typeInString: `{ error: boolean; range: number | null; lastNumber: number | null; }`
				});
				
				return false
		}
}


createContent()