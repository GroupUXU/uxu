import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import {Readable} from 'stream';
import type {NumberRange, PhoneOperator} from "./types";

// Maps initialization
const phoneOperatorMap: Record<string, PhoneOperator> = {};
const phoneNumberRangeMap: Record<number, NumberRange> = {};

function expandNumberString(input: string): Array<number> {
    const result: number[] = [];
    const matchRange = input.match(/\((.*)\)/);
    if (matchRange) {
        const range = matchRange[1].split(',');
        range.forEach(part => {
            const parts = part.split('-').map(Number);
            const start: number = parts[0];
            const end: number = parts.length > 1 ? parts[1] : start; // Użyj wartości start jako domyślnej dla end, jeśli nie określono zakresu

            for (let i = start; i <= end; i++) {
                result.push(parseInt(input.replace(/\(.*\)/, i.toString()), 10));
            }
        });
    } else {
        result.push(parseInt(input, 10));
    }
    return result;
}

function parseLine(filename: string, line: Record<string, string>) {
    const fieldMapping: Record<string, {
        key: string;
        data: {
            zoneIndex?: number;
            numberingRangeIndex: number;
            operatorNameIndex: number;
            operatorIdIndex: number;
            zoneNameIndex?: number;
            createdAtIndex: number;
            type: 'stationary' | 'mobile';
        }
    }> = {
        'PSTN.csv': {
            key: 'Strefa (AB);Zakres (number);Operator (nazwa);Operator (ID);Strefa (nazwa);Strefa (symbol);Obszar numeracyjny;Data modyfikacji',
            data: {
                zoneIndex: 0,
                numberingRangeIndex: 1,
                operatorNameIndex: 2,
                operatorIdIndex: 3,
                zoneNameIndex: 4,
                createdAtIndex: 7,
                type: "stationary"
            }
        },
        'PLMN.csv': {
            key: 'Zakres (number);Operator (ID);Operator (nazwa);Data modyfikacji',
            data: {
                numberingRangeIndex: 0,
                operatorIdIndex: 1,
                operatorNameIndex: 2,
                createdAtIndex: 3,
                type: "mobile" // Zakładając, że PLMN to typ "mobile"
            }
        }
    };

    const mapping = fieldMapping[filename];
    if (!mapping) return; // Skip jeśli nie ma mapowania dla pliku

    const segments = line[mapping.key].split(';');
    const expandNumberingRange = filename === 'PSTN.csv' ? expandNumberString(segments[mapping.data.numberingRangeIndex]) : [parseInt(segments[mapping.data.numberingRangeIndex])];

    const data = {
        zone: mapping.data.zoneIndex !== undefined ? parseInt(segments[mapping.data.zoneIndex]) : undefined,
        zoneName: mapping.data.zoneNameIndex !== undefined ? segments[mapping.data.zoneNameIndex] : undefined,
        numberingRange: expandNumberingRange,
        operatorName: segments[mapping.data.operatorNameIndex],
        operatorId: parseInt(segments[mapping.data.operatorIdIndex]),
        typ: mapping.data.type,
        createdAt: segments[mapping.data.createdAtIndex]
    };
console.log(data.operatorName)
    data.numberingRange.forEach(range => {
        if (!phoneNumberRangeMap[range] && data.operatorName && ![99990, 99991, 99992].includes(data.operatorId)) {
            phoneNumberRangeMap[range] = {...data, numberingRange: range};
        }
    });

    if (!phoneOperatorMap[`${data.operatorId}`]) {
        phoneOperatorMap[`${data.operatorId}`] = {
            operatorId: data.operatorId,
            operatorName: data.operatorName
        };
    }
}

function saveMapData(filePath: string, obj: Record<any, any>, objName: string) {
    let content = `export const ${objName} = ${JSON.stringify(obj, null, 2)};\n`;

    fs.writeFileSync(filePath, content, {encoding: 'utf-8'});
    console.log(`${filePath} has been saved!`);
}

function mapValueToCode(value: any): string {
    return `{ ${Object.entries(value).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join(', ')} }`;
}

// Processing files
const filesToParse = ['PLMN.csv', 'PSTN.csv'];

function processFile(filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        const fileBuffer = fs.readFileSync(filePath);
        const fileText = iconv.decode(fileBuffer, 'ISO-8859-2');
        const stream = Readable.from(fileText);

        stream.pipe(csv())
            .on('data', line => parseLine(filename, line))
            .on('error', error => {
                console.error(`Error reading CSV file: ${filename}`, error);
                reject(error);
            })
            .on('end', () => {
                console.log(`Parsing completed for file: ${filename}`);
                resolve();
            });
    });
}

Promise.all(filesToParse.map(filename => processFile(filename)))
    .then(() => {
        saveMapData(path.join(__dirname, '..', '..', '..', 'utils', 'phones', 'phoneOperatorMapData.ts'), phoneOperatorMap, 'operatorMap');
        saveMapData(path.join(__dirname, '..', '..', '..', 'utils', 'phones', 'phoneNumberRangeMapData.ts'), phoneNumberRangeMap, 'rangeMap');
    })
    .catch(error => {
        console.error('Error processing files:', error);
    });
