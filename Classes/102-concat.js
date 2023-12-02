#!/usr/bin/node

/**
 * /require/ in Node.js is typically used for importing modules,
 *  and it won't directly work for non-JavaScript files like text files.
 *  >>> const file1 = require('./fileA');
 * 
 * 
 * 'fs' module to read the files asynchronously 
 *  and then concatenate the contents.'
 */

const fs = require('fs');

/**
 * 1-Reads the content of the file specified by the first command-line argument 
 * 2-The result is stored in the variable -> fileAPath
 * 3-The toString() method is used to convert the Buffer object to a string.
 * 4-Concatenates the contents of the two files (fileAPath and fileBPath) and 
 * writes the result to the file specified by the 
 * third command-line argument (process.argv[4]). 
 * The fs.writeFileSync method is used for synchronous file writing.
 */
const fileAPath = fs.readFileSync(process.argv[2]).toString();
const fileBPath = fs.readFileSync(process.argv[3]).toString();
fs.writeFileSync(process.argv[4], fileAPath + fileBPath);
