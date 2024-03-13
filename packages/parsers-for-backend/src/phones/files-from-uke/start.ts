import {createListPhoneOperators} from './create-list-phone-operators';
import {createListRangePhones} from './create-list-range-phones';

async function start(): Promise<void> {
		console.log('############## START PARSE FILES FROM UKE ##############');
		await createListPhoneOperators().then(r => console.log('######### finish create list phone operators #########'));
		await createListRangePhones().then(r => console.log('######### finish create list range phones #########'));
		console.log('############## FINISH PARSE FILES FROM UKE ##############');
}


start().then(r => {/* empty */})