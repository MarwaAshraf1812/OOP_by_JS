#!/usr/bin/node

// const myList = require('./100-data');

const myList = [1, 2, 3, 4, 5];
function mapIndex(myList) {
    return myList.map((x , index) => x * index);

}
console.log(myList);
console.log(mapIndex(myList));