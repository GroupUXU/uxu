import type {NetworkOperatorsListPLByID} from "../../types";
import path from "path";
import {promises as fsPromises} from "fs";
import iconv from "iconv-lite";
import {Readable} from "stream";
import csv from "csv-parser";


type createNetworkOperatorsListPLByIDProps = {
		fileToParse: string,
		networkOperatorsListPLByID: NetworkOperatorsListPLByID
}

export async function createNetworkOperatorsListPLByID({fileToParse, networkOperatorsListPLByID}: createNetworkOperatorsListPLByIDProps): Promise<NetworkOperatorsListPLByID> {
		const filePath = path.join(__dirname, '..', '..', 'assets', fileToParse);
		const fileBuffer = await fsPromises.readFile(filePath);
		const fileText = iconv.decode(fileBuffer, 'ISO-8859-2');
		const stream = Readable.from(fileText);
		
		return new Promise((resolve, reject) => {
				stream.pipe(csv({separator: ';'}))
							.on('data', (line: Record<string, string>): void => {
									const operatorId = line['Operator (ID)'];
									if (operatorId && !networkOperatorsListPLByID[operatorId]) {
											networkOperatorsListPLByID[operatorId] = {
													name: line['Operator (nazwa)'],
													createdAt: new Date().toISOString(),
													checkedManually: false,
											};
									}
							})
							.on('end', () => resolve(networkOperatorsListPLByID))
							.on('error', (error) => {
									console.error(`Error reading CSV file: ${fileToParse}`, error);
									reject(error);
							});
		});
}