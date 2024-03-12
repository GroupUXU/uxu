import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import {Readable} from 'stream';
import {networkOperatorsPLByID} from './networkOperatorsPLByID';
import {type NetworkOperatorsByID, type NetworkOperatorsByName, type OperatorNumbersRange} from "./types";

// initialization
const networkOperatorsByID: NetworkOperatorsByID = networkOperatorsPLByID;
const networkOperatorsByName: NetworkOperatorsByName = {};
const operatorNumbersRange: OperatorNumbersRange = {};

// Processing files
const filesToParse = ['PLMN.csv', 'PSTN.csv'];

function expandNumberString(input: string): Array<number> {
    const result: number[] = [];
    const matchRange = input.match(/\((.*)\)/);
    if (matchRange) {
        const range = matchRange[1].split(',');
        range.forEach(part => {
            const parts = part.split('-').map(Number);
            const start: number = parts[0];
            const end: number = parts.length > 1 ? parts[1] : start;

            for (let i = start; i <= end; i++) {
                result.push(parseInt(input.replace(/\(.*\)/, i.toString()), 10));
            }
        });
    } else {
        result.push(parseInt(input, 10));
    }
    return result;
}

function processFilesForOperatorsByNameAndRange(filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        const fileBuffer = fs.readFileSync(filePath);
        const fileText = iconv.decode(fileBuffer, 'ISO-8859-2');
        const stream = Readable.from(fileText);

        stream.pipe(csv({separator: ';'}))
            .on('data', (line: Record<string, string | undefined>) => {

                const operatorId = line['Operator (ID)'];
                const operatorName = operatorId ? networkOperatorsByID[operatorId].name : undefined;
                const ranges = line['Zakres (number)'] as string ? expandNumberString(line['Zakres (number)'] as string) : [];
                const zoneName = line['Strefa (nazwa)'];
                const zone = line['Strefa (AB)'];

                if (operatorName && operatorId) {
                    networkOperatorsByName[operatorName] = {id: operatorId, createdAt: new Date().toISOString()}
                }


                ranges.forEach((range: number): void => {
                    if (range && operatorName && operatorId && !['99990', '99991', '99992'].includes(operatorId as string)) {
                        operatorNumbersRange[`${range}`] = {
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
                resolve();
            })
            .on('error', (error) => {
                console.error(`Error reading CSV file: ${filename}`, error);
                reject(error);
            });
    });
}


async function processFileForOperatorsByID(filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        const fileBuffer = fs.readFileSync(filePath);
        const fileText = iconv.decode(fileBuffer, 'ISO-8859-2');
        const stream = Readable.from(fileText);

        stream.pipe(csv({separator: ';'}))
            .on('data', (line: any) => {
                console.error(line)
                const operatorId = line['Operator (ID)'];
                if (operatorId && !networkOperatorsByID[operatorId]) {
                    networkOperatorsByID[operatorId] = {
                        name: line['Operator (nazwa)'],
                        createdAt: new Date().toISOString(),
                        checkedManually: false,
                    };
                }
            })
            .on('end', () => {
                resolve();
            })
            .on('error', (error) => {
                console.error(`Error reading CSV file: ${filename}`, error);
                reject(error);
            });
    });
}

function saveMapData<Type>(filePath: string, obj: Type, objName: string, typeName: string) {
    let typeImportStatement = `import { ${typeName} } from "./types";\n\n`;
    let content = `export const ${objName} = ${JSON.stringify(obj, null, 2)};\n`;

    fs.writeFileSync(filePath, content, {encoding: 'utf-8'});
    console.log(`${filePath} has been saved!`);
}

async function run() {
    for (const filename of filesToParse) {
        await processFileForOperatorsByID(filename);
    }

    for (const filename of filesToParse) {
        await processFilesForOperatorsByNameAndRange(filename);
    }

    saveMapData(path.join(__dirname, '..', '..', 'src', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
    saveMapData(path.join(__dirname, '..', '..', 'src', 'phones', 'networkOperatorsPLByName.ts'), networkOperatorsByName, 'networkOperatorsPLByName', 'NetworkOperatorsByName');
    saveMapData(path.join(__dirname, '..', '..', 'src', 'phones', 'operatorPLNumbersRange.ts'), operatorNumbersRange, 'operatorPLNumbersRange', 'OperatorNumbersRange');
    saveMapData(path.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
    saveMapData(path.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByName.ts'), networkOperatorsByName, 'networkOperatorsPLByName', 'NetworkOperatorsByName');
    saveMapData(path.join(__dirname, '..', '..', '..', 'utils', 'phones', 'operatorPLNumbersRange.ts'), operatorNumbersRange, 'operatorPLNumbersRange', 'OperatorNumbersRange');
}

run().then(r => console.log('######### finish #########'));

