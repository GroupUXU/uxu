import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import {Readable} from 'stream';
import {promises as fsPromises} from 'fs';
import {networkOperatorsListPLByID} from "../../utils";
import {type NetworkOperatorNumbersRange} from "../../types";
import {createNumbersRange} from './createNumbersRange';

type CreateNetworkOperatorNumbersRangeProps = {
		fileListToParse: string,
		networkOperatorNumbersRange: NetworkOperatorNumbersRange
}

export async function createNetworkOperatorNumbersRange({fileListToParse, networkOperatorNumbersRange}: CreateNetworkOperatorNumbersRangeProps): Promise<NetworkOperatorNumbersRange> {
		const filePath = path.join(__dirname, '..', '..', 'assets', fileListToParse);
		const fileBuffer = await fsPromises.readFile(filePath);
		const fileText = iconv.decode(fileBuffer, 'ISO-8859-2');
		const stream = Readable.from(fileText);
		
		return new Promise((resolve, reject) => {
				stream.pipe(csv({separator: ';'})).on('data', (line: Record<string, string | undefined>) => {
						const operatorId = line['Operator (ID)'];
						const operatorName = operatorId ? networkOperatorsListPLByID[operatorId].name : undefined;
						const ranges = line['Zakres (number)'] as string ? createNumbersRange(line['Zakres (number)'] as string) : [];
						const zoneName = line['Strefa (nazwa)'];
						const zone = line['Strefa (AB)'];
						
						ranges.forEach((range: number): void => {
								if (range && operatorName && operatorId && !['99990', '99991', '99992'].includes(operatorId as string)) {
										networkOperatorNumbersRange[`${range}`] = {
												operatorId,
												operatorName,
												zoneName,
												range,
												typ: (zoneName && zone) ? 'stationary' : 'mobile',
												zone: parseInt(zone as string),
												createdAt: new Date().toISOString()
										}
								}
						})
				})
							.on('end', () => {
									resolve(networkOperatorNumbersRange);
							})
							.on('error', (error) => {
									console.error(`Error reading CSV file: ${fileListToParse}`, error);
									reject(error);
							});
		});
}