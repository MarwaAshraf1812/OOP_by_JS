/**
 * 4- What are the expected errors (2 errors or undefined output) from the following code? And why? 
 *   What’s the difference between var & let?
 */
"use strict";
function test() {
	for (let i = 0; i < 10; i++) {
        alert(i);
		alert (x);
		let x=10;
	}
console.log(i);
}

/**
 * Variables declared with let and const aren’t hoisted
 * 
 *  expected errors:
 *      ReferenceError: i is not defined:
 *          ->you are trying to log the value of 
 *              i outside the block where it was declared -> (let) has block scope
 *      ReferenceError: x is not defined:
 *          ->alert the value of x before it is declared
 *              let declarations are not hoisted  to the top of
 *              the block like var declarations.
 */
