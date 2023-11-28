"use strict";
// Taking user input as a comma-separated string by split() and converting it into an array by map()
var arr = prompt('Enter an Array : ').split(',').map(Number);

function sumArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(arr));
