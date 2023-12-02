#!/usr/bin/node
// const Rectangle = require('./4-rectangle');

class Rectangle {
    constructor (w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
        else {
            this.width = undefined;
            this.height = undefined;
        }
    }
    print() {
        let i = 0;
        while (i < this.height) {
            console.log('X'.repeat(this.width));
            i++;
        }
    }
    rotate() {
        let temp = this.width;
        this.width = this.height;
        this.height = temp;
    }
    double() {
        this.width *= 2;
        this.height *= 2;
    }
}
class Square extends Rectangle {
    constructor (size) {
        super(size, size);
    }
    charPrint(c) {
        let i = 0;
        const charPrint = c || 'X';
        while (i < this.height) {
            console.log(charPrint.repeat(this.width));
            i++;
        }
    }
}
// module.exports = Square;

const s1 = new Square(4);
s1.charPrint();

s1.charPrint('C');
