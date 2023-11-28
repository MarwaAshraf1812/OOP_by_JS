"use strict";
var start = parseInt(prompt('Enter the start number: '));
var end = parseInt(prompt('Enter the End number: '));


function oddNumber(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
oddNumber(start, end);