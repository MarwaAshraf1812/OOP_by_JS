#!/usr/bin/node

/**
 * The counter variable is declared outside of the exports.logMe function,
 *  making it a shared variable across multiple calls to the logMe function.
 *  This means that the counter retains its value between different calls to the logMe function.
 *  Each time logMe is called, it increments the shared counter.
 */

let counter = 0;
//exports.logMe = function (item)
function logMe(item) {
    console.log(`${counter}: ${item}`);
    counter++;
}

logMe("Hello");
logMe("Best");
logMe("School");

/**
 * 
function logMe(item) {
    let counter = 0;
    console.log(`${counter}: ${item}`);
    counter++;

    ========================================
    This makes counter a local variable, and a new counter is created and initialized to 0
    each time the logMe function is called. As a result, the counter value does not persist between calls,
    and it starts from 0 every time the function is invoked.
}
 */