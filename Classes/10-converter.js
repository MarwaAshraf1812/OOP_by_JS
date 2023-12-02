#!/usr/bin/node

/**
 *It creates a closure, allowing you to create specific conversion functions for different bases
    without the need to define a specific number each time.
    It provides a more flexible and reusable solution. 
    You can create multiple conversion functions for different bases and use them independently.
 */
function converter(base) {
    return function(numberToConvert) {
        return numberToConvert.toString(base);
    };
}

let myConverter = converter(10);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));


myConverter = converter(16);

console.log(myConverter(2));
console.log(myConverter(12));
console.log(myConverter(89));

/**
 *
exports.converter = function (base) {
    const numberToConvert = arguments[0];
    //Creates a variable named numberToConvert and assigns the value of the first argument passed to the function.
    
    if (base >= 2 && base <= 36) {
    return numberToConvert.toString(base);
    } else {
    console.error('Error: Base must be between 2 and 36 (inclusive)');
    return null;
    }
        =========================================================
    The function is designed to convert a specific number (numberToConvert).
    This means that every time you use this function,
    it will always attempt to convert the same number, 
    regardless of the argument you provide.



 */