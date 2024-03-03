import fs from 'fs';
import csv from 'csv-parser';
import {phoneOperatorMapData} from './phoneOperatorMap';
import {phoneNumberRangeMapData} from './phoneNumberRangeMap';

// Define the maps to store operator and range data
const phoneOperatorMap = new Map();
const phoneNumberRangeMap = new Map();

for (const [key, value] of phoneOperatorMapData) {
		phoneOperatorMap.set(key, value);
}

for (const [key, value] of phoneNumberRangeMapData) {
		phoneNumberRangeMap.set(key, value);
}

// Function to parse a single line from the CSV
function parseLine(line:  Record<string, string>) {
		// Extracting the line text from data object
		const lines = line['Numer;Operator (ID);Operator (nazwa);Rodzaj numeru];Data modyfikacji'];
		// Split the line by semicolon
		const segments = lines.split(';');
		const data = {numer: segments[0], operatorID: segments[1], operatorName: segments[2], type: segments[3], createAt: segments[4]};
		console.log(data, 'data');
		if (!phoneOperatorMap.has(data.operatorID)) {
				phoneOperatorMap.set(data.operatorID, {name: data.operatorName, type: data.type, createAt: data.createAt});
		}
		if (!phoneNumberRangeMap.has(data.numer)) {
				phoneNumberRangeMap.set(data.numer, data.numer);
		}
}

// Read the CSV file
fs.createReadStream('plik.csv')
			// Pipe the data to the CSV parser
			.pipe(csv())
			// Process each line
			.on('data', parseLine)
			// Handle potential errors during parsing
			.on('error', (error) => {
					console.error('Error reading CSV:', error.message);
			})
			// Once all lines are processed, handle map data
			.on('end', () => {
					// Convert maps to JSON strings
					const phoneOperatorMapJSON = JSON.stringify(Array.from(phoneOperatorMap));
					const phoneNumberRangeMapJSON = JSON.stringify(Array.from(phoneNumberRangeMap));
					// Write operatorMap to a TypeScript file
					fs.writeFile('phoneOperatorMapData.ts', `export const operatorMap = new Map(${phoneOperatorMapJSON});`, (err) => {
							if (err) throw err;
							console.log('phoneOperatorMapData.ts has been saved!');
					});
					// Write rangeMap to a TypeScript file
					fs.writeFile('phoneNumberRangeMapData.ts', `export const rangeMap = new Map(${phoneNumberRangeMapJSON});`, (err) => {
							if (err) throw err;
							console.log('phoneNumberRangeMapData.ts has been saved!');
					});
			});
