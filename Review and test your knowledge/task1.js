/*
1-Try this code using strict mode and without strict mode, 
the difference? And why?
 */
"use strict";
function foo() {
    var x;
    x = 5;
    y = 6;    
    return x + y;
}
console.log(foo());
/**
 * Without Strict Mode:
 *  -> it becomes a global variable by default.
 *      This can lead to unexpected behavior and 
 *      bugs in code. 
 * With Strict Mode:
 *  -> Uncaught ReferenceError: y is not defined
 *      (is helps catch common programming mistakes 
 *      and makes the code more robust.)
 */