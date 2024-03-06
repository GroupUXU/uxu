"use strict";
var fs = require('fs');
var csv = require('csv-parser');
var phoneOperatorMapData = require('./phoneOperatorMap').phoneOperatorMapData;
var phoneNumberRangeMapData = require('./phoneNumberRangeMapData').phoneNumberRangeMapData;
// Define the maps to store operator and range data
var phoneOperatorMap = new Map();
var phoneNumberRangeMap = new Map();
// Function to parse a single line from the CSV
function parseLine(line) {
    // Extracting the line text from data object
    var lines = line['Numer;Operator (ID);Operator (nazwa);Rodzaj numeru];Data modyfikacji'];
    // Split the line by semicolon
    var segments = lines.split(';');
    var data = { numer: segments[0], operatorID: segments[1], operatorName: segments[2], type: segments[3], createAt: segments[4] };
    console.log(data, 'data');
    if (!phoneOperatorMap.has(data.operatorID)) {
        phoneOperatorMap.set(data.operatorID, data === null || data === void 0 ? void 0 : data.operatorName);
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
    .on('error', function () {
    console.error('Error reading CSV:');
})
    // Once all lines are processed, handle map data
    .on('end', function () {
    // Convert maps to JSON strings
    var phoneOperatorMapJSON = JSON.stringify(Array.from(phoneOperatorMap));
    var phoneNumberRangeMapJSON = JSON.stringify(Array.from(phoneNumberRangeMap));
    // Write operatorMap to a TypeScript file
    fs.writeFile('phoneOperatorMapData.ts', "export const operatorMap = new Map(".concat(phoneOperatorMapJSON, ");"), function (err) {
        if (err)
            throw err;
        console.log('phoneOperatorMapData.ts has been saved!');
    });
    // Write rangeMap to a TypeScript file
    fs.writeFile('phoneNumberRangeMapData.ts', "export const rangeMap = new Map(".concat(phoneNumberRangeMapJSON, ");"), function (err) {
        if (err)
            throw err;
        console.log('phoneNumberRangeMapData.ts has been saved!');
    });
});
