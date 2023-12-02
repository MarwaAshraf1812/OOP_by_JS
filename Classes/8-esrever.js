#!/usr/bin/node

//exports.esrever = function (list)
function esrever(list) {
    let listF = [];
    for (let i = list.length - 1; i >= 0; i--) {
        listF.push(list[i]);
    }
    return listF;
}

console.log(esrever([1, 2, 3, 4, 5]));
console.log(esrever(["School", 89, { id: 12 }, "String"]));
