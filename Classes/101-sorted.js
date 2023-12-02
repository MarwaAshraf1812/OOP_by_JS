#!/usr/bin/node

// const dict = require('./101-data').dict;


const dict = {
    89: 1,
    90: 2,
    91: 1,
    92: 3,
    93: 1,
    94: 2
};
/**
 * Object.values() to extract the values 
 * from the dict object and create an array
 * (valuesArray) containing those values
 * then sorting that array in ascending order 
 * based on the numeric values of its elements.
 */

const valuesArray = Object.values(dict);
valuesArray.sort((a, b) => a - b);
keysByValue = {};
for (const key in dict) {
    const value = dict[key];
    if (!keysByValue[value]) {
        keysByValue[value] = [];
    }
    keysByValue[value].push(key);
}
console.log("Original dictionary");
console.log(dict);
console.log("Sorted dictionary");
console.log(keysByValue);