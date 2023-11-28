"use strict";

let name;
do {
    name = prompt('Enter your name');
} while (!name || typeof name !== 'string');


let birthYear;
do {
    birthYear = parseInt(prompt('Enter your birth year'));
} while (isNaN(birthYear) || birthYear >= 2010);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.write(`Name: ${name}<br>`);
document.write(`Birth year: ${birthYear}<br>`);
document.write(`Age: ${age}`);