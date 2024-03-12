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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var csv_parser_1 = __importDefault(require("csv-parser"));
var iconv_lite_1 = __importDefault(require("iconv-lite"));
var stream_1 = require("stream");
var networkOperatorsPLByID_1 = require("./networkOperatorsPLByID");
// initialization
var networkOperatorsByID = networkOperatorsPLByID_1.networkOperatorsPLByID;
var networkOperatorsByName = {};
var operatorNumbersRange = {};
// Processing files
var filesToParse = ['PLMN.csv', 'PSTN.csv'];
function expandNumberString(input) {
    var result = [];
    var matchRange = input.match(/\((.*)\)/);
    if (matchRange) {
        var range = matchRange[1].split(',');
        range.forEach(function (part) {
            var parts = part.split('-').map(Number);
            var start = parts[0];
            var end = parts.length > 1 ? parts[1] : start;
            for (var i = start; i <= end; i++) {
                result.push(parseInt(input.replace(/\(.*\)/, i.toString()), 10));
            }
        });
    }
    else {
        result.push(parseInt(input, 10));
    }
    return result;
}
function processFilesForOperatorsByNameAndRange(filename) {
    return new Promise(function (resolve, reject) {
        var filePath = path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        var fileBuffer = fs_1.default.readFileSync(filePath);
        var fileText = iconv_lite_1.default.decode(fileBuffer, 'ISO-8859-2');
        var stream = stream_1.Readable.from(fileText);
        stream.pipe((0, csv_parser_1.default)({ separator: ';' }))
            .on('data', function (line) {
            var operatorId = line['Operator (ID)'];
            var operatorName = operatorId ? networkOperatorsByID[operatorId].name : undefined;
            var ranges = line['Zakres (number)'] ? expandNumberString(line['Zakres (number)']) : [];
            var zoneName = line['Strefa (nazwa)'];
            var zone = line['Strefa (AB)'];
            if (operatorName && operatorId) {
                networkOperatorsByName[operatorName] = { id: operatorId, createdAt: new Date().toISOString() };
            }
            ranges.forEach(function (range) {
                if (range && operatorName && operatorId && !['99990', '99991', '99992'].includes(operatorId)) {
                    operatorNumbersRange["".concat(range)] = {
                        operatorId: operatorId,
                        operatorName: operatorName,
                        zoneName: zoneName,
                        range: range,
                        typ: (zoneName && zone) ? 'stationary' : 'mobile',
                        zone: parseInt(zone),
                        createdAt: new Date().toISOString()
                    };
                }
            });
        })
            .on('end', function () {
            resolve();
        })
            .on('error', function (error) {
            console.error("Error reading CSV file: ".concat(filename), error);
            reject(error);
        });
    });
}
function processFileForOperatorsByID(filename) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var filePath = path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
                    var fileBuffer = fs_1.default.readFileSync(filePath);
                    var fileText = iconv_lite_1.default.decode(fileBuffer, 'ISO-8859-2');
                    var stream = stream_1.Readable.from(fileText);
                    stream.pipe((0, csv_parser_1.default)({ separator: ';' }))
                        .on('data', function (line) {
                        console.error(line);
                        var operatorId = line['Operator (ID)'];
                        if (operatorId && !networkOperatorsByID[operatorId]) {
                            networkOperatorsByID[operatorId] = {
                                name: line['Operator (nazwa)'],
                                createdAt: new Date().toISOString(),
                                checkedManually: false,
                            };
                        }
                    })
                        .on('end', function () {
                        resolve();
                    })
                        .on('error', function (error) {
                        console.error("Error reading CSV file: ".concat(filename), error);
                        reject(error);
                    });
                })];
        });
    });
}
function saveMapData(filePath, obj, objName, typeName) {
    var typeImportStatement = "import { ".concat(typeName, " } from \"./types\";\n\n");
    var content = "export const ".concat(objName, " = ").concat(JSON.stringify(obj, null, 2), ";\n");
    fs_1.default.writeFileSync(filePath, content, { encoding: 'utf-8' });
    console.log("".concat(filePath, " has been saved!"));
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, filesToParse_1, filename, _a, filesToParse_2, filename;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, filesToParse_1 = filesToParse;
                    _b.label = 1;
                case 1:
                    if (!(_i < filesToParse_1.length)) return [3 /*break*/, 4];
                    filename = filesToParse_1[_i];
                    return [4 /*yield*/, processFileForOperatorsByID(filename)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    _a = 0, filesToParse_2 = filesToParse;
                    _b.label = 5;
                case 5:
                    if (!(_a < filesToParse_2.length)) return [3 /*break*/, 8];
                    filename = filesToParse_2[_a];
                    return [4 /*yield*/, processFilesForOperatorsByNameAndRange(filename)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8:
                    saveMapData(path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
                    saveMapData(path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'networkOperatorsPLByName.ts'), networkOperatorsByName, 'networkOperatorsPLByName', 'NetworkOperatorsByName');
                    saveMapData(path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'operatorPLNumbersRange.ts'), operatorNumbersRange, 'operatorPLNumbersRange', 'OperatorNumbersRange');
                    saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByID.ts'), networkOperatorsByID, 'networkOperatorsPLByID', 'NetworkOperatorsByID');
                    saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'networkOperatorsPLByName.ts'), networkOperatorsByName, 'networkOperatorsPLByName', 'NetworkOperatorsByName');
                    saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'operatorPLNumbersRange.ts'), operatorNumbersRange, 'operatorPLNumbersRange', 'OperatorNumbersRange');
                    return [2 /*return*/];
            }
        });
    });
}
run().then(function (r) { return console.log('######### finish #########'); });
