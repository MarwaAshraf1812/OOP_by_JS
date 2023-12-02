#!/usr/bin/node

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

// module.exports = Rectangle;

const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();

console.log('Double:');
r1.double();
r1.print();

console.log('Rotate:');
r1.rotate();
r1.print();