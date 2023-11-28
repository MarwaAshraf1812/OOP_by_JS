"use strict";
var degree = parseFloat(prompt('Enter today’s temperature :'));
var actualFeel = parseFloat(prompt('Enter Actual feel temperature :'));

function temperature(degree, actualFeel) {
    let tempMsg = degree >= 25 && degree <= 30 && actualFeel >= 25 && actualFeel <= 30
    ? "normal"
    : degree < 25 && actualFeel < 25
    ? "cold"
    : "hot";

    console.log(tempMsg);
}
temperature(degree, actualFeel);