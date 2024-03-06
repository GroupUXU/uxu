"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
// Maps initialization
var phoneOperatorMap = {};
var phoneNumberRangeMap = {};
function expandNumberString(input) {
    var result = [];
    var matchRange = input.match(/\((.*)\)/);
    if (matchRange) {
        var range = matchRange[1].split(',');
        range.forEach(function (part) {
            var parts = part.split('-').map(Number);
            var start = parts[0];
            var end = parts.length > 1 ? parts[1] : start; // Użyj wartości start jako domyślnej dla end, jeśli nie określono zakresu
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
function parseLine(filename, line) {
    var fieldMapping = {
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
    var mapping = fieldMapping[filename];
    if (!mapping)
        return; // Skip jeśli nie ma mapowania dla pliku
    var segments = line[mapping.key].split(';');
    var expandNumberingRange = filename === 'PSTN.csv' ? expandNumberString(segments[mapping.data.numberingRangeIndex]) : [parseInt(segments[mapping.data.numberingRangeIndex])];
    var data = {
        zone: mapping.data.zoneIndex !== undefined ? parseInt(segments[mapping.data.zoneIndex]) : undefined,
        zoneName: mapping.data.zoneNameIndex !== undefined ? segments[mapping.data.zoneNameIndex] : undefined,
        numberingRange: expandNumberingRange,
        operatorName: segments[mapping.data.operatorNameIndex],
        operatorId: parseInt(segments[mapping.data.operatorIdIndex]),
        typ: mapping.data.type,
        createdAt: segments[mapping.data.createdAtIndex]
    };
    console.log(data.operatorName);
    data.numberingRange.forEach(function (range) {
        if (!phoneNumberRangeMap[range] && data.operatorName && ![99990, 99991, 99992].includes(data.operatorId)) {
            phoneNumberRangeMap[range] = __assign(__assign({}, data), { numberingRange: range });
        }
    });
    if (!phoneOperatorMap["".concat(data.operatorId)]) {
        phoneOperatorMap["".concat(data.operatorId)] = {
            operatorId: data.operatorId,
            operatorName: data.operatorName
        };
    }
}
function saveMapData(filePath, obj, objName) {
    var content = "export const ".concat(objName, " = ").concat(JSON.stringify(obj, null, 2), ";\n");
    fs_1.default.writeFileSync(filePath, content, { encoding: 'utf-8' });
    console.log("".concat(filePath, " has been saved!"));
}
function mapValueToCode(value) {
    return "{ ".concat(Object.entries(value).map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(k, ": ").concat(JSON.stringify(v));
    }).join(', '), " }");
}
// Processing files
var filesToParse = ['PLMN.csv', 'PSTN.csv'];
function processFile(filename) {
    return new Promise(function (resolve, reject) {
        var filePath = path_1.default.join(__dirname, '..', '..', 'src', 'phones', 'assets', filename);
        var fileBuffer = fs_1.default.readFileSync(filePath);
        var fileText = iconv_lite_1.default.decode(fileBuffer, 'ISO-8859-2');
        var stream = stream_1.Readable.from(fileText);
        stream.pipe((0, csv_parser_1.default)())
            .on('data', function (line) { return parseLine(filename, line); })
            .on('error', function (error) {
            console.error("Error reading CSV file: ".concat(filename), error);
            reject(error);
        })
            .on('end', function () {
            console.log("Parsing completed for file: ".concat(filename));
            resolve();
        });
    });
}
Promise.all(filesToParse.map(function (filename) { return processFile(filename); }))
    .then(function () {
    saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'phoneOperatorMapData.ts'), phoneOperatorMap, 'operatorMap');
    saveMapData(path_1.default.join(__dirname, '..', '..', '..', 'utils', 'phones', 'phoneNumberRangeMapData.ts'), phoneNumberRangeMap, 'rangeMap');
})
    .catch(function (error) {
    console.error('Error processing files:', error);
});
