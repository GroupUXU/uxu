"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const stream_1 = require("stream");
const networkOperatorsPLByID_1 = require("./networkOperatorsPLByID");
// initialization
const networkOperatorsByID = networkOperatorsPLByID_1.networkOperatorsPLByID || {};
const networkOperatorsByName = {};
const operatorNumbersRange = {};
// Processing files
const filesToParse = ['PLMN.csv', 'PSTN.csv'];
function createNetworkOperatorsByName() {
    Object.keys(networkOperatorsByID).forEach((operatorID) => {
        const operator = networkOperatorsByID[operatorID];
        if (Boolean(operator.name)) {
            networkOperatorsByName[operator.name] = { id: operatorID, createdAt: `${new Date()}` };
        }
    });
}
function expandNumberString(input) {
    const result = [];
    const matchRange = input.match(/\((.*)\)/);
    if (matchRange) {
        const range = matchRange[1].split(',');
        range.forEach(part => {
            const parts = part.split('-').map(Number);
            const start = parts[0];
            const end = parts.length > 1 ? parts[1] : start;
            for (let i = start; i <= end; i++) {
                result.push(parseInt(input.replace(/\(.*\)/, i.toString()), 10));
            }
        });
    }
    else {
        result.push(parseInt(input, 10));
    }
    return result;
}
function createOperatorNumbersRange(filename) {
    return new Promise((resolve, reject) => {
        const filePath = path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        const fileBuffer = fs_1.default.readFileSync(filePath);
        const fileText = iconv_lite_1.default.decode(fileBuffer, 'ISO-8859-2');
        const stream = stream_1.Readable.from(fileText);
        stream.pipe((0, csv_parser_1.default)({ separator: ';' })).on('data', (line) => {
            const operatorId = line['Operator (ID)'];
            const operatorName = operatorId ? networkOperatorsByID[operatorId].name : undefined;
            const ranges = line['Zakres (number)'] ? expandNumberString(line['Zakres (number)']) : [];
            const zoneName = line['Strefa (nazwa)'];
            const zone = line['Strefa (AB)'];
            ranges.forEach((range) => {
                if (range && operatorName && operatorId && !['99990', '99991', '99992'].includes(operatorId)) {
                    operatorNumbersRange[`${range}`] = {
                        operatorId,
                        operatorName,
                        zoneName,
                        range,
                        typ: (zoneName && zone) ? 'stationary' : 'mobile',
                        zone: parseInt(zone),
                        createdAt: new Date().toISOString()
                    };
                }
            });
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
function createOperatorsByID(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const filePath = path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'assets', fileName);
            const fileBuffer = fs_1.default.readFileSync(filePath);
            const fileText = iconv_lite_1.default.decode(fileBuffer, 'ISO-8859-2');
            const stream = stream_1.Readable.from(fileText);
            stream.pipe((0, csv_parser_1.default)({ separator: ';' }))
                .on('data', (line) => {
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
                console.error(`Error reading CSV file: ${fileName}`, error);
                reject(error);
            });
        });
    });
}
function saveMapData(filePath, obj, objName, typeName) {
    let typeImportStatement = `import { ${typeName} } from "./types";\n\n`;
    let content = `export const ${objName} = ${JSON.stringify(obj, null, 2)};\n`;
    fs_1.default.writeFileSync(filePath, content, { encoding: 'utf-8' });
    console.log(`${filePath} has been saved!`);
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const fileName of filesToParse) {
            yield createOperatorsByID(fileName);
        }
        createNetworkOperatorsByName();
        for (const fileName of filesToParse) {
            yield createOperatorNumbersRange(fileName);
        }
        saveMapData(path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
        saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
        saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByName.ts'), networkOperatorsByName, 'networkOperatorsPLByName', 'NetworkOperatorsByName');
        saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'operatorPLNumbersRange.ts'), operatorNumbersRange, 'operatorPLNumbersRange', 'OperatorNumbersRange');
    });
}
run().then(r => console.log('######### finish #########'));
